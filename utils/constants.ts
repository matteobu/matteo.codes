import { Home, Presentation } from 'lucide-react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from 'react-icons/fa6';

export const UAParser_value =
  'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2a1pre) Gecko/20090928 Firefox/3.5 Maemo Browser 1.4.1.22 RX-51 N900';
export const mobile = 'mobile';

export const NAV_LINKS = [
  {
    title: 'main',
    href: '/',
    icon: Home,
  },
  {
    title: 'projects',
    href: '/projects',
    icon: Presentation,
  },
  // {
  //   title: 'contacts',
  //   href: '/contacts',
  //   icon: Mail,
  // },
];

export const CONTACT_LINKS = [
  {
    icon: FaEnvelope,
    href: 'mailto:matteo.codes@pm.me',
    text: 'matteo.codes@pm.me',
    color: 'text-gray-800',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/matteobu',
    text: 'github.com/matteobu',
    color: 'text-gray-800',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/matteo-bucciol/',
    text: 'linkedin.com/in/matteo-bucciol',
    color: 'text-gray-800',
  },
  {
    icon: FaSquareXTwitter,
    href: 'https://twitter.com/dev_m_',
    text: '@dev_m_',
    color: 'text-gray-800',
  },
];
