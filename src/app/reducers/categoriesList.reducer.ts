import { Action } from '@ngrx/store';

export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';

import { CategoriesList } from '../models/categoriesList';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface Payload {
  value?: CategoriesList;
}

export function categoriesListReducer(state: CategoriesList = new CategoriesList(), action: ActionWithPayload<Payload>) {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      return action.payload;
    default:
      return state;
  }
}
