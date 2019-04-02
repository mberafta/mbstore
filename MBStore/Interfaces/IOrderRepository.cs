using MBStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Interfaces
{
    interface IOrderRepository
    {
        IQueryable<Order> GetOrders();

        Order GetOrder(Guid id);

        Guid CreateOrder(Order order);

    }
}
