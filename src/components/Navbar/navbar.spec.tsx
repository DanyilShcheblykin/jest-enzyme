import React, { HTMLAttributes } from "react";
import { ShallowWrapper, shallow } from 'enzyme'
import Navbar from "./Navbar";
import {findByTestAtrr} from '../../../Utils/index'

const setUp = (props = {}) => {
    const component = shallow(<Navbar {...props}></Navbar>)//shalow return react component
    return component
}

describe("NavBar Component ", () => {

    let component: any
    beforeEach(() => { //работате перед каждым тестом 
        component = setUp() 
    })

    it('It should render without errors ', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent') //тут нам не нужно получать component потому что мы это делаем в beforeEach
        expect(wrapper.length).toBe(1)
    }) 

    // it('should render logo ', () => {
    //     const wrapper = findByTestAtrr(component, 'logoIMG')
    //     expect(wrapper.length).toBe(1)
    // })
})


