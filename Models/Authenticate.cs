using System.ComponentModel.DataAnnotations;

namespace Cougar_Exchange.Models
{
    public class Authenticate
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}