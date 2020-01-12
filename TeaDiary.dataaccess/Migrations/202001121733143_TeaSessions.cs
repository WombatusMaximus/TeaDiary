namespace TeaDiary.dataaccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TeaSessions : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TastingNotes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        SessionId = c.Int(nullable: false),
                        TeaId = c.Int(nullable: false),
                        UsedTeaware = c.String(),
                        Comment = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.TeaSessions", t => t.SessionId, cascadeDelete: true)
                .ForeignKey("dbo.Teas", t => t.TeaId, cascadeDelete: true)
                .Index(t => t.SessionId)
                .Index(t => t.TeaId);
            
            CreateTable(
                "dbo.TeaSessions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Duration = c.Time(nullable: false, precision: 7),
                        Notes = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: false)
                .Index(t => t.UserId);
            
            AddColumn("dbo.Users", "EmailAddress", c => c.String());
            DropColumn("dbo.Users", "EmailAdress");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "EmailAdress", c => c.String());
            DropForeignKey("dbo.TastingNotes", "TeaId", "dbo.Teas");
            DropForeignKey("dbo.TeaSessions", "UserId", "dbo.Users");
            DropForeignKey("dbo.TastingNotes", "SessionId", "dbo.TeaSessions");
            DropIndex("dbo.TeaSessions", new[] { "UserId" });
            DropIndex("dbo.TastingNotes", new[] { "TeaId" });
            DropIndex("dbo.TastingNotes", new[] { "SessionId" });
            DropColumn("dbo.Users", "EmailAddress");
            DropTable("dbo.TeaSessions");
            DropTable("dbo.TastingNotes");
        }
    }
}
