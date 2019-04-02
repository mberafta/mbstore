using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public class Product
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal ExcludingTaxPrice { get; set; }
        public decimal IncludingTaxPrice { get; set; }
        public decimal VATRate { get; set; }

        public IList<CartItemProduct> CartItemProducts { get; set; }
    }
}
