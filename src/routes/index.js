import express from 'express'
import { indexPage } from '../controllers'
import { testEnvironmentVariable } from '../config'

const indexRouter = express.Router()

indexRouter.get('/', indexPage)

export default indexRouter
