import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const InfoLoading = (): JSX.Element => {

  return (
    <Wrapper>
      <Skeleton height="100%"/>
      <div>
        <Skeleton height={400}/>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  & > span {
    height: 100%;
  }

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;
