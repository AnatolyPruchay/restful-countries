import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';

import {CountryDetails} from '../../features';
import {Button} from '../../shared';

export const Details = (): JSX.Element => {
  const {name = ''} = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack/> Back
      </Button>
      <CountryDetails name={name} navigate={navigate}/>
    </div>
  );
};
