import { Action } from '@ngrx/store';

export const SET_CHANNELS_LIST = 'SET_CHANNELS_LIST';
export const SET_SELECTED_CHANNEL = 'SET_SELECTED_CHANNEL';

import { ChannelsList } from '../models/channelsList';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: ChannelsList;
}

export function channelsListReducer(state: ChannelsList = new ChannelsList(), action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_CHANNELS_LIST:
      return action.payload;
    case SET_SELECTED_CHANNEL:
      return Object.assign(new ChannelsList(), state, { selectedChannel: action.payload });
    default:
      return state;
  }
}
