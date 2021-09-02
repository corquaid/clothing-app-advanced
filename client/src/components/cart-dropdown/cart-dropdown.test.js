import React from "react";
import { shallow } from "enzyme";

import { CartDropdown } from "./cart-dropdown";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Test group
describe("CartDropdown component", () => {
    // set up variables to mock props
    let wrapper;
    let mockHistory;
    let mockDispatch;

    const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    // Run this entire function to mock the "Go To Checkout" button click event
    beforeEach(() => {
        mockHistory = {
            push: jest.fn(),
        };

        mockDispatch = jest.fn(); // mock toggleCartHidden state change

        // completed mockProps object for the CartDropdown component
        const mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            dispatch: mockDispatch,
        };

        wrapper = shallow(<CartDropdown {...mockProps} />);
    });

    // Start defining tests

    it("Should render CartDropdown component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call history.push when button is clicked', () => {
     
        wrapper.find('[id="button"]').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden())
    })

    it('Should render an equal number of items as the cartItems prop', () => {
        expect(wrapper.find('[id="cart-item"]').length).toEqual(mockCartItems.length)
    })

    it('Should render empty message container if the cart is empty', () => {
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            dispatch: mockDispatch
        }

        const wrapperTwo = shallow(<CartDropdown {...mockProps} />)
        expect(wrapperTwo.exists('.empty-message')).toBe(true)
    })
});
