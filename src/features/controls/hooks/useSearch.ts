import React from 'react';
import {useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {searchState} from '../model/recoil';

export const useSearch = (): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {

  const [search, setSearch] = useRecoilState(searchState);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setSearch(e.target.value)
  }, [setSearch]);

  return [search, handleSearch];
}
