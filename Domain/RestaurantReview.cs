using System;
using System.ComponentModel; 
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class RestaurantReview
    {
        // [Key] defines a field as primary key
        [Key]
		// public int Id { get; set; }
        public string title { get; set; }
		public string rating { get; set; }
		public string reviews { get; set; }
		public string price { get; set; }
		public string category { get; set; }
		public string information { get; set; }
		public string address { get; set; }
		public string postcode { get; set; }
		public string website { get; set; }
		public string image { get; set; }

    }  
}
