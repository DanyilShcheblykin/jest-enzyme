import { types } from '../../../src/actions/types'
import postReducre from './reducer'
describe("Posts Reducer", () => {

    it("Should return default state", () => {
        const newState = postReducre(undefined, {})
        expect(newState).toEqual([])
    })

    it("Should return new state if receiving type", () => {
        const posts = [{ title: "test 1" }, { title: "test 2" }, { title: "test 3" }]
        const newState = postReducre(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })

        expect(newState).toEqual(posts)
    })
})