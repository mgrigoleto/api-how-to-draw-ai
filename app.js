import express from 'express'
import dotenv from 'dotenv'
import lessonRoutes from './routes/lessonRoutes.js'
import lessonContentRoutes from './routes/lessonContentRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/lessons', lessonRoutes)
app.use('/lesson-contents', lessonContentRoutes)

export default app
