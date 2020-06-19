import express from 'express'
import { indexPage, messagesPage, addMessage } from '../controllers'
import { testEnvironmentVariable } from '../config'
import { modifyMessage, performAsyncAction } from '../middleware'

const indexRouter = express.Router()

indexRouter.get('/', indexPage)
indexRouter.get('/messages', performAsyncAction, messagesPage)
indexRouter.post('/messages', modifyMessage, addMessage)

export default indexRouter
