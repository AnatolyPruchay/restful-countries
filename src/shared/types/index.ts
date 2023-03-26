import React from 'react';

export interface IHeader {
  children?: React.ReactNode
}

export interface IList extends IHeader {
}

export interface IMain extends IHeader {
}

export interface ICountryInfo {
  title: string;
  description: string;
}

export interface ICountryCard {
  img: string;
  name: string;
  info: ICountryInfo[];
}

export interface ICard extends ICountryCard {
  onClick: () => void;
}

export interface IRecoilReturnState<T> {
  content: T;
  errorMessage: string;
}

export enum RecoilLoadableState {
  loading = 'loading',
  hasValue = 'hasValue',
  hasError = 'hasError'
}

export enum HTTPError {
  error404 = '404',
  error403 = '403',
  error500 = '500'
}

export type ErrorMap = Record<HTTPError, string>;
