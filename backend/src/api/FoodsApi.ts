import * as db from "../db";


// =======================
// GETTERS(QUERIES)
// =======================


// Number of foods in locales
const getFoodsCountByLocale = async (locale: string) => {
	const result = await db.query("select fl.locale_id as locale, count(DISTINCT f.code || fl.locale_id) from foods f left join foods_local fl on f.code = fl.food_code where fl.locale_id in ($1) \ group by fl.locale_id", locale);
		console.log(result.rows);
		console.log(locale);
	return result.rows[0]
}

export default {
	getFoodsCountByLocale
}
