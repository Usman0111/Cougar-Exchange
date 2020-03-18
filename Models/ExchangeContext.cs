using Microsoft.EntityFrameworkCore;

namespace Cougar_Exchange.Models {
    public class ExchangeContext : DbContext {
        public ExchangeContext (DbContextOptions<ExchangeContext> options) : base (options) { }

        public DbSet<Item> Items { get; set; }
        public DbSet<Offer> Offers { get; set; }
    }
}