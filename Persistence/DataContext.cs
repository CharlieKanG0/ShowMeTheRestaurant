using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
		// This is the table we are querying
        public DbSet<RestaurantReview> Reviews { get; set; }

		public DataContext()
        {
        }
        
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // This is what .NET calls when creating a new connection
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // A connection string, is just created a new database with PgAdmin
            string conn = "Host=localhost;Database=web_scraper;Username=postgres;Password=pass";
            
            // This tells .NET what provider to use
            options.UseNpgsql(conn);
        }
    }
}
