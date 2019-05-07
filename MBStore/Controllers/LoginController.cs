using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using MBStore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace MBStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public Encoding Utf8 = Encoding.UTF8;
        private readonly string _tokenSecret = "MBStoreSecret$34"; // A mieux gérer
        private readonly string host = "http://localhost:44354";

        [HttpPost]
        public LoginResponse Authenticate(Login model)
        {
            LoginResponse response = new LoginResponse();

            if (model == null)
            {
                response.HttpStatus = 400;
            }
            else
            {
                if (model.Name == "Viko" && model.Password == "Viko34")
                {
                    var secretKey = new SymmetricSecurityKey(Utf8.GetBytes(_tokenSecret));
                    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var tokenOptions = new JwtSecurityToken(
                        issuer: host,
                        audience: host,
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddMinutes(1),
                        signingCredentials: signinCredentials
                    );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                    response.Token = tokenString;
                    response.HttpStatus = 200;
                }
            }

            return response;
        }
    }

    public class LoginResponse
    {
        public string Token { get; set; }
        public int HttpStatus { get; set; }
    }
}