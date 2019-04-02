using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public class CartItemProduct
    {
        public Guid CartItemId { get; set; }
        public CartItem CartItem { get; set; }

        public Guid ProductId { get; set; }
        public Product Product { get; set; }
    }
}
