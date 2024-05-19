import express, { response } from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"

const app = express()

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.get('/', (req, res) => {
            console.log(req);
            return res.status(234).send('Welcome to MERN stack tutorial')
        })
    })
    .catch((error) => {
        console.log(error)
    })