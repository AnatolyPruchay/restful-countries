import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {regionState} from '../model/recoil';
import {RegionOption} from '../types';

export const useRegion = (): [string, (reg: RegionOption) => void] => {

  const [region, setRegion] = useRecoilState(regionState);

  const handleSelect = useCallback((reg: RegionOption) => {
    setRegion(reg?.value || '')
  }, [setRegion]);

  return [region, handleSelect];
}
