using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MBStore.Interfaces;
using MBStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MBStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductRepository _repository;
        private const int PageSize = 9; 

        public ProductController(IProductRepository repository)
        {
            _repository = repository;
        }

        [HttpGet] // api/Product
        public IEnumerable<Product> GetProducts()
        {
            return _repository.Products;
        }

        [HttpGet("{id}")]
        public Product GetProduct(Guid id)
        {
            Product existingProduct = _repository.Products.FirstOrDefault(p => p.ProductId == id);
            return existingProduct;
        }
    }
}