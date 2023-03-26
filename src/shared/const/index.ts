import {ErrorMap, HTTPError} from '../types';

export const errorMap: ErrorMap = {
  [HTTPError.error404]: 'Data not found',
  [HTTPError.error403]: 'Forbidden',
  [HTTPError.error500]: 'Internal Server Error'
}