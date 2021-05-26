import * as db from "../db";
import { FoodsByLocaleCount } from "../types/foods";


// =======================
// GETTERS(QUERIES)
// =======================


// Number of foods in locales
const getFoodsCountByLocale = async (locale: string) => {
	const result = await db.query("select fl.locale_id as locale, count(DISTINCT f.code || fl.locale_id) from foods f left join foods_local fl on f.code = fl.food_code where fl.locale_id in ($1) \ group by fl.locale_id", locale);
	return result.rows[0]
}

const getFoodsAndGategories = async (locale: string, nutrientTable: string) => {
	const result = await db.query("\
		select f.code, f.description, fl.local_description, fl.locale_id, fc.category_code, c.description, c.is_hidden, fnm.nutrient_table_id \
		from foods f \
			left join foods_local fl on f.code = fl.food_code \
			left join foods_categories fc on f.code = fc.food_code \
			left join categories c on fc.category_code = c.code \
			left join foods_nutrient_mapping fnm on f.code = fnm.food_code \
		where fl.locale_id in ($1) AND fnm.nutrient_table_id in ($2) \
		order by fl.locale_id, f.code;", locale, nutrientTable);
	return result.rows
}

export default {
	getFoodsCountByLocale,
	getFoodsAndGategories
}
