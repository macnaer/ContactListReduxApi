using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactList.Data
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string Status { get; set; }
        public string Image { get; set; }
        public static implicit operator Contact(ContactVM contactVM)
        {
            return new Contact()
            {
                Name = contactVM.Name,
                Phone = contactVM.Phone,
                Email = contactVM.Email,
                Gender = contactVM.Gender,
                Status = contactVM.Status,
                Image = contactVM.Image
            };
        }
    }
    public class ContactVM
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string Status { get; set; }
        public string Image { get; set; }
    }
}
