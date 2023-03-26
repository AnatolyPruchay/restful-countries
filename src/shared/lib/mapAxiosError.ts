import {HTTPError} from '../types';
import {errorMap} from '../const';

export const mapAxiosError = (axiosError: string): string => {
  switch (true) {
    case axiosError.includes(HTTPError.error404):
      return errorMap[HTTPError.error404];
    default:
      return '';
  }
}