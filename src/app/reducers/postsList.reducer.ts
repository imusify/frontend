import { Action } from '@ngrx/store';

export const SET_POSTS_LIST = 'SET_POSTS_LIST';

import { PostsList } from '../models/postsList';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: PostsList;
}

export function postsListReducer(state: PostsList = new PostsList(), action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_POSTS_LIST:
      return action.payload;
    default:
      return state;
  }
}
