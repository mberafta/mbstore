using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public class Cart
    {
        public Guid CartId { get; set; }

        public decimal Total { get; set; }

        public ICollection<CartItem> CartItems { get; set; }

        public Guid OrderId { get; set; }
        public Order Order { get; set; }

        public Cart()
        {
            CartId = Guid.NewGuid();
            CartItems = new List<CartItem>();
        }
    }
}
