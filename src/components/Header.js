import { StyledHeader, Nav, Logo, HeroContainer } from './styles/Header.styled';
import { Button } from './styles/Button.styled';

export default function Header() {
  return (
    <StyledHeader>
      <HeroContainer>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Try It Free</Button>
        </Nav>
      </HeroContainer>
    </StyledHeader>
  );
}
