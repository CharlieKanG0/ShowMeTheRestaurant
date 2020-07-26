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
using Yelp.Api.Models;

namespace API.Controllers
{
	[ApiController]
	[Route("/YelpReview")]
	public class YelpReviewController : ControllerBase
	{
		private readonly ILogger<YelpReviewController> _logger;
		private readonly DataContext _context;

		public YelpReviewController(DataContext context)
		{
			_context = context;
		}

		[HttpGet]
		[Route("yelp-search")]
		public async Task<SearchResponse> GetYelpSearchResponseAsync()
		{
			var client = new Yelp.Api.Client("GVKXH8oERX1d4aExWnmvwq-7pD7JOfr5ccdpWO3FTfQXNXwp2E0zM0vNNs9oKwtHU2Kv9P0bhdHqzF4ycDRMcSjgEh-h1VGtCDvzqlqunHrv5vP-iHUyV5XrpkIMX3Yx");
			var results = await client.SearchBusinessesAllAsync("cupcakes", 37.786882, -122.399972);
			
			return results;
		}
	}
}
