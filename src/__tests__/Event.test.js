import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('Show/Hide Event Details', () => {
  test('An event element is collapsed by default', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.find('.eventDetails')).toHaveLength(0);
  });

  test('User can expand an event to see its details', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    EventWrapper.find('.detailsButton').simulate('click');
    expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
  });

  test('User can collapse an event to hide its details', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    EventWrapper.find('.detailsButton').simulate('click');
    expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    EventWrapper.find('.detailsButton').simulate('click');
    expect(EventWrapper.find('.eventDetails')).toHaveLength(0);
  });
});

