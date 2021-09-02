import React from "react";
import { shallow } from "enzyme";
import { CartIcon } from "./cart-icon";

describe("CartIcon component", () => {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            totalItems: 0,
            toggleCartHidden: mockToggleCartHidden,
        };

        wrapper = shallow(<CartIcon {...mockProps} />);
    });

    it("Should render the CartIcon component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Should call toggleCartHidden when icon is clicked", () => {
        wrapper.find(".cart-icon").simulate("click");
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });

    it("Should render the totalItems count as the component text", () => {
        const itemCount = parseInt(wrapper.find(".item-count").text());
        expect(itemCount).toBe(0);
    });
});
