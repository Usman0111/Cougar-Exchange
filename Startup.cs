using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cougar_Exchange.Helpers;
using Cougar_Exchange.Models;
using Cougar_Exchange.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace Cougar_Exchange {
    public class Startup {
        public IConfiguration _configuration { get; }

        public Startup (IConfiguration configuration) => _configuration = configuration;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            // Connecting to the database
            services.AddDbContextPool<ExchangeContext> (options => options
                .UseMySql (_configuration["Data:CougarExchangeConnection:ConnectionString"]));

            // Jwt key configuration 
            var appSettingsSection = _configuration.GetSection ("AppSettings");
            services.Configure<AppSettings> (appSettingsSection);

            // Configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings> ();
            var key = Encoding.ASCII.GetBytes (appSettings.Secret);
            services.AddAuthentication (x => {
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer (x => {
                    x.Events = new JwtBearerEvents {
                        OnTokenValidated = context => {
                            var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService> ();
                            var userId = int.Parse (context.Principal.Identity.Name);
                            var user = userService.GetById (userId);
                            if (user == null) {
                                // return unauthorized if user no longer exists
                                context.Fail ("Unauthorized");
                            }
                            return Task.CompletedTask;
                        }
                    };
                    x.RequireHttpsMetadata = false;
                    x.SaveToken = true;
                    x.TokenValidationParameters = new TokenValidationParameters {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey (key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            // For testing
            services.AddControllers ();
            services.AddCors (c => {
                c.AddPolicy ("AllowOrigin", options => options.AllowAnyOrigin ());
            });
            services.AddControllersWithViews ();

            // Configure DI for application services
            services.AddScoped<IUserService, UserService> ();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles (configuration => {
                configuration.RootPath = "client/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                app.UseExceptionHandler ("/Error");
            }

            app.UseStaticFiles ();
            app.UseSpaStaticFiles ();

            app.UseRouting ();
            // For testing
            app.UseCors (options => options.AllowAnyOrigin ().AllowAnyHeader ().AllowAnyMethod ());

            app.UseAuthentication ();
            app.UseAuthorization ();

            // Run just backend
            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ();
            });

            // Run both frontend and backend
            // app.UseEndpoints (endpoints => {
            //     endpoints.MapControllerRoute (
            //         name: "default",
            //         pattern: "{controller}/{action=Index}/{id?}");
            // });

            // app.UseSpa (spa => {
            //     spa.Options.SourcePath = "client";

            //     if (env.IsDevelopment ()) {
            //         spa.UseReactDevelopmentServer (npmScript: "start");
            //     }
            // });
        }
    }
}