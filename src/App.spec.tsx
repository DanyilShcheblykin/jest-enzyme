import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store';
import App from './App'
import { store } from './createStore'
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard'
import { findByTestAtrr } from '../Utils';

const setUp = (initialState = {}) => {
    const mockStore = configureMockStore([]);
    const wrapper = mount(<App store={mockStore(initialState)} ></App>).childAt(0)

    return wrapper
}

describe("App component", () => {
    let wrapper: any;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: "Example title",
                body: "Some text"
            }, {
                title: "Example title",
                body: "Some text"
            }, {
                title: "Example title",
                body: "Some text"
            }]
        }
        wrapper = setUp(initialState)
    })

    it("should render without errors", () => {
        const component = findByTestAtrr(wrapper, 'AppComponent')
        expect(component.length).toBe(1)
    })

}) 