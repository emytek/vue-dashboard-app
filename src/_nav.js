// const circutIcon = import.meta.env.VITE_PUBLIC_PATH + '/new/circut.svg';
// const analyticsIcon = import.meta.env.VITE_PUBLIC_PATH + 'icons/analytics.svg';
// import circutIcon from '@/icons/circut.svg';
// import analyticsIcon from '@/icons/analytics.svg';

export default [
  {
    component: 'CNavItem',
    name: 'Get Started',
    to: '/dashboard',
    icon:'/new/start.svg',
  },

  {
    component: 'CNavItem',
    name: 'Analytics',
    to: '/analytics',
    icon: '/new/atics.svg',
  },
  {
    component: 'CNavItem',
    name: 'Chat',
    to: '/chat',
    icon: '/new/chat.svg',
  },

  {
    component: 'CNavItem',
    name: 'Moderation',
    to: '/moderation',
    icon: '/new/mod.svg',
  },

  {
    component: 'CNavItem',
    name: 'API & Auth Keys',
    to: '/api-keys',
    icon: 'new/api.svg',
  },
  {
    component: 'CNavItem',
    name: 'Announcement',
    to: '/announcement',
    icon: '/new/bell.svg',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: '/settings',
    icon: '/new/set.svg',
  },
  {
    component: 'CNavItem',
    name: 'Collapse',
    to: '/collapse',
    icon: '/new/cps.svg',
  },
  {
    component: 'CNavItem',
    name: 'Give Feedback',
    to: '/give-feedback',
    icon: '/new/fb.svg',
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
