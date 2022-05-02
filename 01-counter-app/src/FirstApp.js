// There are two kind of components in react
// 1. Based on classes
// 2. Based on functions
// Based on fucntions is the modern way that react recommend to programming = functionl component

import { PropTypes } from "prop-types";

const FirstApp = ({ greet, subtitle }) => {

    const greeting = 'Hello World';

    const object = {
        name: 'Rafael',
        age: 22
    }

    return (
        <>
            {/* <pre>{ JSON.stringify(object, null, 3) }</pre> */}
            <h1>{ greet }</h1>
            <p>{ subtitle }</p>
        </>
    );
}

FirstApp.propTypes = {
    greet: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Subtitle'
}

export default FirstApp

