using MBStore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Database
{
    public class MBStoreDbContext : DbContext
    {
        public MBStoreDbContext(DbContextOptions<MBStoreDbContext> options) : base(options)
        {

        }

        // Entities
        public DbSet<Product> Products { get; set; }

        public DbSet<Cart> Carts { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<CartItem> CartItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .HasOne(o => o.Cart)
                .WithOne(c => c.Order);

            modelBuilder.Entity<Cart>()
                .HasMany(c => c.CartItems)
                .WithOne(ci => ci.Cart);

            modelBuilder.Entity<CartItem>()
                .HasOne(ci => ci.Product);
        }
    }
}
