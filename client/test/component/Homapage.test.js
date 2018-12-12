import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import { configure, shallow } from 'enzyme';
import Homepage from '../../components/Homepage';
import sinon from 'sinon';
import mockData from '../mockData';

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<Homepage/>);
};


describe('component: Homepage', () => {
  beforeEach(() => {
    global.toastr = {
      success: () => {}
    };
  });
  describe('Homepage component', () => {
    it('tests that the component successfully rendered', () => {
      const wrapper = setup();
      expect(wrapper.find('div').length).toBe(3);
      expect(wrapper.find('h1').length).toBe(1);
      expect(wrapper.find('button').length).toBe(1);
    });
  });
  
  describe('numberGenerator()', () => {
    it('should generate phone numbers', () => {
      const wrapper = setup();
      const button = wrapper.find('#generate');
      button.simulate('click');
    });
  });

  describe('numberGenerator()', () => {
    it('should call numberGenerator()', () => {
      const spy = sinon.spy(Homepage.prototype, 'numberGenerator');
      shallow(<Homepage numberGenerator={spy}/>)
        .instance().numberGenerator(mockData.getNumbers);
    });
  });
});
