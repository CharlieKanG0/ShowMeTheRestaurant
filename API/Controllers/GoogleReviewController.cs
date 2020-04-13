using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using Persistence;
using SerpApi;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GoogleReviewController : ControllerBase
    {
        private readonly ILogger<GoogleReviewController> _logger;
		private readonly DataContext _context;

		public GoogleReviewController(DataContext context) 
		{
			_context = context;
		}

		// public GoogleReviewController(ILogger<GoogleReviewController> logger)
        // {
        //     _logger = logger;
        // }

		private async Task getRestaurantsAsync()
        {
			List<dynamic> restaurants = new List<dynamic>();
			var db = new DataContext(); 

            String apiKey = "764751f0e06a193f008c3b1efff06d386119170ab0713878223d13367ce00b4e";
            Hashtable ht = new Hashtable();
            ht.Add("engine", "google_maps");
            ht.Add("q", "pizza");
            ht.Add("google_domain", "google.com");
            ht.Add("ll", "@-27.4580119,153.0500812,15z");
            ht.Add("type", "search");

            try
            {
                GoogleSearchResultsClient client = new GoogleSearchResultsClient(ht, apiKey);
                JObject data = client.GetJson();
                JArray results = (JArray)data["local_results"];
                foreach (JObject result in results)
                {
					RestaurantReview review = new RestaurantReview();
					review.title = result["title"].ToString(); 
					review.rating = result["rating"].ToString();  
					review.reviews = result["reviews"].ToString();

					restaurants.Add(review); 
					db.Reviews.Add(review);
                    await db.SaveChangesAsync();
                }
				
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception:");
                Console.WriteLine(ex.ToString());
            }
        }

		// [HttpGet("[search]")]
        // public string SearchGoogle()
        // {
        //     // CheckForUpdates("https://www.google.com/maps/search/newstead+restaurant/", "Web-Scraper updates");
        //     getRestaurantsAsync(); 
        //     return "Hello";
        // }

        [HttpGet]
        public IEnumerable<RestaurantReview> Get()
        {
			var values = _context.Reviews.ToArray(); 
			//return Ok(values); 
			return values; 
        }
    }
}
