import React from "react";
import { shallow } from "enzyme";
import { CheckoutItem } from "./checkout-item";

// multiple tests required so let's group them:

describe("CheckoutItem component testing", () => {
    // define required variables/functions

    let wrapper;
    let mockClearItem;
    let mockAddItem;
    let mockRemoveItem;

    // invoke onclick functions
    beforeEach(() => {
        mockAddItem = jest.fn();
        mockClearItem = jest.fn();
        mockRemoveItem = jest.fn();

        // create general mockProps

        const mockProps = {
            cartItem: {
                imageUrl: "www.testimage.com",
                name: "woolly hat",
                price: 40,
                quantity: 2,
            },
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem,
        };

        // general component render wrapper
        wrapper = shallow(<CheckoutItem {...mockProps} />);
    });

    // Define unit tests

    it('Should render the CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call removeItem when left arrow is clicked', () => {
        wrapper.find('.left-arrow').simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
    })

    it('should call addItem when right arrow is clicked', () => {
        wrapper.find('.right-arrow').simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    })

    it('should call clearItem when remove button is clicked', () => {
        wrapper.find('.remove-button').simulate('click')
        expect(mockClearItem).toHaveBeenCalled();
    })
});
