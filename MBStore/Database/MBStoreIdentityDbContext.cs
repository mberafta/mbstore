using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Database
{
    public class MBStoreIdentityDbContext : IdentityDbContext<IdentityUser>
    {
        public MBStoreIdentityDbContext(DbContextOptions<MBStoreIdentityDbContext> options) : base(options)
        {

        }
    }
}
