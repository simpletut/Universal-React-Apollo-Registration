import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EditProfile from './../../../pages/auth/editProfile';
import { GET_CURRENT_USER, GET_USER_PROFILE } from './../../../queries';

import { MockedProvider } from 'react-apollo/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Edit profile page', () => {

    const mockData = {
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

    const mocks = [
        {
            request: { query: GET_USER_PROFILE },
            result: {
                "data": {
                    "getUserProfile": [
                        {
                            "bio": null,
                            "profileImage": null,
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
                <EditProfile session={mockData} unitTesting="true" />
            </BrowserRouter>
        </MockedProvider>
    )

    it('Render error', async () => {

        await new Promise(resolve => setTimeout(resolve))
        wrapper.update()

        expect(wrapper.find('.dark_headline').length).toBe(1);

    })

});