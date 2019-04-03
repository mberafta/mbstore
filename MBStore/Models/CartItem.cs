using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public class CartItem
    {
        public Guid CartItemId { get; set; }

        public IList<CartItemProduct> CartItemProducts { get; set; }

        public int Quantity { get; set; }

        public decimal Subtotal { get; set; }

        public Guid CartId { get; set; }

        public Cart Cart { get; set; }

        public CartItem()
        {
            CartItemId = Guid.NewGuid();
        }

    }
}
