import type {Region} from '../../countries';

export interface RegionOption {
  value: Region,
  label: Region
}

export type RegionOptionMap = { [key: string]: RegionOption }