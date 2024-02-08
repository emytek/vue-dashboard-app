// const circutIcon = import.meta.env.VITE_PUBLIC_PATH + 'icons/circut.png';
// const analyticsIcon = import.meta.env.VITE_PUBLIC_PATH + 'icons/analytics.png';
// import circutIcon from '@/icons/circut.png';
// import analyticsIcon from '@/icons/analytics.png';

export default [
  {
    component: 'CNavItem',
    name: 'Get Started',
    to: '/dashboard',
    icon:'/icons/circuit.png',
  },

  {
    component: 'CNavItem',
    name: 'Analytics',
    to: '/analytics',
    icon: '/icons/analytics.png',
  },
  {
    component: 'CNavItem',
    name: 'Chat',
    to: '/chat',
    icon: 'icons/comment.png',
  },

  {
    component: 'CNavItem',
    name: 'Moderation',
    to: '/moderation',
    icon: 'icons/silence.png',
  },

  {
    component: 'CNavItem',
    name: 'API & Auth Keys',
    to: '/api-keys',
    icon: 'icons/bulb.png',
  },
  {
    component: 'CNavItem',
    name: 'Announcement',
    to: '/announcement',
    icon: 'icons/bell.png',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: '/settings',
    icon: 'icons/setting.png',
  },
  {
    component: 'CNavItem',
    name: 'Collapse',
    to: '/collapse',
    icon: 'icons/arrow.png',
  },
  {
    component: 'CNavItem',
    name: 'Give Feedback',
    to: '/give-feedback',
    icon: 'icons/exclamation.png',
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
