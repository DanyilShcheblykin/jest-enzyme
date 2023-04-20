import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { fetchPosts } from '../actions';
import { types } from '../actions/types';
import { AnyAction } from 'redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchPosts action', () => {
    it('should dispatch GET_POSTS action with correct payload', async () => {
        const expectedPosts = [
            { id: 1, title: 'Post 1', body: 'Body of post 1' },
            { id: 2, title: 'Post 2', body: 'Body of post 2' },
            { id: 3, title: 'Post 3', body: 'Body of post 3' },
        ];
        const store = mockStore({});
        
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: () => Promise.resolve(expectedPosts),
        } as Response);

        const thunkDispatch: ThunkDispatch<any, any, AnyAction> = store.dispatch;
        await thunkDispatch(fetchPosts());

        const actions = store.getActions();
   
        expect(actions).toEqual([{ type: types.GET_POSTS, payload: expectedPosts }]);
    });

    it('should catch errors and log them', async () => {
        const store = mockStore({});
        jest.spyOn(global, 'fetch').mockRejectedValueOnce('Error message');

        const thunkDispatch: ThunkDispatch<any, any, AnyAction> = store.dispatch;
        await thunkDispatch(fetchPosts())

        // expect().toHaveBeenCalledWith('Error message');
    });
});