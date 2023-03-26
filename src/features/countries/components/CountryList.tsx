import {useNavigate} from 'react-router-dom';
import {useCountries} from '../hooks/useCountries';
import {mapCountryInfo} from '../lib/mapCountyInfo';
import {CountryListLoading} from './CountryListLoading';
import {List, Card, RecoilLoadableState} from '../../../shared';

const CountryList = (): JSX.Element => {
  const navigate = useNavigate();

  const [countries, {state}] = useCountries();

  return (
    <>
      {state === RecoilLoadableState.loading && <CountryListLoading/>}
      {state === RecoilLoadableState.hasError && <h2>Can't fetch data</h2>}
      {state === RecoilLoadableState.hasValue && (
        <List>
          {countries.map((c) => {
            const countryInfo = mapCountryInfo(c);

            return (
              <Card
                key={c.name}
                {...countryInfo}
                onClick={() => navigate(`/country/${c.name}`)}
              />
            );
          })}
        </List>
      )}
    </>
  )
}

export {CountryList};
