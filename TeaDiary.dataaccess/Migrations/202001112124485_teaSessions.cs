namespace TeaDiary.dataaccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class teaSessions : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TastingNotes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UsedTeaware = c.String(),
                        Comment = c.String(),
                        Tea_Id = c.Int(),
                        Session_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Teas", t => t.Tea_Id)
                .ForeignKey("dbo.TeaSessions", t => t.Session_Id)
                .Index(t => t.Tea_Id)
                .Index(t => t.Session_Id);
            
            CreateTable(
                "dbo.TeaSessions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Duration = c.Time(nullable: false, precision: 7),
                        Notes = c.String(),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.User_Id);
            
            AddColumn("dbo.Users", "TeaSession_Id", c => c.Int());
            CreateIndex("dbo.Users", "TeaSession_Id");
            AddForeignKey("dbo.Users", "TeaSession_Id", "dbo.TeaSessions", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TeaSessions", "UserId", "dbo.Users");
            DropForeignKey("dbo.TastingNotes", "Session_Id", "dbo.TeaSessions");
            DropForeignKey("dbo.Users", "TeaSession_Id", "dbo.TeaSessions");
            DropForeignKey("dbo.TastingNotes", "Tea_Id", "dbo.Teas");
            DropForeignKey("dbo.TeaSessions", "User_Id", "dbo.Users");
            DropIndex("dbo.Users", new[] { "TeaSession_Id" });
            DropIndex("dbo.TeaSessions", new[] { "User_Id" });
            DropIndex("dbo.TeaSessions", new[] { "UserId" });
            DropIndex("dbo.TastingNotes", new[] { "Session_Id" });
            DropIndex("dbo.TastingNotes", new[] { "Tea_Id" });
            DropColumn("dbo.Users", "TeaSession_Id");
            DropTable("dbo.TeaSessions");
            DropTable("dbo.TastingNotes");
        }
    }
}
