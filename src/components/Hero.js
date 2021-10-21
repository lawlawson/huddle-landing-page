import React from 'react';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { Image } from './styles/Header.styled';

const Hero = () => {
  return (
    <div>
      <Flex>
        {/* <HeroItems> */}
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button bg='#FF52C1' color='#fff'>
          Get Started For Free
        </Button>
        {/* </HeroItems> */}
        <Image src='./images/screen-mockups.svg' alt='' />
      </Flex>
    </div>
  );
};

export default Hero;
