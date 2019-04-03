using MBStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Interfaces
{
    public interface IOrderRepository
    {
        IQueryable<Order> GetOrders();

        Order GetOrder(Guid id);

        bool CreateOrder(Order order);

        Order UpdateOrder(Order order);

        bool DeleteOrder(Guid id);
    }
}
