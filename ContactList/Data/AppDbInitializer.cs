using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactList.Data
{
    public class AppDbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();
                if (!context.Contacts.Any())
                {
                    context.Contacts.AddRange(
                    new Contact
                    {
                        Name = "Anna Gordon",
                        Phone = "4555666666",
                        Email = "gord@gmail.com",
                        Gender = "men",
                        Status = "Private",
                        Image = "17"
                    },
                    new Contact
                    {
                        Name = "Anna Gordon",
                        Phone = "4555666666",
                        Email = "gord@gmail.com",
                        Gender = "women",
                        Status = "Private",
                        Image = "13"
                    },
                    new Contact
                    {
                        Name = "Anna Gordon",
                        Phone = "4555666666",
                        Email = "gord@gmail.com",
                        Gender = "men",
                        Status = "Private",
                        Image = "11"
                    });
                    context.SaveChanges();
                }
            }
        }
    }
}
