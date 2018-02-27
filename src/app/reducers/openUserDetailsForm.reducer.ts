import { Action } from '@ngrx/store';

export const OPEN_USER_DETAILS_FORM = 'OPEN_USER_DETAILS_FORM';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: any;
}

export function openUserDetailsFormReducer(state: any = null, action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case OPEN_USER_DETAILS_FORM:
      return action.payload;
    default:
      return state;
  }
}
