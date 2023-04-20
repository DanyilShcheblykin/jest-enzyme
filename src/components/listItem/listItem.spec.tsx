import { shallow } from "enzyme"
import ListItem from "."
import { checkProps, findByTestAtrr } from "../../../Utils"
import { fetchPosts } from "../../actions"

describe("ListenItem Component", () => {
    describe("Checking PropTypes", () => {
        it("should not retirn trhow warning", () => {
            const expectedProps = {
                title: "Example",
                descr: "Some text"
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })

    })

    describe("Component Renders", () => {

        let wrapper: any;
        beforeEach(() => {
            const props = {
                title: "example",
                descr: "test"
            }
            wrapper = shallow(<ListItem {...props}></ListItem>)
        })

        it("Should renders without error", () => {
            const component = findByTestAtrr(wrapper, 'ListItemComponent');
            expect(component.length).toBe(1)
        })

        it("should rendre a title", () => {
            const title = findByTestAtrr(wrapper, 'componentTitle')
            expect(title.length).toBe(1)
        })

        it("should rendre a descr", () => {
            const descr = findByTestAtrr(wrapper, 'description')
            expect(descr.length).toBe(1)
        })


    })

    // describe("Should not render", () => {
    //     let wrapper: any;
    //     // beforeEach(() => {
    //     //     const props = {
    //     //         desc: 'test'
    //     //     }
    //     //     wrapper = shallow(<ListItem {...props}></ListItem>)
    //     // })

    //     // it("component is not rendered", () => {
    //     //     const component = findByTestAtrr(wrapper, 'ListItemComponent')
    //     //     expect(component.length).toBe(0)
    //     // })

    //     fetchPosts().

    // })
})