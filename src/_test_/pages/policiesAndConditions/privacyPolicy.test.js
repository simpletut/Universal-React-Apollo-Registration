import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PrivacyPolicy from './../../../pages/policiesAndConditions/privacyPolicy';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Privacy policy page', () => {

  const wrapper = mount(
    <BrowserRouter>
      <PrivacyPolicy />
    </BrowserRouter>
  )

  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()

    expect(wrapper.find('.privacyPolicy').length).toBe(1);

  })

});