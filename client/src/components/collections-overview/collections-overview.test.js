import React from "react";
import { shallow } from "enzyme";
import { CollectionsOverview } from "./collections-overview";

// no grouping required

let wrapper;

const mockCollections = [
    {
        id: 1,
    },
    {
        id: 2,
    },
];

beforeEach(() => {
    wrapper = shallow(<CollectionsOverview collections={mockCollections} />);
});

it("should render the CollectionsOverview component", () => {
    expect(wrapper).toMatchSnapshot();
   
});

it('should render the same number of child components as the length of collections prop', () => {
    expect(wrapper.find('.collection-preview').length).toEqual(mockCollections.length);
})
