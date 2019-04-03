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
                .HasOne<Cart>(o => o.Cart)
                .WithOne(c => c.Order)
                .HasForeignKey<Cart>(c => c.OrderId);

            modelBuilder.Entity<CartItem>()
                .HasOne<Cart>(c => c.Cart)
                .WithMany(ca => ca.CartItems)
                .HasForeignKey(c => c.CartId);

            modelBuilder.Entity<CartItemProduct>().HasKey(cip => new { cip.ProductId, cip.CartItemId });

            modelBuilder.Entity<CartItemProduct>()
                .HasOne<Product>(cip => cip.Product)
                .WithMany(p => p.CartItemProducts)
                .HasForeignKey(cip => cip.ProductId);

            modelBuilder.Entity<CartItemProduct>()
                .HasOne<CartItem>(cip => cip.CartItem)
                .WithMany(p => p.CartItemProducts)
                .HasForeignKey(cip => cip.CartItemId);
        }
    }
}
