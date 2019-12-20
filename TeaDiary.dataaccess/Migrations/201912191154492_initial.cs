namespace TeaDiary.dataaccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Teas", "UserId", "dbo.Users");
            DropIndex("dbo.Teas", new[] { "UserId" });
            DropTable("dbo.Users");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        PasswordHash = c.String(),
                        EmailAdress = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateIndex("dbo.Teas", "UserId");
            AddForeignKey("dbo.Teas", "UserId", "dbo.Users", "ID", cascadeDelete: true);
        }
    }
}
