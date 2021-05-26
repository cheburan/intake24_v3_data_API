//Import Api modules
import { Foods } from "../../api";
import { FoodsByLocaleCount, FoodWithCategories } from "../../types/foods"

const getFoodsByLocale = async (_: any, args: any): Promise<FoodsByLocaleCount | null> => {
	console.log('Query: ', args.locale)
	const res = await Foods.getFoodsCountByLocale(args.locale);
	if (!res) return null
	return res;
}

const getFoodsAndGategories = async (_: any, args: any): Promise<FoodWithCategories[] | null> => {
	console.log('Query: ', args.locale, ' - ', args.nutrientTable)
	const res = await Foods.getFoodsAndGategories(args.locale, args.nutrientTable);
	if (!res) return null
	return res
}

module.exports = {
	Query: {
		getFoodsByLocale,
		getFoodsAndGategories
	}
}
