import React from "react";
import { shallow } from "enzyme";
import { CollectionItem } from "./collection-item";

describe("CollectionItem component testing", () => {
    let wrapper;
    let mockAddItem;
    const mockUrl = 'www.photo.com';
    const mockName = 'scarf';
    const mockPrice = 50;

    beforeEach(() => {
        mockAddItem = jest.fn();

        const mockProps = {
            addItem: mockAddItem,
            item: {
                name: mockName,
                price: mockPrice,
                imageUrl: mockUrl,
            },
        };

        wrapper = shallow(<CollectionItem {...mockProps} />);
    });

    it('should render the CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call addItem when button is clicked', () => {
        wrapper.find('[id="add-button"]').simulate('click')
        expect(mockAddItem).toHaveBeenCalled();
    })

    it('should render imageUrl as a prop BackgroundImage', () => {
        expect(wrapper.find('.image').prop('imageUrl')).toBe(mockUrl)
    })
    it('should render the name prop in NameContainer', () => {
        expect(wrapper.find('.name').text()).toBe(mockName)
    })
    it('should render the price prop in PriceContainer', () => {
        // dealing with integers!!!
        const price = parseInt(wrapper.find('.price').text())
        expect(price).toBe(mockPrice)
    })
});
