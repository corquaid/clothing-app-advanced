import React from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

// ErrorBoundary needs to be a class component to gain access to particular lifecycle methods

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false,
        };
    }

    static getDerivedStateFromError(error) {
        // this function monitors for errors inside all child components around which the ErrorBoundary is wrapped

        // process the error by setting the state

        return { hasErrored: true };
    }

    //Another error-related component, allowing access to actual error plus more info on the error
    componentDidCatch(error, info) {
        console.log(error);
    }

    // Inside render method, if there is an error, return a custom fallback UI or error message, if no error then return all child components as normal

    render() {
        if (this.state.hasErrored) {
            return <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
                <ErrorImageText>Sorry, a dog ate this page. It's gone.</ErrorImageText>
            </ErrorImageOverlay>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
