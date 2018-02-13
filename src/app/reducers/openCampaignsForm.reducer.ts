import { Action } from '@ngrx/store';

export const OPEN_CAMPAIGNS_FORM = 'OPEN_CAMPAIGNS_FORM';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: boolean;
}

export function openCampaignsFormReducer(state: boolean = false, action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case OPEN_CAMPAIGNS_FORM:
      return action.payload;
    default:
      return state;
  }
}
