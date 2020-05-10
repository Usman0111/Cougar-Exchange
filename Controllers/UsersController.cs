using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Cougar_Exchange.Helpers;
using Cougar_Exchange.Models;
using Cougar_Exchange.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Cougar_Exchange.Controllers {
    [Authorize]
    [ApiController]
    [Route ("api/[controller]")]
    public class UsersController : ControllerBase {
        private IUserService _userService;
        private AppSettings _appSettings;

        public UsersController (IUserService userService, IOptions<AppSettings> appSettings) {
            _appSettings = appSettings.Value;
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost ("authenticate")]
        public IActionResult Authenticate ([FromBody] Authenticate model) {
            var user = _userService.Authenticate (model.Username, model.Password);

            if (user == null)
                return BadRequest (new { message = "Incorrect Username or Password!" });

            var tokenHandler = new JwtSecurityTokenHandler ();
            var key = Encoding.ASCII.GetBytes (_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity (new Claim[] {
                new Claim (ClaimTypes.Name, user.Id.ToString ())
                }),
                Expires = DateTime.UtcNow.AddDays (7),
                SigningCredentials = new SigningCredentials (new SymmetricSecurityKey (key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken (tokenDescriptor);
            var tokenString = tokenHandler.WriteToken (token);

            //return basic user info and jwt authentication token
            return Ok (new {
                Id = user.Id,
                    Username = user.Username,
                    Token = tokenString
            });
        }

        [AllowAnonymous]
        [HttpPost ("register")]
        public IActionResult Register ([FromBody] Register model) {
            User user = new User ();
            user.Username = model.Username;
            user.Email = model.Email;

            try {
                // create user
                _userService.Create (user, model.Password);
                return Ok ();
            } catch (AppException ex) {
                // return error message if there was an exception
                return BadRequest (new { message = ex.Message });
            }
        }

    }
}