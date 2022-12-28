import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: block;
`;

export const List = styled.ul`
  display: block;
`;
export const Wrapper = styled.div`
  display: block;
`;
export const LinkNav = styled(Link)`
  text-decoration: none;
  color: inherit;
`;