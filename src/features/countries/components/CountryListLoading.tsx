import Skeleton from 'react-loading-skeleton'
import {loadingCardsMock} from '../const';
import {List} from '../../../shared';


const CountryListLoading = (): JSX.Element => {

  return (
    <List>
      {loadingCardsMock.map((c) => (
        <Skeleton key={c} height={299}/>
      ))}
    </List>
  )
}

export {CountryListLoading};