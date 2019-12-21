using System.Data.Entity;
using TeaDiary.domain.Models;

namespace TeaDiary.dataaccess
{
    public class TeaDiaryContext : DbContext
    {
        public DbSet<Tea> Teas { get; set; }
        public DbSet<User> Users { get; set; }

        public TeaDiaryContext()
            : base("DefaultConnection")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tea>().ToTable("Teas");
            modelBuilder.Entity<User>().ToTable("Users");
        }
    }
}