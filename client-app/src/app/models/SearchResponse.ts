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
}

export interface Category {
	title: string; 
	alias: string; 
}