import {useEffect} from 'react';
import {toast, TypeOptions} from 'react-toastify';
import {mapAxiosError} from '../lib/mapAxiosError';

export const useAppToast = (message: string, type: TypeOptions): void => {

  useEffect(() => {
    if (!message) {
      return;
    }
    toast(mapAxiosError(message), {type});
  }, [message]);
}
