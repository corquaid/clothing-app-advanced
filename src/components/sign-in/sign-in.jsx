import React, { useState } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = userCredentials;

        try {
            // Check user credentials on the firebase authentication
            await auth.signInWithEmailAndPassword(email, password);
            // If auth is successful, clear state
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }

        this.setState({
            email: "",
            password: "",
        });
    };

    const handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    const { email, password } = this.state;
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" value={email} handleChange={handleChange} label="Email" required />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google{" "}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
