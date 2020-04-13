namespace Cougar_Exchange.Models
{
    public class Offer
    {
        public string Id { get; set; }
        public string ItemOffered { get; set; }
        public string ItemRequested { get; set; }
        public int UserId { get; set; } //user who made the offer
    }
}