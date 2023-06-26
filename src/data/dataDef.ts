import { StaticImageData } from 'next/image';
import { FC, ForwardRefExoticComponent, SVGProps } from 'react';

import { IconProps } from '../components/Icon/Icon';

export interface IHomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Hero section
 */
export interface IHero {
  imageSrc: string;
  name: string;
  description: JSX.Element;
  actions: IHeroActionItem[];
}

interface IHeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * About section
 */
export interface IAbout {
  profileImageSrc?: string;
  description: string;
  aboutItems: IAboutItem[];
}

export interface IAboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Stat section
 */
export interface IStat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */

export interface ISkill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: ISkill[];
}

/**
 * Portfolio section
 */
export interface IPortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * Resume section
 */
export interface ITimelineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
}

/**
 * Testimonial section
 */
export interface ITestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: ITestimonial[];
}

export interface ITestimonial {
  image?: string;
  name: string;
  text: string;
}

/**
 * Contact section
 */
export interface IContactSection {
  headerText?: string;
  description: string;
  items: IContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type TContactType = typeof ContactType[keyof typeof ContactType];

export interface IContactItem {
  type: TContactType;
  text: string;
  href?: string;
}

export interface IContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface ISocial {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
