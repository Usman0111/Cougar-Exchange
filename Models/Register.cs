using System.ComponentModel.DataAnnotations;

namespace Cougar_Exchange.Models
{
    public class Register
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }


    }
}