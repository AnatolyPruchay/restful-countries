import {useCallback} from 'react';
import {useResetRecoilState} from 'recoil';
import {regionState, searchState} from '../model/recoil';

export const useCleanup = (): () => void => {

  const resetSearch = useResetRecoilState(searchState);

  const resetRegion = useResetRecoilState(regionState);

  const cleanUp = useCallback(() => {
    resetSearch();
    resetRegion();
  }, [resetSearch, resetRegion]);

  return () => cleanUp();
}
