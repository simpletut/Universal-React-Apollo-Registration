import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './../../components/footer';
import { GET_CURRENT_USER } from './../../queries';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer component', () => {

  const mocks = [
    {
      request: { query: GET_CURRENT_USER },
      result: {
        "data": {
          "getCurrentUser": [
            {
              "firstName": "Joe",
              "lastName": "Bloggs",
              "email": "joe@gmail.com",
              "profileImage": null,
              "userName": "joeBloggs",
              "joinDate": "2018-08-14T20:39:13.961Z",
              "__typename": "User"
            }
          ]
        }
      }
    }
  ]

  const wrapper = mount(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </MockedProvider>
  )

  it('Render error', async () => {

    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()
    
    expect(wrapper.find('footer').length).toBe(1);

  })

});