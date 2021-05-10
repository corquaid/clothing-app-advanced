const express = require("express");

// const bodyParser = require('body-parser');
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config(); // this loads .env file into the test environment including the API keys

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build"))); // this sets up serving the front-end files from client folder

    app.get("*", function (req, res) {
        // '*' means from ANY / ALL urls
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log(`Server running on ${port}`);
});

// Main Stripe route
app.post('/payment', (req, res) => {
    const body = { // define body object and incoming information from front-end
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }
    // Create Stripe charge event and return relevant response, success or error
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({error: stripeErr})
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })
})
