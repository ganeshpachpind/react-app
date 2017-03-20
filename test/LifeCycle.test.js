import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import LifeCycle from '../app/js/LifeCycle';

describe('<LifeCycle/>', function () {
  it('should have hello world', function () {
    const wrapper = shallow(<LifeCycle/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
