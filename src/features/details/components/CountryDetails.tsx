import {Info} from './Info';
import {useDetails} from '../hooks/useDetails';
import {InfoLoading} from './InfoLoading';
import {ICountryDetailsCard} from '../types';
import {RecoilLoadableState} from '../../../shared';


const CountryDetails = ({name = '', navigate}: ICountryDetailsCard): JSX.Element => {
  const [currentCountry, {state}] = useDetails(name);

  return (
    <>
      {state === RecoilLoadableState.loading && <InfoLoading/>}
      {state === RecoilLoadableState.hasError && <h2>someError</h2>}
      {state === RecoilLoadableState.hasValue && currentCountry &&
        <Info {...currentCountry} push={navigate}/>}
    </>
  )
}

export {CountryDetails};
