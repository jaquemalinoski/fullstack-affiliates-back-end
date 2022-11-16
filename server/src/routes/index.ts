import { uploadController, listTransactionsController } from "../controllers/upload.controller";

const route = require("express").Router()
const multer = require('multer') 
const multerConfig = require('../config/multer')

route.get("/affiliates", listTransactionsController)
route.post("/affiliates", multer(multerConfig).single('file'), uploadController)

module.exports = route
