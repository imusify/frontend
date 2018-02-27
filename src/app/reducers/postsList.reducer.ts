import { Action } from '@ngrx/store';

export const SET_POSTS_LIST = 'SET_POSTS_LIST';
export const APPEND_TO_POSTS_LIST = 'APPEND_TO_POSTS_LIST';

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
    case APPEND_TO_POSTS_LIST:
      const newCampaignsList = new PostsList();
      newCampaignsList.posts = [...state.posts, ...action.payload.posts]
      return newCampaignsList;
    default:
      return state;
  }
}
