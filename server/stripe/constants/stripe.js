const configureStripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe
