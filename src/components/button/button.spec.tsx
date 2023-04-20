import React from 'react'
import { findByTestAtrr, checkProps } from '../../../Utils'
import Button from '.'
import { shallow } from 'enzyme'

describe("SharedButton Component", () => {
    describe("Checking PropTypes", () => {
        it("Should not throw warnings", () => {
            const expectedProps = {
                buttonText: "Example Button text",
                emitEvent: () => {
                }
            }
            const propsError = checkProps(Button, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })
    describe("Renders ", () => {
        let mockFunc: any;
        let wrapper: any
        beforeEach(() => {
            mockFunc = jest.fn()
            const props = {
                buttonText: "Example Button text",
                emitEvent: mockFunc
            }
            wrapper = shallow(<Button {...props}></Button>)
        })

        it("Should render button", () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })

        it("Should emit callBack on click event" , ()=>{
            const button = findByTestAtrr(wrapper , "buttonComponent")
            button.simulate("click")
            const callBack = mockFunc.mock.calls.length
            expect(callBack).toBe(1)
        })

    })

})


