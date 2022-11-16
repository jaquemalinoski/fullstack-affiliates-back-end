import { IUploadRequest } from "../interfaces/upload"
import { AppDataSource } from "../data-source"
import { Affiliate } from "../entities/upload.entity"

const uploadService = async ({ type, date, product, amount, seller }: IUploadRequest): Promise<Affiliate> => {

    const affiliateRepository = AppDataSource.getRepository(Affiliate)

    const item = affiliateRepository.create({
        type,
        date,
        product,
        amount,
        seller
    })

    await affiliateRepository.save(item)
    
    return item
}

export default uploadService