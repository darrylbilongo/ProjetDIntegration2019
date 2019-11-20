import React from "react";
import { shallow } from "enzyme";
import Login from "./components/Login";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Login />", () => {
    it("", () => {
        const componentWrapper = shallow(<Login />);   
    expect('').toEqual('');
    });
});