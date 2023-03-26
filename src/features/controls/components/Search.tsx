import styled from 'styled-components';

import {IoSearch} from 'react-icons/io5';
import {useSearch} from '../hooks/useSearch';

export const Search = (): JSX.Element => {
  const [search, handleSearch] = useSearch();

  return (
    <InputContainer>
      <IoSearch/>
      <Input onChange={handleSearch} value={search}/>
    </InputContainer>
  );
};

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 400px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  width: 100%;
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;