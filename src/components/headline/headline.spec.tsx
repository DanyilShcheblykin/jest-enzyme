import { shallow } from 'enzyme'
import HeadLine from '.'
import { HeadlineProps } from '.'
import { findByTestAtrr, checkProps } from '../../../Utils/index'
import { formatDiagnosticsWithColorAndContext } from 'typescript'



const setUp = (props?: HeadlineProps) => {
    const component = shallow(<HeadLine {...props}></HeadLine>)
    return component
}

describe("HeadLine Component", () => {
    describe("Have props", () => {
        let wrapper: any;
        beforeEach(() => {
            const props = {
                header: 'string',
                descr: 'string'
            }
            wrapper = setUp(props);
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'HeadLineComponent');
            expect(component.length).toBe(1);
        })
        it("Should render a H1", () => {
            const h1 = findByTestAtrr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })
        it("Should render descr", () => {
            const descr = findByTestAtrr(wrapper, 'descr')
            expect(descr.length).toBe(1)
        })
    });

    // describe("Have no props", () => {
    //     let warpper: any;
    //     beforeEach(() => {
    //         warpper = setUp()
    //     })
    //     // it('render without props', () => {
    //     //     const h1 = findByTestAtrr(warpper, 'header')
    //     //     const descr = findByTestAtrr(warpper, 'descr')
    //     //     expect(h1.length).toBe(1)
    //     //     expect(descr.length).toBe(1)
    //     // })
    // })
})

describe("HeadLine Component ", () => {
    describe("Checking prop types", () => {
        it("should not not throw warning", () => {
            const exppectedProps = {
                header: "Test",
                desc: "Test descr",
                tempArr: [{
                    fName: 'Joe',
                    lName: "Bloggs",
                    email: "job@gmail.com",
                    age: 11,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(HeadLine, exppectedProps);
       
            expect(propsErr).toBeUndefined(); 
        })
    }) 
})