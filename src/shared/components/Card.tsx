import styled from 'styled-components';
import {ICard} from '../types';

const Card = ({img, name, info = [], onClick}: ICard): JSX.Element => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name}/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export {Card}

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 235px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);

  @media (min-width: 1024px) {
    height: 130px;
  }
`;

const CardBody = styled.div`
  padding: 2rem 2.5rem 3rem;
  @media (min-width: 1024px) {
    padding: 1rem 1.5rem 2rem;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;
