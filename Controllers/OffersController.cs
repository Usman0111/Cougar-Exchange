using System.Collections.Generic;
using Cougar_Exchange.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace Cougar_Exchange.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class OffersController : ControllerBase
    {
        private readonly ExchangeContext _context;

        public OffersController(ExchangeContext context)
        {
            _context = context;
        }

        //GET: api/offers
        [HttpGet]
        public ActionResult<IEnumerable<Offer>> GetOffers()
        {
            return _context.Offers;
        }

        //GET: api/offers/{id}
        [HttpGet("{id}")]
        public ActionResult<Offer> GetOffer(string id)
        {
            var Offer = _context.Offers.Find(id);

            if (Offer == null)
            {
                return NotFound();
            }

            return Offer;
        }

        //POST: api/offers
        [HttpPost]
        public ActionResult<Offer> PostOffer(Offer offer)
        {
            _context.Offers.Add(offer);
            _context.SaveChanges();

            return CreatedAtAction("GetOffer", new Offer { Id = offer.Id }, offer);
        }

        //PUT: api/offers/{id}
        [HttpPut("{id}")]
        public ActionResult PutOffer(string id, Offer offer)
        {
            if (id != offer.Id)
            {
                return BadRequest();
            }

            _context.Entry(offer).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        //DELETE: api/offers/{id}
        [HttpDelete("{id}")]
        public ActionResult<Offer> DeleteOffer(string id)
        {
            var offer = _context.Offers.Find(id);

            if (offer == null)
            {
                return NotFound();
            }

            _context.Offers.Remove(offer);
            _context.SaveChanges();

            return offer;
        }
    }
}