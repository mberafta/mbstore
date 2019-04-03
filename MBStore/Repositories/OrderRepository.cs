using MBStore.Database;
using MBStore.Interfaces;
using MBStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private MBStoreDbContext _context;

        public bool CreateOrder(Order order)
        {
            Order existingOrder = _context.Orders.FirstOrDefault(o => o.Id == order.Id);

            if (existingOrder == null)
            {
                try
                {
                    _context.Orders.Add(order);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
            else
                return false;
        }

        public Order GetOrder(Guid id)
        {
            Order existingOrder = _context.Orders.FirstOrDefault(o => o.Id == id);

            if (existingOrder != null)
                return existingOrder;
            else
                return null;
        }

        public Order UpdateOrder(Order order)
        {
            Order existingOrder = _context.Orders.FirstOrDefault(o => o.Id == order.Id);

            if (existingOrder == null)
                return null;
            else
            {
                existingOrder = order;
                _context.Orders.Update(order);

                return order;
            }
        }

        public bool DeleteOrder(Guid id)
        {
            Order existingOrder = _context.Orders.FirstOrDefault(o => o.Id == id);

            if (existingOrder != null)
            {
                try
                {
                    _context.Orders.Remove(existingOrder);
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
            else
            {
                return false;
            }

        }

        public IQueryable<Order> GetOrders()
        {
            return _context.Orders;
        }

        public OrderRepository(MBStoreDbContext context)
        {
            this._context = context;
        }
    }
}
