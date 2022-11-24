import { Affiliate } from "../entities/upload.entity"
import { AppDataSource } from "../data-source"

const listTransactionsService = async (): Promise<Affiliate[]> => {
    const typeOne = []
    const typeTwo = []
    const typeThree = []
    const typeFour = []

    const affiliateRepository = AppDataSource.getRepository(Affiliate)

    const affiliates = await affiliateRepository.query(`SELECT "type", seller, SUM(cast(amount as decimal)) 
	    FROM affiliates WHERE "type" = '1' or "type" = '2' or "type" = '3' or "type" = '4'  
        GROUP BY seller, "type";`)

    return affiliates
}

export default listTransactionsService
