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
            var initialUser = new User
            {
                Id=1,
                Name = "Tea lover",
                PasswordHash = "1234567890",
                EmailAdress = "some@email.adress",
            };
            
            var initialTeas = new[]
            {
                new Tea
                {
                    UserId = initialUser.Id.GetValueOrDefault(),
                    Name = "Цзуй Гуй Фей",
                    AdditionalName = "Пьяная любовница императора",
                    Type = "Темный улун",
                    Notes = "Классный чай. Рекомендую. Пить в чайной паре.",
                    CreationDate = new DateTime(2019,1,1),
                    UpdateDate = new DateTime(2019,1,1)
                },
                new Tea
                {
                    UserId = initialUser.Id.GetValueOrDefault(),
                    Name = "Дянь Хун Да Дзинь Я",
                    AdditionalName = "Большая золотая почка из Фэнцина",
                    Type = "Красный",
                    Notes = "Классный чай. Рекомендую",
                    CreationDate = new DateTime(2019,1,1),
                    UpdateDate = new DateTime(2019,1,1)
                },
                new Tea
                {
                    UserId = initialUser.Id.GetValueOrDefault(),
                    Name = "Трындец",
                    AdditionalName = "Полный трындец",
                    Type = "Молочный шен пуэр",
                    Notes = "Сделан из шена 80-летней выдержки и ириски",
                    CreationDate = new DateTime(2019,1,1),
                    UpdateDate = new DateTime(2019,1,1)
                }
            };
            
            
            context.Users.AddOrUpdate(initialUser);
            context.Teas.AddOrUpdate(initialTeas);
        }
    }
}