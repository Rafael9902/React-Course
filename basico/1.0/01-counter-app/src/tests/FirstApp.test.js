import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import FirstApp from "../FirstApp";
import { shallow } from 'enzyme';

describe('First App', () => {
    // test('should show message', () => {
    //     const greet = 'Goku';
    //     const wrapper = render(<FirstApp greet={'Goku'} />)

    //     expect(wrapper.getByText(greet)).toBeInTheDocument();
    // })
    test('should show FirstApp corectly', () => {
        const wrapper = shallow(<FirstApp />)
    })
})