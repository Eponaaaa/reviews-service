/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ReviewContainer from '../components/ReviewContainer.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewContainer />);
  });

  it('Should shallow, intial sampledata', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
