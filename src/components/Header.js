import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src='./images/logo.svg' alt='' />
        <Button>Try It Free</Button>
      </Nav>
    </StyledHeader>
  );
}
