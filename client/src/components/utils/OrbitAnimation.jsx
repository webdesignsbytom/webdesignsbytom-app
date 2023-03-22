import React from 'react';
import GitHubIcon from '../../assets/img/github-black.svg'
import HTML5Icon from '../../assets/img/html5.svg'
import NodeIcon from '../../assets/img/nodejs.svg'
import Javascript from '../../assets/img/javascript.svg'
import ExpressJS from '../../assets/img/expressjs.svg'
import ReactJSIcon from '../../assets/img/reactjs-icon.svg';
import TailwindIcon from '../../assets/img/tailwindcss-icon.svg';
import Prisma from '../../assets/img/file_type_light_prisma.svg';


function OrbitAnimation() {
  return (
    <div className='orbit__container'>
      <div className='boundry__container'>
        <div className='circle'></div>
        <div className='satellite satellite1'><img src={ReactJSIcon} alt="react icon" /></div>
        <div className='satellite satellite2'><img src={GitHubIcon} alt="github icon" /></div>
        <div className='satellite satellite3'><img src={HTML5Icon} alt="html5 icon" /></div>
        <div className='satellite satellite4'><img src={NodeIcon} alt="node js icon" /></div>
        <div className='satellite satellite5'><img src={ExpressJS} alt="node js icon" /></div>
        <div className='satellite satellite6'><img src={TailwindIcon} alt="node js icon" /></div>
        <div className='satellite satellite7'><img src={Prisma} alt="node js icon" /></div>
        <div className='satellite satellite8'><img src={Javascript} alt="node js icon" /></div>
        
      </div>
    </div>
  );
}

export default OrbitAnimation;
