using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public class Order
    {
        public Guid Id { get; set; }

        public string Status { get; set; }

        public Guid CartId { get; set; }

        public Cart Cart { get; set; }
    }
}
