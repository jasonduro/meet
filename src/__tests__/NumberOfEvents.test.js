import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('render text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfResults={() => {}} />);
    expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
  });

  test('change number of events', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfResults={() => {}} />);
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.event-number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
  });

  test('default number of events is 32', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfResults={() => {}} />);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });
});

