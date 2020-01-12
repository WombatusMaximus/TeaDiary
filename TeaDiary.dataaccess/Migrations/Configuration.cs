using System.Collections.Generic;
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
                EmailAddress = "some@email.address",
            };

            context.Users.AddOrUpdate(initialUser);
            context.SaveChanges();

            var initialTeaSession = new TeaSession
            {
                Id = 1,
                User = null,
                UserId = 1,
                Date = new DateTime(2020, 1, 1),
                Duration = new TimeSpan(2, 0, 0),
                Participants = new List<string> { "Биба", "Боба" },
                Notes = "Чёт пили. Было вкусно",
                Teas = null
            };

            context.TeaSessions.AddOrUpdate(initialTeaSession);
            context.SaveChanges();
        }
    }
}