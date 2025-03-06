import { Presentation } from 'lucide-react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from 'react-icons/fa6';

export const NAV_LINKS = [
  {
    title: 'whichfilm',
    href: '/whichfilm',
    icon: Presentation,
  },
  {
    title: 'table-relationships',
    href: '/table-relationship',
    icon: Presentation,
  },
];
const contactsIconColor = 'var(--color-border-dark)';
export const CONTACT_LINKS = [
  {
    icon: FaEnvelope,
    href: 'mailto:matteo.codes@pm.me',
    text: 'matteo.codes@pm.me',
    color: contactsIconColor,
  },
  {
    icon: FaGithub,
    href: 'https://github.com/matteobu',
    text: 'github.com/matteobu',
    color: contactsIconColor,
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/matteo-bucciol/',
    text: 'linkedin.com/in/matteo-bucciol',
    color: contactsIconColor,
  },
  {
    icon: FaSquareXTwitter,
    href: 'https://twitter.com/dev_m_',
    text: '@dev_m_',
    color: contactsIconColor,
  },
];
