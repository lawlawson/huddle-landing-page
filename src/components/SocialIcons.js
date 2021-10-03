import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://github.com/lawlawson'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://github.com/lawlawson'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://github.com/lawlawson'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
