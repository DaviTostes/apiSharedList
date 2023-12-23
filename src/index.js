import express from 'express'
import userController from './controllers/userController.js'

const app = express()
const port = 80

app.use(express.json())

app.use('/api', userController)

app.listen(port, () => {
    console.log('Running')
})

export default app