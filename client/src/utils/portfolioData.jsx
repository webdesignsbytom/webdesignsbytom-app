// Icons
import ReactIcon from '../assets/svg/reactjs-icon.svg';
import HTML5Icon from '../assets/svg/html5.svg';
import TailwindIcon from '../assets/svg/tailwindcss-icon.svg';
import CSS3icon from '../assets/svg/css3.svg';
import Expressjs from '../assets/svg/expressjs.svg';
import Prisma from '../assets/svg/file_type_light_prisma.svg';
import Javascript from '../assets/svg/javascript.svg';
import { FaTabletAlt } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { TfiLayoutSliderAlt } from 'react-icons/tfi';
import { GrUserAdmin } from 'react-icons/gr';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdColorPalette } from 'react-icons/io';
import { FaMobile } from 'react-icons/fa';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { MdForum } from 'react-icons/md';
import { FaServer } from 'react-icons/fa';
import { IoIosRibbon } from 'react-icons/io';
import { GrScorecard } from 'react-icons/gr';
import { AiFillLayout } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrGamepad } from 'react-icons/gr';
import { HiBookOpen } from 'react-icons/hi';
import { MdModeNight } from 'react-icons/md';
import { MdSdStorage } from 'react-icons/md';
import { TbMathFunction } from 'react-icons/tb';
import { MdDataArray } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { BiError } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
// Photos
import TavyEpoxy from '../assets/img/projects/tavyepoxyMd.png';
import BioClicker from '../assets/img/projects/bioclickerMd.png';
import Myecoapp from '../assets/img/projects/myeaMd.png';
import LuxuryPoker from '../assets/img/projects/pokerMd.png';
import Calculator from '../assets/img/projects/calculatorMd.png';
// Photos - Phone
import BioCLickerPhone from '../assets/img/projects/bioclickerSm.png';
import MyecoappPhone from '../assets/img/projects/myeaSm.jpg';
import TavyepoxyPhone from '../assets/img/projects/tavyepoxyPhone.jpg';
import MatchedbettingPhone from '../assets/img/projects/matchedbettingPhone.jpg';

export const initialData = {
  id: 1,
  image: '',
  title: '',
  github: '',
  demo: '',
  icons: ['', ''],
  images: ['', '', ''],
  skills: ['', '', ''],
  headline: '',
  desc: '',
  featuredComponent: '',
  featuredDisplay: '',
};

export const portfolioData = [
  {
    id: 1,
    image: Calculator,
    url: 'matched-betting', 
    prevUrl: 'worlds-smartest-quiz',
    nextUrl: 'bio-clicker',
    title: 'Matched Betting Training',
    github: 'https://github.com/webdesignsbytom/matchedBetting-tailwind',
    demo: 'https://clever-rolypoly-136b82.netlify.app/',
    icons: [Javascript, ReactIcon, TailwindIcon, Expressjs, Prisma],
    images: [MatchedbettingPhone, Calculator, Calculator],
    skills: [
      { name: 'Advanced Algorithms', icon: <TbMathFunction size={20} /> },
      { name: 'Interactive Tutorial', icon: <HiBookOpen size={20} /> },
      { name: 'Forum/media functions', icon: <MdForum size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Personal Profiles', icon: <FaUserAlt size={20} /> },
    ],
    headline: 'Teaching matched betting with the aim of advert sponsorship',
    desc: 'Matched Betting Training is a app mainly designed to teach a player how to make a series of bets guaranteed to make a profit using our system. It is supported by a fleshed out website of user/member systems and forums for posting tips and tricks creating a community of betters. Most site of this type feature a betting calculator and basic instructions. This site goes one further and has built dummy bookie websites to be used in our "Bet Simulator" which takes you step by step through the processes of making a winning bet.',
    featuredComponent: 'Bet Simulator',
    featuredDisplay: '',
    liveSite: 'https://clever-rolypoly-136b82.netlify.app/',
  },
  {
    id: 2,
    image: BioClicker,
    url: 'bio-clicker', 
    prevUrl: 'matched-betting',
    nextUrl: 'myecoapp',
    title: 'Idle-Clicker game',
    github: 'https://github.com/webdesignsbytom/react-idle-clicker',
    demo: 'https://rococo-kleicha-53fa88.netlify.app/',
    icons: [Javascript, ReactIcon, Prisma, CSS3icon],
    images: [BioCLickerPhone, BioClicker, BioClicker],
    skills: [
      { name: 'Autofilled Tweets', icon: <AiOutlineTwitter size={20} /> },
      { name: '150+ States Managed', icon: <FaServer size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Localstorage Backups', icon: <MdSdStorage size={20} /> },
      { name: 'Player Achievements Monitoring', icon: <IoIosRibbon size={20} /> },
      { name: 'Mutliple Scores', icon: <GrScorecard size={20} /> },
      { name: 'Purchasing Functions', icon: <FaMoneyCheckAlt size={20} /> },
      { name: 'Variable Menus', icon: <BiMenuAltRight size={20} /> },
      { name: 'Admin Panel with users data', icon: <MdAdminPanelSettings size={20} /> },
      { name: 'Animated canvas gameplay', icon: <GrUserAdmin size={20} /> },
    ],
    headline: 'Game design using state management and purchasing',
    desc: 'Bio-Clikcer a react based idle clicker game. Based on hugely popular phone and browser idle clicker games. This involves a huge amount of player states and is a great example of the abilities of using state in react. Furthermore rending items, achievements and buildings like they were items in an online store. The player data is all collected and saved to localstorage and server databases for using various devices. Every element on the page is subject to rerendering and has been smoothly laid out to prevent overloading issues. An animated component on the main screen has a game where you can tap on click on enemy units.',
    featuredComponent: 'Game',
    liveSite: 'https://rococo-kleicha-53fa88.netlify.app/',
  },
  {
    id: 3,
    image: TavyEpoxy,
    title: 'TavyEpoxy Furniture',
    url: 'tavyepoxy', 
    prevUrl: 'luxury-casino',
    nextUrl: 'matched-betting',
    github: 'https://github.com/webdesignsbytom/tavy_epoxy',
    demo: 'https://strong-tulumba-d852ca.netlify.app/',
    icons: [Javascript, ReactIcon, CSS3icon, Expressjs, Prisma],
    images: [TavyepoxyPhone, TavyEpoxy, TavyEpoxy],
    skills: [
      { name: 'Responsive Gallery', icon: <FaTabletAlt size={20} /> },
      { name: '3D Design Tool', icon: <FaTools size={20} /> },
      { name: 'Image Slider on loop', icon: <TfiLayoutSliderAlt size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Advanced CSS colour manipulating', icon: <IoMdColorPalette size={20} /> },
    ],
    headline: 'A sales and gallery website for a local designer',
    desc: 'TavyEpoxy, or Tav-E-poxy is a business I run selling my spare artwork as tables. The website was created to display a gallery of possiblities and attract interest in similar designs from customers. The key to getting customers is to make it easy for them to compare the designs in my gallery and the materials available to make orders based on what they find attractive. To address this I have made contact forms with various basic options for quote requesting. Along with a design tool where customers can create a 3D render of the furniture dimensions and artistic patterns desired.',
    featuredComponent: '3D Design Tool',
    featuredDisplay: '',
    liveSite: 'https://strong-tulumba-d852ca.netlify.app/',
  },
  
  {
    id: 4,
    image: Myecoapp,
    title: 'Myecoapp',
    url: 'myecoapp', 
    prevUrl: 'bio-clicker',
    nextUrl: 'worlds-smartest-quiz',
    github: 'https://github.com/webdesignsbytom/myecoapp',
    demo: 'https://gorgeous-dusk-add814.netlify.app/',
    icons: [Javascript, ReactIcon, TailwindIcon, Expressjs, Prisma],
    images: [MyecoappPhone, Myecoapp, Myecoapp],
    skills: [
      { name: 'Phone first design', icon: <FaMobile size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'Liveupdate Highscores', icon: <GrScorecard size={20} /> },
      { name: 'Modern Layout', icon: <AiFillLayout size={20} /> },
      { name: 'User Achievements', icon: <IoIosRibbon size={20} /> },
      { name: 'Data and Error Logging', icon: <BiError size={20} /> },
      { name: 'Dark Mode', icon: <MdModeNight size={20} /> },
    ],
    headline: 'A environmental project to use traffic to earn funds',
    desc: 'A organizations front page and information to promote green causes. This site has multiple purposes but its main content is a description of the green energy goals it has. It was built to modern popular designs. A colour scheme was picked. It was also the first I designed using Tailwind CSS. Its main features a smoothly laid out pages with varieties for data.',
    featuredComponent: 'Hero Section',
    liveSite: 'https://gorgeous-dusk-add814.netlify.app/',
  },
  {
    id: 5,
    image: LuxuryPoker,
    title: 'Worlds Smartest Quiz',
    url: 'worlds-smartest-quiz', 
    prevUrl: 'myecoapp',
    nextUrl: 'tavyepoxy',
    github: 'https://github.com/webdesignsbytom/worlds-smartest-frontend',
    demo: 'https://main--silly-vacherin-3026f4.netlify.app/',
    icons: [Javascript, HTML5Icon, CSS3icon, Expressjs, Prisma],
    images: [LuxuryPoker, LuxuryPoker, LuxuryPoker],
    skills: [
      { name: 'Array Comparisons and methods', icon: <MdDataArray size={20} /> },
      { name: 'User Authentication', icon: <GrUserAdmin size={20} /> },
      { name: 'NPC interactions', icon: <BsPeopleFill size={20} /> },
      { name: 'Game Design', icon: <GrGamepad size={20} /> },
      { name: 'In Game Chat', icon: <BsFillChatDotsFill size={20} /> },
    ],
    headline: 'A react and react native quiz app',
    desc: 'The worlds smartest person quiz app is a fun IQ and general knowledge squiz combined with a competitive user experience. With additional features that include user comments, likes and scoreboards. As well as using the users to vote on the values of the questions and change the overall reflected scores.',
    featuredComponent: 'User Voting',
    liveSite: 'https://main--silly-vacherin-3026f4.netlify.app/',
  },
];
