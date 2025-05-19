import React, { useState, useEffect } from 'react';
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

const CheckoutForm = ({ onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setErrorMessage(null);

        try {
            // Create PaymentIntent when the user clicks confirm
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/create-payment-intent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: options.amount,
                    currency: options.currency,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to create payment intent');
            }

            const { clientSecret: newClientSecret } = data;
            setClientSecret(newClientSecret);

            // Trigger form validation and wallet collection
            const { error: submitError } = await elements.submit();
            if (submitError) {
                setErrorMessage(submitError.message);
                setIsProcessing(false);
                return;
            }

            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                clientSecret: newClientSecret,
                confirmParams: {
                    return_url: `${window.location.origin}${window.location.pathname}?payment_success=true`,
                },
                redirect: 'if_required'
            });

            if (error) {
                setErrorMessage(error.message);
                setIsProcessing(false);
            } else if (paymentIntent && paymentIntent.status === 'succeeded') {
                // Payment successful
                if (onPaymentSuccess) {
                    onPaymentSuccess();
                }
                setIsProcessing(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to process payment');
            setIsProcessing(false);
        }
    };

    // Check for payment success in URL params
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get('payment_success') === 'true') {
            if (onPaymentSuccess) {
                onPaymentSuccess();
            }
            // Clean up the URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, [onPaymentSuccess]);

    // if (!clientSecret) {
    //     return <div>Loading...</div>;
    // }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <Flex w='full' justify={'end'} mt={4}>
                <button
                    type="submit"
                    disabled={!stripe || !elements || isProcessing}
                    style={{
                        background: COLORS.secondary,
                        color: 'white',
                        fontFamily: 'Roobert',
                        fontWeight: 'bold',
                        padding: '10px 18px',
                        borderRadius: '6px',
                        opacity: isProcessing ? 0.7 : 1,
                        fontSize: '18px'
                    }}
                >
                    {isProcessing ? 'Procesando...' : 'Confirmar'}
                </button>
            </Flex>
            {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
        </form>
    );
};

const key = `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`
const stripePromise = loadStripe(key);

const options = {
    mode: 'payment',
    amount: 30000,
    currency: 'eur',
    appearance: {
        theme: 'stripe',
    },
};

export const PaymentForm = ({ onPaymentSuccess }) => (
    <Elements stripe={stripePromise} options={options}>
        {key ? <CheckoutForm onPaymentSuccess={onPaymentSuccess} /> : <></>}
    </Elements>
);
