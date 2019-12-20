using TeaDiary.domain.Models;

namespace TeaDiary.dataaccess.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<TeaDiaryContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(TeaDiaryContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.E:\Coding\TeaDiary\TeaDiary.domain\Models\Tea.cs
            context.Teas.AddOrUpdate(new[]
            {
                new Tea
                {
                    //ID = 3,
                    //User = null,
                    UserId = 1,
                    Name = "Цзуй Гуй Фей",
                    AdditionalName = "Пьяная любовница императора",
                    Type = "Темный улун",
                    Notes = "Классный чай. Рекомендую. Пить в чайной паре.",
                    CreationDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                },
                new Tea
                {
                    //ID = 2,
                    //User = null,
                    UserId = 1,
                    Name = "Дянь Хун Да Дзинь Я",
                    AdditionalName = "Большая золотая почка из Фэнцина",
                    Type = "Красный",
                    Notes = "Классный чай. Рекомендую",
                    CreationDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                }
            });
        }
    }
}