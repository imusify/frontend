import { Action } from '@ngrx/store';

export const OPEN_CAMPAIGN_DETAILS_FORM = 'OPEN_CAMPAIGN_DETAILS_FORM';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: any;
}

export function openCampaignDetailsFormReducer(state: any = null, action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case OPEN_CAMPAIGN_DETAILS_FORM:
      return action.payload;
    default:
      return state;
  }
}
