﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace MBStore.Models
{
    public class IdentitySeedData
    {
        private const string _adminUser = "Admin";
        private const string _adminPassword = "Admin34$";

        public static async void EnsurePopulated(IApplicationBuilder app)
        {
            var userManager = app.ApplicationServices.GetRequiredService<UserManager<IdentityUser>>();

            IdentityUser user = await userManager.FindByIdAsync(_adminUser);

            if(user == null)
            {
                user = new IdentityUser(_adminUser);
                await userManager.CreateAsync(user, _adminPassword);
            }
        }
    }
}
