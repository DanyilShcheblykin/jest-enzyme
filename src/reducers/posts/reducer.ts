import { types } from '../../../src/actions/types'

export default (state: Array<any> = [], action: any) => {
    switch (action.type) {
        case types.GET_POSTS: return action.payload
        default: return state
    }
}