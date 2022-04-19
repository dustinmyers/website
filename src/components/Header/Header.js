import Link from 'next/link';
import React from 'react';
import { DarkToggle } from '../DarkToggle/DarkToggle';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, DarkModeToggle, ToggleDiv, NamesDiv, DarkP, SocialIcons,  } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <img src="/logo.png" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/dustinmyers">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dustint314">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.twitter.com/dustint314">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      {/* <DarkModeToggle for="switch">
          <ToggleDiv />
          <NamesDiv>
            <DarkP>Light</DarkP>
            <DarkP>Dark</DarkP>
          </NamesDiv>
        </DarkModeToggle> */}
        <SocialIcons>
              <DarkToggle />
        </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
