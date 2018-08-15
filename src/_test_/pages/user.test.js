import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import User from './../../pages/user';
import { PROFILE_PAGE } from './../../queries';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('User page', () => {

  const mocks = [
    {
      request: { query: PROFILE_PAGE, variables: { userName: "testUsername" } },
      result: {
        "data": {
          "profilePage": [
            {
              "firstName": "Joe",
              "lastName": "Bloggs",
              "bio": null,
              "profileImage": null,
              "__typename": "User"
            }
          ]
        }
      }
    }
  ]

  const matchProps = {
    "params": {
      "URL_Param": "testUsername"
    }
  }

  const wrapper = mount(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <User match={matchProps} />
      </BrowserRouter>
    </MockedProvider>
  )

  it('Query not returning mock data', async () => {
    
    await new Promise(resolve => setTimeout(resolve))
    wrapper.update()

    expect(wrapper.find('.userProfilePage').length).toBe(1);

  })

});