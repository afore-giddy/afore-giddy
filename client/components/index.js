/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Footer} from './footer'
export {default as MainPage} from './mainpage'
export {default as SingleReviewCard} from './singleReviewCard'
export {default as SingleCollectionCard} from './singleCollectionCard'
export {Login, Signup} from './auth-form'
export {Billing, Shipping} from './cart/order-form'
export {default as Cart} from './cart/cart'
