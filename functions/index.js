
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IuLpFSH5YTEmPVuHiiRUUjq8z6TahS3BMgWkEmk4tbyz29YNHlpTtb9VRSm2jLQbWyaPHXkEdS8GfF2XVXyaw5o00gEtdKfjh')

// API

// - App config
const app = express();

// API routes
app.use(cors({origin: true}));
app.use(express.json());

// App routes
app.get("/", (request, response)=>
 response.status(200).send("hello world"));

app.post("/payments/create", async (request, response)=>{
     const total = request.query.total;
     console.log('payment Request recived Boom!! for this amount ',total)
     const paymentIntent = await stripe.paymentIntents.create({
         amount:total, //submits of the currency
         currency:"inr",
     })
    // ok - created
     response.status(201).send({
         clientSecret: paymentIntent.client_secret,
     })
 })
// listen command
exports.api = functions.https.onRequest(app);