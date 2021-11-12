import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDb from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDb()

const app = express()

app.use(express.json());



app.post('/body', (req, res) => {
    res.send("Body is Running")
    console.log('post req.body => ', req.body)
})

app.get('/body', (req, res) => {
    res.send("Body is Running")
    res.send(req.body)
    console.log('get req.body => ', req.body)
})

app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/users', userRoutes)


const __dirname = path.resolve()
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))

} else {
    app.get('/', (req, res) => {
        res.send("Api is Running")
    })
}



const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`server is Running in ${process.env.NODE_ENV} mode on port ${PORT}`))