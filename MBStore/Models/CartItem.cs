using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public class CartItem
    {
        public Guid Id { get; set; }

        public Product Product { get; set; }

        public int Quantity { get; set; }

        public decimal Subtotal { get; set; }

        public Cart Cart { get; set; }

        public CartItem()
        {
            Id = Guid.NewGuid();
        }

    }
}
