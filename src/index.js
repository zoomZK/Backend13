import 'dotenv/config'
import express from 'express'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import mongoose from 'mongoose'
import { orderModel } from './models/order.models.js'
import { userModel } from './models/users.models.js'
import cartModel from './models/carts.models.js'
const app = express()
const PORT = 4000

mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        console.log("BDD conectada")

        const resultado = await cartModel.findOne({ _id: "64f7be67ee3d47232d0cd8b5" })
        console.log(JSON.stringify(resultado))
        /*const resultados = await orderModel.paginate({ status: 'medium' }, { limit: 1, page: 3, sort: 'desc' })
        console.log(resultados)

        await orderModel.create([
        { name: 'Cheeseburger', size: 'small', price: '2000', quantity: '5' },
        { name: 'Doble Cheeseburger', size: 'medium', price: '3000', quantity: '3' },
        { name: 'Triple Cheeseburger', size: 'large', price: '4000', quantity: '2' },
        { name: 'Doble Bacon', size: 'medium', price: '2300', quantity: '4' },
        { name: 'Doble NY', size: 'small', price: '2600', quantity: '6' },
        { name: 'Triple California', size: 'large', price: '3500', quantity: '3' },
        { name: 'Miami Special', size: 'small', price: '1500', quantity: '1' },
        { name: 'Cheesebomb', size: 'large', price: '5000', quantity: '4' },
        { name: 'Ohio Special', size: 'medium', price: '4000', quantity: '5' },
        { name: 'NOT-Veggie', size: 'small', price: '1600', quantity: '1' },])
        const resultados = await orderModel.aggregate([
            {
                $match: { size: 'medium' }
            },
            {
                $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } }
            },
            {
                $sort: { totalPrice: -1 }
            },
            {
                $group: { _id: 1, orders: { $push: "$$ROOT" } }
            },
            {
                $project: {
                    "_id": 0,
                    orders: "$orders"
                }
            },
            {
                $merge: {
                    into: "reports"
                }
            }
        ])

        console.log(resultados)*/

    })
    .catch((error) => console.log("Error en conexion con MongoDB ATLAS: ", error))



app.use(express.json())
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})