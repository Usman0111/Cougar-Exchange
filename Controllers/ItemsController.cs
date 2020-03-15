using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Cougar_Exchange.Models;

namespace Cougar_Exchange.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly ExchangeContext _context;

        public ItemsController(ExchangeContext context)
        {
            _context = context;
        }

        //GET: api/items
        [HttpGet]
        public ActionResult<IEnumerable<Item>> GetItems()
        {
            return _context.Items.ToList();
        }

        //GET: api/items/{id}
        [HttpGet("{id}")]
        public ActionResult<Item> GetItem(string id)
        {
            var Item = _context.Items.Find(id);

            if (Item == null)
            {
                return NotFound();
            }

            return Item;
        }

        //POST: api/items
        [HttpPost]
        public ActionResult<Item> PostItem(Item item)
        {
            _context.Items.Add(item);
            _context.SaveChanges();

            return CreatedAtAction("GetItem", new Item { Id = item.Id }, item);
        }

        //PUT: api/items/{id}
        [HttpPut("{id}")]
        public ActionResult PutItem(string id, Item item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        //DELETE: api/items/{id}
        [HttpDelete("{id}")]
        public ActionResult<Item> DeleteItem(string id)
        {
            var item = _context.Items.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.Items.Remove(item);
            _context.SaveChanges();

            return item;
        }
    }
}