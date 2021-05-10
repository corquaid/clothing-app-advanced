import React from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // Stripe needs price amounts in cents, not dollars / euros / etc.
    const publishableKey =
        "pk_test_51IJfWvDzpv2UL73WXq2vxAvRdnf2oy1ofZTFgLGQHLOMS0e0hryc6cQwioMVH33ABf25sNeyOfccBaos38rHZBiP00okKyIhIv";

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then(response => {
                alert("Payment successful");
            })
            .catch(error => {
                console.log("Payment error: ", JSON.parse(error));
                alert("There was an issue with your payment. Please use the provided credit card");
            });
    };

    return (
        <StripeCheckout // this component takes a shit-ton of props
            label="Pay Now"
            name="Clothing App"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken} // callback function which triggers the payment charge in the backend normally, but here it will just as front-end alert message
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
