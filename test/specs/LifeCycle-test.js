import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import LifeCycle from '../app/js/LifeCycle';

describe('<LifeCycle/>', function () {
  it('should have an hello lifecycle text', function () {
    const wrapper = shallow(<LifeCycle/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
