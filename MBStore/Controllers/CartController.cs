using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MBStore.ClassExtensions;
using MBStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MBStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        [HttpGet]
        public Cart GetCurrentCart()
        {
            var currentCart = HttpContext.Session.GetJson<Cart>(Constants.CartSessionKey);

            if (currentCart == null)
                return new Cart();
            else
                return currentCart;
        }

        [HttpPost]
        public Cart SetCurrentCart(Cart cart)
        {
            HttpContext.Session.SetJson(Constants.CartSessionKey, cart);
            return HttpContext.Session.GetJson<Cart>(Constants.CartSessionKey);
        }

    }
}