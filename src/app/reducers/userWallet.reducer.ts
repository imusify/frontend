import { Action } from '@ngrx/store';

export const SET_USER_WALLET = 'SET_USER_WALLET';

import { UserWallet } from '../models/userWallet';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: UserWallet;
}

export function userWalletReducer(state: UserWallet = new UserWallet(), action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_USER_WALLET:
      return action.payload;
    default:
      return state;
  }
}
