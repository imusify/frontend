import { Action } from '@ngrx/store';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const SET_USER_STATUS = 'SET_USER_STATUS';

import { User } from '../models/user';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: User;
}

export function userReducer(state: User = new User(), action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return new User();
    case SET_USER_STATUS:
      return Object.assign(state, {status: action.payload});
    default:
      return state;
  }
}
