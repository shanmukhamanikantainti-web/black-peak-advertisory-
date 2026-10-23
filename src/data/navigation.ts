export interface NavItem {
  label: string;
  href: string;
  num: string;
}

export const navigationItems: NavItem[] = [
  { label: 'STUDIO', href: '#studio', num: 'I' },
  { label: 'SERVICES', href: '#services', num: 'II' },
  { label: 'WORK', href: '#work', num: 'III' },
  { label: 'APPROACH', href: '#approach', num: 'IV' },
  { label: 'WHY US', href: '#why', num: 'V' },
  { label: 'CONTACT', href: '#contact', num: 'VI' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'GitHub', href: 'https://github.com' },
];
