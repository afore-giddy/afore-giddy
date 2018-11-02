const configureStripe = require('stripe')

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_test_Xi9O2SJji9xEtomUsPA25IxI'
    : 'sk_test_Xi9O2SJji9xEtomUsPA25IxI'

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe
