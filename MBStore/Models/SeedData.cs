using MBStore.Database;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MBStore.Models
{
    public static class SeedData
    {
        public static void EnsurePopulated(IApplicationBuilder app)
        {
            MBStoreDbContext context = app.ApplicationServices.GetRequiredService<MBStoreDbContext>();

            context.Database.Migrate();

            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product
                    {
                        Id = Guid.NewGuid(),
                        Name = "Toupie Beyblade",
                        Description = "La super toupie des kevin de 12 ans.",
                        VATRate = 0.20m,
                        ExcludingTaxPrice = 9.50m,
                        IncludingTaxPrice = (1.20m) * 9.50m
                    },
                    new Product
                    {
                        Id = Guid.NewGuid(),
                        Name = "Porte-clé Mickey",
                        Description = "L'accessoire parfait pour finir seul.",
                        VATRate = 0.10m,
                        ExcludingTaxPrice = 19.50m,
                        IncludingTaxPrice = (1.10m) * 19.50m
                    },
                    new Product
                    {
                        Id = Guid.NewGuid(),
                        Name = "Poke-ball",
                        Description = "Puceau jusqu'à 45 ans.",
                        VATRate = 0.15m,
                        ExcludingTaxPrice = 7.70m,
                        IncludingTaxPrice = (1.15m) * 7.70m
                    }
               );

                context.SaveChanges();
            }
        }
    }
}
