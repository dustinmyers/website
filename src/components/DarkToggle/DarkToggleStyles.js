import styled from 'styled-components'

export const Toggle = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background: none;
  color: var(--primary1);
  transition: .8s ease;
  &:hover {
    transition: .2s all ease-in-out;
  }
`;

export const ThemeImage = styled.img`
  max-width: 35px;
`;