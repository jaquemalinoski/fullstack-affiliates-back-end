import { Affiliate } from "../entities/upload.entity"
import { AppDataSource } from "../data-source"

const listTransactionsService = async (): Promise<Affiliate[]> => {
    const userRepository = AppDataSource.getRepository(Affiliate)

    const users = await userRepository.find()

    return users

}

export default listTransactionsService