import { Action } from '@ngrx/store';

export const SET_CHANNELS_LIST = 'SET_CHANNELS_LIST';
export const SET_SELECTED_CHANNEL = 'SET_SELECTED_CHANNEL';
export const GENERAL_CHANNEL = new Channel(0, 'general');

import { ChannelsList } from '../models/channelsList';
import { Channel } from '../models/channel';

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
