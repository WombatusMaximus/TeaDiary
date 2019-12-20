using TeaDiary.domain.Models;

namespace TeaDiary.data_access
{
    public class TeaDiaryContext : DbContext
    {
        public DbSet<Tea> Values { get; set; }

        public TeaDiaryContext()
            : base("DefaultConnection")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tea>().ToTable("Values");

        }
    }
}