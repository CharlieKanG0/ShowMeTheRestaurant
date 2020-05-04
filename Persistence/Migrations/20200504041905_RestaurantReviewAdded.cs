using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Persistence.Migrations
{
    public partial class RestaurantReviewAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Reviews",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Reviews");

            migrationBuilder.AlterColumn<string>(
                name: "title",
                table: "Reviews",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "category",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "information",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "postcode",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "price",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "website",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reviews",
                table: "Reviews",
                column: "title");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Reviews",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "address",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "category",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "information",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "postcode",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "price",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "website",
                table: "Reviews");

            migrationBuilder.AlterColumn<string>(
                name: "title",
                table: "Reviews",
                type: "text",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Reviews",
                type: "integer",
                nullable: false,
                defaultValue: 0)
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reviews",
                table: "Reviews",
                column: "Id");
        }
    }
}
