import {useRecoilValueLoadable} from 'recoil';
import {loadNeighborsByBorder} from '../model/recoil';
import {INeighbors} from '../types';
import {RecoilLoadableState, useAppToast} from '../../../shared';

export const useNeighbors = (borders: string[] = []): [string[], { state: keyof typeof RecoilLoadableState}] => {
  const {state, contents} = useRecoilValueLoadable<INeighbors>(loadNeighborsByBorder({borders}));

  useAppToast(contents.errorMessage, 'error');

  return [contents.content, {state}];
}
