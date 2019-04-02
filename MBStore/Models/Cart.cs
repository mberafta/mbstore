using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public class Cart
    {
        public Guid Id { get; set; }

        public decimal Total { get; set; }

        public List<CartItem> CartItems { get; set; }

        public Order Order { get; set; }

        public Cart()
        {
            Id = Guid.NewGuid();
            CartItems = new List<CartItem>();
        }
    }
}
