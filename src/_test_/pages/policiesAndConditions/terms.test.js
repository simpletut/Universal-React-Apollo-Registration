import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Terms from './../../../pages/policiesAndConditions/terms';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Terms page', () => {
  
  const wrapper = mount(
    <BrowserRouter>
      <Terms />
    </BrowserRouter>
  )

  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()

    expect(wrapper.find('.terms').length).toBe(1);

  })

});