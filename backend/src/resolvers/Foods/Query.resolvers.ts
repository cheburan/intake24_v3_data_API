//Import Api modules
import { Foods } from "../../api";

interface FoodsByLocaleCount {
	locale: string
	count: number
}

 const getFoodsByLocale =  async (_:any, args:any):Promise<FoodsByLocaleCount | null> => {
	console.log('Query: ', args.locale)
	const res = await Foods.getFoodsCountByLocale(args.locale);
	if (!res) return null
	console.log(res);
	return res;
}

module.exports = {
	Query: {
		getFoodsByLocale
	}
}
