import 'dotenv/config';
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_FOODS_USERNAME!,
  port: parseInt(process.env.DB_FOODS_PORT!),
  database: process.env.DB_FOODS_DATABASE!,
	password: process.env.DB_FOODS_PASSWORD!
});

//single queries
export const query = (text: string, ...optParams: (number | string)[]) => {
  const params = optParams.length > 0 ? optParams : undefined;

  console.log(`Executed query: ${text}, params: ${params}`);
  return pool.query(text, params);
};

//transactions
export const queryTransaction = (text: string, optParams: Array<(number | string)[]>) => {
    const params = optParams.length > 0 ? optParams : undefined;
		if (!params) throw new Error('Undefined parametrs detected!')
    console.log('supplied params: \n', params);
    return (async () => {
        const client = await pool.connect()
        try {
            await client.query('BEGIN')
            params.forEach(async values => {
                console.log(`Executed  transactional query: ${text}, params: ${values}`);
                const res = await client.query(text, values)
            });
            await client.query('COMMIT')
        } catch (e) {
            await client.query('ROLLBACK')
            throw e
        } finally {
            client.release()
        }
    })().catch(e => console.error(e.stack))
	}
