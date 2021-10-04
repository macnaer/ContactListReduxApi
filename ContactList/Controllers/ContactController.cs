using ContactList.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        private AppDbContext _db;
        public ContactController(AppDbContext db)
        {
            _db = db;
        }
        [HttpGet("get-all-contacts")]
        public IActionResult GetAllContacts()
        {
            return Ok(_db.Contacts.AsEnumerable());
        }

        [HttpPost("add-contact")]
        public IActionResult AddContact(ContactVM contactVM)
        {
            _db.Contacts.Add(contactVM);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut("edit-contact")]
        public IActionResult EditContact(Contact contact)
        {
            var _contact = _db.Contacts.FirstOrDefault(n => n.Id == contact.Id);
            if (_contact != null)
            {
                _contact.Name = contact.Name;
                _contact.Email = contact.Email;
                _contact.Gender = contact.Gender;
                _contact.Phone = contact.Phone;
                _contact.Status = contact.Status;
                _contact.Image = contact.Image;
                _db.SaveChanges();
            }
            return Ok();
        }

        [HttpDelete("delete-contact")]
        public IActionResult DeleteContact(int Id)
        {
            var _contact = _db.Contacts.FirstOrDefault(n => n.Id == Id);
            _db.Contacts.Remove(_contact);
            _db.SaveChanges();
            return Ok();
        }
    }
}
