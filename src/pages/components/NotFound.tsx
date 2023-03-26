import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {ThemedSadSmile} from '../../features';
import {Button} from '../../shared';

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  return <>
    <ErrorContainer>
      <ThemedSadSmile height="200" width="300"/>
      <Section>
        <Label>
          This page doesn't exist
        </Label>
      </Section>
      <Section>
        <Button onClick={() => navigate('/')}>Go to Home Page</Button>
      </Section>
    </ErrorContainer>
  </>

};

const ErrorContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const Label = styled.span`
  font-size: 28px;
  font-weight: var(--fw-normal);
`;

