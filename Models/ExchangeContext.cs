using Microsoft.EntityFrameworkCore;

namespace Cougar_Exchange.Models
{
    public class ExchangeContext : DbContext
    {
        public ExchangeContext(DbContextOptions<ExchangeContext> options) : base(options) { }

        //creates the items table
        public DbSet<Item> Items { get; set; }
    }
}