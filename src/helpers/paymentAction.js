import { PaymentForm } from '../components/stripe';

export const handlePaymentAction = async ({ onPaymentSuccess, onError }) => {
    try {
        // The PaymentForm component will handle the actual payment processing
        // and call onPaymentSuccess when the payment is completed
        return (
            <PaymentForm
                onPaymentSuccess={onPaymentSuccess}
                onError={onError}
            />
        );
    } catch (error) {
        console.error('Payment processing error:', error);
        if (onError) {
            onError(error);
        }
        throw error;
    }
}; 