import { Action } from '@ngrx/store';

export const SET_CAMPAIGNS_LIST = 'SET_CAMPAIGNS_LIST';

import { CampaingsList } from '../models/campaingsList';
import { Campaign } from '../models/campaign';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: CampaingsList;
}

export function campaignsListReducer(state: CampaingsList = new CampaingsList(), action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_CAMPAIGNS_LIST:
      return action.payload;
    default:
      return state;
  }
}
