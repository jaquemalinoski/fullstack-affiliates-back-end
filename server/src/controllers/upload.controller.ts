import { Request, Response } from "express"
import { readFileSync } from 'fs'
import { join } from 'path'
import listTransactionsService from "../services/listTransactions.service"
import uploadService from "../services/upload.service"

const fs = require('fs')

export const listTransactionsController = async (req: Request, res: Response) => {
    const transactions = await listTransactionsService()

    return res.json(transactions)
}

export const uploadController = async (req: Request, res: Response) => {
    const name = req.file?.filename
    let result = ''

    if (name) {
        result = readFileSync(join("tmp/uploads", name), 'utf-8')

    } else {
        console.log('deu ruim')
    }

    const typeInit = 0
    const dateInit = 1
    const productInit = 26
    const amountInit = 56
    const sellerInit = 66

    const typeEnd = 1
    const dateEnd = 26
    const productEnd = 56
    const amountEnd = 66

    const array = result.split('\n')
    
    array.forEach((item) => {

        if (item) {
            const type = item.slice(typeInit, typeEnd)
            const date = item.slice(dateInit, dateEnd)
            const product = item.slice(productInit, productEnd)
            const amount = item.slice(amountInit, amountEnd)
            const seller = item.slice(sellerInit)
            
            uploadService({ type, date, product, amount, seller })
        }
    })

    fs.unlinkSync("tmp/uploads/" + name)

    res.status(200).json({message: "File uploaded successfully!"});
}
