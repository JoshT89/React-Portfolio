'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
 } from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.youtube.com/@freecodecamp/videos',
    name: <RiYoutubeFill />
  },
  {
    path: 'https://www.linkedin.com/in/joshua-turner-81311066/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/JoshT89',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.facebook.com/itboffins',
    name: <RiFacebookFill />
  },
{
    path: 'https://www.instagram.com/itboffins/?hl=en',
    name: <RiInstagramFill />
  },
]; 

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  )
}
      
    

export default Socials;