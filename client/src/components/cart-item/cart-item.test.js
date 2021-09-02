import React from "react";
import { shallow } from "enzyme";
import { CartItem } from "./cart-item";

// single render test not requiring describe grouping

it("Should render the CartItem component", () => {
    const mockItem = {
        imageUrl: "www.testimage.com",
        price: 20,
        name: "jacket",
        quantity: 1,
    };

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
