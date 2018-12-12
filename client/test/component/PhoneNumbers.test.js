import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import sinon from 'sinon';
import { configure, shallow } from 'enzyme';
import PhoneNumbers from '../../components/PhoneNumbers';
import mockData from '../mockData'

configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<PhoneNumbers />);
};


describe('component: PhoneNumbers', () => {
  describe('PhoneNumbers component', () => {
    it('tests that the component successfully rendered', () => {
      const wrapper = setup();
      wrapper.setState({ phoneNumbers: mockData.getNumbers });
      expect(wrapper.find('div').length).toBe(2);
      expect(wrapper.find('table').length).toBe(1);
      expect(wrapper.find('thead').length).toBe(1);
      expect(wrapper.find('tbody').length).toBe(1);
      expect(wrapper.find('tr').length).toBe(5);
      expect(wrapper.find('th').length).toBe(2);
    });
  });
  
  describe('componentDidMount()', () => {
    it('should call componentDidMount()', () => {
      const spy = sinon.spy(PhoneNumbers.prototype, 'componentDidMount');
      shallow(<PhoneNumbers componentDidMount={spy}/>)
        .instance().componentDidMount({ setState: () => 1 });
    });
  });

  describe('dateSort()', () => {
    it('should sort in descending order', () => {
      const wrapper = setup();
      wrapper.setState({ phoneNumbers: mockData.getNumbers });
      const button = wrapper.find('#date-sort');
      button.simulate('click');
    });
  });

  describe('dateSort()', () => {
    it('should sort in ascending order', () => {
      const wrapper = setup();
      wrapper.setState({ phoneNumbers: mockData.getNumbers, dateSort: 'fa fa-sort-alpha-desc' });
      const button = wrapper.find('#date-sort');
      button.simulate('click');
    });
  });

  describe('numberSort()', () => {
    it('should sort max numbers', () => {
      const wrapper = setup();
      wrapper.setState({ phoneNumbers: mockData.getNumbers });
      const button = wrapper.find('#number-sort');
      button.simulate('click');
    });
  });

  describe('numberSort()', () => {
    it('should sort min numbers', () => {
      const wrapper = setup();
      wrapper.setState({ phoneNumbers: mockData.getNumbers, numberSort: 'fa fa-sort-numeric-desc' });
      const button = wrapper.find('#number-sort');
      button.simulate('click');
    });
  });

  describe('ascendDate()', () => {
    it('should call ascendDate()', () => {
      const spy = sinon.spy(PhoneNumbers.prototype, 'ascendDate');
      shallow(<PhoneNumbers ascendDate={spy}/>)
        .instance().ascendDate(mockData.getNumbers);
    });
  });

  describe('descendDate()', () => {
    it('should call descendDate()', () => {
      const spy = sinon.spy(PhoneNumbers.prototype, 'descendDate');
      shallow(<PhoneNumbers descendDate={spy}/>)
        .instance().descendDate(mockData.getNumbers);
    });
  });

  describe('assignSortNumber()', () => {
    it('should call assignSortNumber()', () => {
      const spy = sinon.spy(PhoneNumbers.prototype, 'assignSortNumber');
      shallow(<PhoneNumbers assignSortNumber={spy}/>)
        .instance().assignSortNumber(mockData.getNumbers);
    });
  });

  describe('minNumber()', () => {
    it('should call minNumber()', () => {
      const spy = sinon.spy(PhoneNumbers.prototype, 'minNumber');
      shallow(<PhoneNumbers minNumber={spy}/>)
        .instance().minNumber(mockData.getNumbers);
    });
  });

  describe('maxNumber()', () => {
    it('should call maxNumber()', () => {
      const spy = sinon.spy(PhoneNumbers.prototype, 'maxNumber');
      shallow(<PhoneNumbers maxNumber={spy}/>)
        .instance().maxNumber(mockData.getNumbers);
    });
  });
});

