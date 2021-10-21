import styled from 'styled-components';

export const Flex = styled.div`
  display: block;
  align-items: center;
  width: 100%;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
