import { Action } from '@ngrx/store';

export const SET_CAMPAIGNS_LIST = 'SET_CAMPAIGNS_LIST';
export const APPEND_TO_CAMPAIGNS_LIST = 'APPEND_TO_CAMPAIGNS_LIST';

import { CampaignsList } from '../models/campaingsList';
import { Campaign } from '../models/campaign';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: CampaignsList;
}

export function campaignsListReducer(state: CampaignsList = new CampaignsList(), action: ActionWithPayload<any>) {
  switch (action.type) {
    case SET_CAMPAIGNS_LIST:
      return action.payload;
    case APPEND_TO_CAMPAIGNS_LIST:
      const newCampaignsList = new CampaignsList();
      newCampaignsList.campaigns = [...state.campaigns, ...action.payload.campaigns]
      return newCampaignsList;
    default:
      return state;
  }
}
