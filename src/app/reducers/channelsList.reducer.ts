import { Action } from '@ngrx/store';

export const SET_CHANNELS_LIST = 'SET_CHANNELS_LIST';
export const SET_SELECTED_CHANNEL = 'SET_SELECTED_CHANNEL';
export const SET_SELECTED_CHANNEL_BY_ID = 'SET_SELECTED_CHANNEL_BY_ID';
export const GENERAL_CHANNEL = new Channel(0, 'general');

import { ChannelsList } from '../models/channelsList';
import { Channel } from '../models/channel';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: any;
}

export function channelsListReducer(state: ChannelsList = new ChannelsList(), action: ActionWithPayload<any>) {
  switch (action.type) {
    case SET_CHANNELS_LIST:
      return action.payload;
    case SET_SELECTED_CHANNEL:
      return Object.assign(new ChannelsList(), state, { selectedChannel: action.payload });
    case SET_SELECTED_CHANNEL_BY_ID:
      const selectedChannels = state.channels.filter(channel => channel.id == action.payload);
      return Object.assign(new ChannelsList(), state, { selectedChannel: selectedChannels[0]});
    default:
      return state;
  }
}
