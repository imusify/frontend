import { Action } from '@ngrx/store';
import { Post } from '../models/post';

export const SET_PLAY_POST = 'SET_PLAY_POST';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: Post;
}

export function playReducer(state = null, action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_PLAY_POST:
      return action.payload;
    default:
      return state;
  }
}
