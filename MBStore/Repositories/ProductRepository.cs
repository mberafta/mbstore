using MBStore.Database;
using MBStore.Interfaces;
using MBStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private MBStoreDbContext _context;

        public IQueryable<Product> Products => _context.Products;

        public async Task<IQueryable<Product>> AsyncProducts()
        {
            await Task.Delay(250);
            return _context.Products;
        }

        public ProductRepository(MBStoreDbContext context)
        {
            _context = context;
        }
    }
}
