using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MBStore.Interfaces;
using MBStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MBStore.ClassExtensions;

namespace MBStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderRepository _repository;

        [HttpGet]
        public IEnumerable<Order> GetOrders()
        {
            return _repository.GetOrders();
        }

        [HttpGet("{id}")]
        public Order GetOrder(Guid id)
        {
            return _repository.GetOrder(id);
        }

        [HttpPut]
        public Order UpdateOrder(Order order)
        {
            return _repository.UpdateOrder(order);
        }

        [HttpPost]
        public bool CreateOrder(Order order)
        {
            return _repository.CreateOrder(order);
        }


        public OrderController(IOrderRepository repository)
        {
            _repository = repository;
        }
    }
}