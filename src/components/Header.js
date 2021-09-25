import { StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Buton>Try It Free</Buton>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
