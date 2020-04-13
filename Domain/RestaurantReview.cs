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

    }  
}
