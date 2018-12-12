
import React from 'react';
import expect from 'expect';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom');

describe('Component: Header', () => {
  it('tests that the component successfully rendered', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
  });
});
