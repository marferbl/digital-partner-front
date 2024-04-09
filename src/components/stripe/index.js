import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { COLORS } from '../../colors/colors';
import { Flex } from '@chakra-ui/react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            return;
        }

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: options.amount * 100 }),
        });




        const { client_secret: clientSecret } = await res.json();

        const { error } = stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://example.com/order/123/complete',
            },
        });

        if (error) {

            setErrorMessage(error.message);
        } else {
            console.log('')
            // Your customer will be redirected to your `return_url`. For some payment
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <Flex w='full' justify={'end'}>
                {/* <button type="submit" disabled={!stripe || !elements} style={{ background: COLORS.secondary, color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', padding: '8px 15px', borderRadius: '6px', marginTop: 20 }}>
                    Confirmar
                </button> */}
            </Flex>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};
const key = `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`
const stripePromise = loadStripe(key);

const options = {
    mode: 'payment',
    amount: 27500,
    currency: 'usd',
    appearance: {
        /*...*/
    },
};

export const PaymentForm = () => (
    <Elements stripe={stripePromise} options={options}>
        {key ? <CheckoutForm /> : <></>}
    </Elements>
);
