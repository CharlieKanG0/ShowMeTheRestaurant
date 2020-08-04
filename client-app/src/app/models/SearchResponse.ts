export interface SearchResponse {
	region: Region; 
	total: number;
	businesses: [BusinessResponse]
}

export interface Region {
	center: Coordinates;
}

export interface BusinessResponse {
	categories: [Category];
	imageUrl: string; 
	phone: string;
	price: string; 
	url: string; 
	rating: number; 
	name: string; 
	location: Location; 
	distance: number; 
	reviewCount: number
}

export interface Category {
	title: string; 
	alias: string; 
}

export interface Location {
	country: string; 
	address1: string; 
	address2: string;
	state: string; 
	postalCode: string; 
	city: string; 
}