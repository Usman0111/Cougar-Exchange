using Microsoft.EntityFrameworkCore.Migrations;

namespace Cougar_Exchange.Migrations
{
    public partial class AddCommandsToDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OtherId",
                table: "Offers",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OtherId",
                table: "Offers");
        }
    }
}
