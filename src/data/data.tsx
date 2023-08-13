import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import CodeWarsIcon from '../components/Icon/Codewars';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import testimonial1 from '../images/testimonial-1.jpg';
import testimonial2 from '../images/testimonial-2.jpg';
import testimonial3 from '../images/testimonial-3.jpg';
import {
  ContactType,
  IAbout,
  IContactSection,
  IHero,
  IHomepageMeta,
  IPortfolioItem,
  ISocial,
  ITestimonialSection,
  ITimelineItem,
  SkillGroup,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: IHomepageMeta = {
  title: 'Hector Avalos - CV',
  description: 'React Resume - Hector Avalos',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

const getAge = (): string => {
  var ageDifMs = Date.now() - new Date("1997-04-17").getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
}

/**
 * Hero section
 */
export const heroData: IHero = {
  imageSrc: heroImage,
  name: `I'm Hector Avalos.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineer</strong> based on Guadalajara,
        Jalisco, México. Currently working at &nbsp;
        <strong className="text-stone-100">
          <a href="https://www.epam.com/">EPAM Systems México</a>
        </strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time I love to learn new stuff. Also I love playing videogames, two of my
        favorite videogames are &nbsp;
        <strong className="text-stone-100">
          <a href="https://en.wikipedia.org/wiki/Silent_Hill_2">Silent Hill 2</a>
        </strong>
        &nbsp;and&nbsp;
        <strong className="text-stone-100">
          <a href="https://en.wikipedia.org/wiki/Stray_(video_game)">Stray</a>
        </strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: IAbout = {
  profileImageSrc: profilepic,
  description: `I'm a ${getAge()} year old Software Engineer. I started writing code at the age of 14 (in 2011) because back then I was very curious
  about how videogames worked. So I started reading a lot about software development. The first programming language I learned was C and one
  of its libraries for videogames, Allegro. My main goal is to become a Tech Lead so I've been developing my soft-skills to become a good one.`,
  aboutItems: [
    {label: 'Location', text: 'Guadalajara, Mexico.', Icon: MapIcon},
    {label: 'Age', text: getAge(), Icon: CalendarIcon},
    {label: 'Interests', text: 'Engineering, Electronics, Videogames.', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Guadalajara', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'EPAM Systems México.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'VueJS',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'NuxtJS',
        level: 7,
      },
      {
        name: 'ReactJS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'NestJS',
        level: 10,
      },
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Django',
        level: 7,
      },
      {
        name: '.NET',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: IPortfolioItem[] = [
  {
    title: 'EPAM Systems México S de RL de CV',
    description: 'Full Stack Software Engineer.',
    url: 'https://epam.com',
    image: porfolioImage4,
  },
  {
    title: 'Connie Health',
    description: 'Full Stack Software Engineer.',
    url: 'https://conniehealth.com',
    image: porfolioImage2,
  },
  {
    title: 'Gold Media Tech LLC',
    description: 'Full Stack Software Engineer.',
    url: 'https://goldmediatech.com',
    image: porfolioImage3,
  },
  {
    title: 'Vectralis Baumann Automation',
    description: 'Software Developer.',
    url: 'https://vectralis.com',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: ITimelineItem[] = [
  {
    date: 'Aug 2013 - Jul 2017',
    location: 'Centro de Enseñanza Técnica Industrial.',
    title: 'Tecnólogo en Informática y Computación',
  },
  {
    date: 'Feb 2020 - Aug 2020',
    location: 'BEDU.org',
    title: 'Full Stack JavaScript (150h. bootcamp)',
  },
  {
    date: 'May 2019 - Dec 2019',
    location: 'BEDU.org',
    title: 'Full Stack Python (150h. bootcamp)',
  },
];

export const experience: ITimelineItem[] = [
  {
    date: 'Jul 2023 - Currently',
    location: 'Guadalajara, Jalisco. MX. (Remote)',
    title: 'Full Stack Software Engineer @ EPAM Systems México',
    content: (
      <p>
        Working in a project for an EPAM client. In this project I've been using technologies like
        ReactJS, Storybook, Material UI, Apollo GraphQL, AWS DynamoDB, Docker and docker-compose and
        tools like Figma, Atlassian Jira and Atlassian Confluence, all this implemented in a
        serverless architecture. The rendering of the project is dynamic which requires us developers
        to write "generic" components that depend on the JSON schema provided to the app.
      </p>
    ),
  },
  {
    date: 'Jul 2020 - March 2023',
    location: 'Boston, MA. (Remote)',
    title: 'Software Engineer @ Gold Media Tech LLC',
    content: (
      <p>
        Working for a Medicare Advisors company. I’ve written code for both Front and Back End using technologies such
        as VueJS (NuxtJS/Typescript) and NestJS (Typescript). I have used technologies like Swagger (OpenAPI), Redis,
        Aptible, Netlify, PostgreSQL, Sentry.io, Airtable, Salesforce (Process Builder, SOQL queries, integration with
        NodeJS).
      </p>
    ),
  },
  {
    date: 'Aug 2017 - Jul 2020',
    location: 'Zapopan, Jalisco. MX.',
    title: 'Software developer @ Vectralis-Baumann Automation',
    content: (
      <p>
        R&D Software Developer. I used to develop apps that helped the Automation area in their daily tasks (PLCs,
        HMIs). I wrote new code for their internal management system, which was initially written in Java, then we had
        to migrate it to PHP because the company started to grow a lot and the Java code had a lot of tech-debt. After
        that we decided it was time to upgrade the system so we “translated” again the code to ReactJs for the Front End
        and Django / Django-REST-Framework for the Back End) as well as deploying new changes to the local server (Using
        tools like docker/docker-compose, nginx and Gunicorn).
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: ITestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Luis Montoya (Ex-Cornershop By Uber)',
      text: 'I have known Hector for several years now, I am surprised by his ability and willingness to develop and learn, he is passionate about readable code without neglecting the performance part, he is always focused on proposing solutions.',
      image: testimonial1,
    },
    {
      name: 'Angel Moreno (Consejo de la Judicatura del Estado de Jalisco)',
      text: 'Héctor está siempre dispuesto a ayudar a los demás, como desarrollador debo decir que le tengo una gran admiración ha sido un ejemplo para mí y debo decir que sus habilidades son increíbles, dignas de un buen senior.',
      image: testimonial2,
    },
    {
      name: 'Angel Gonzalez (Oracle)',
      text: "I've had the opportunity to work with Hector for a few years, he has proven to be a great team player, supporting other team members with his expertise. He's able to be a good fit for any position he desires, as he has an extensive knowledge provided for the number of software solutions he has helped with, always with the utmost willingness and commitment.",
      image: testimonial3,
    },
  ],
};

/**
 * Contact section
 */

export const contact: IContactSection = {
  headerText: 'Get in touch.',
  description: "Please feel free to contact me in case you're interested in my profile.",
  items: [
    {
      type: ContactType.Email,
      text: 'hg.avalosc97@gmail.com',
      href: 'mailto:hg.avalosc97@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Guadalajara, JAL. MX',
      href: 'https://www.google.com/maps/place/Guadalajara,+Jal./@20.6737723,-103.4178151,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@avalos.gerardo97',
      href: 'https://www.instagram.com/avalos.gerardo97/',
    },
    {
      type: ContactType.Github,
      text: 'havalos97',
      href: 'https://github.com/havalos97',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: ISocial[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/havalos97'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/havalos97/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/avalos.gerardo97/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/hecaval97'},
  {label: 'CodeWars', Icon: CodeWarsIcon, href: 'https://codewars.com/users/havalos97'},
];
