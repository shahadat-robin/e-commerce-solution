import Stripe from "stripe";

export const loadStripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);
