using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentDataAPI.Data
{
    public class ContactedDbContext: DbContext
    {
        public DbSet<StudentDataAPI.Models.Contact> Contacts { get; set; }
        public ContactedDbContext(DbContextOptions<ContactedDbContext> options)
            : base(options)
        { }
    }
}
