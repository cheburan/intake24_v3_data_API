export interface FoodsByLocaleCount {
	locale: string
	count: number
}

export type FoodWithCategories = {
	code: string,
	description: string,
	local_description: string,
	locale_id: string,
	category_code: string,
	is_hidden: boolean,
	nutrient_table_id: string
}
