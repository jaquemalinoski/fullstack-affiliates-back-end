const multer = require('multer')
const path = require('path')

import { Request } from "express"

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req: Request, file: any, cb: (boolean: null, path: any)=> void) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads')) 
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req: Request, file: any, cb: (message: unknown, boolean: boolean)=> void) => { 
        const allowedMimes = [
            'text/plain'
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)

        } else {
           cb(new Error("Invalid file type, please upload a .txt file"), true)
        }
    }
}


