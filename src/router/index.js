import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Get Started',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Get Started',
        component: () =>
          import(
            '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
        path: '/analytics',
        name: 'Analytics',
        component: () =>
        import(
          '@/views/analytics/Analytics.vue'
        ),
      },
      {
        path: '/chat',
        name: 'Chat',
        component: () =>
          import(
            '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
        path: '/moderation',
        name: 'Moderation',
        component: () =>
        import(
          '@/views/analytics/Analytics.vue'
        ),
      },
      {
        path: '/api',
        name: 'API & Auth Keys',
        component: () =>
        import(
          '@/views/analytics/Analytics.vue'
        ),
        },

        {
            path: '/announcement',
            name: 'Announcement',
            component: () =>
        import(
          '@/views/analytics/Analytics.vue'
        ),
        },
        {
          path: '/settings',
          name: 'Settings',
          component: () =>
      import(
        '@/views/analytics/Analytics.vue'
      ),
      },
      {
        path: '/collapse',
        name: 'Collapse',
        component: () =>
    import(
      '@/views/analytics/Analytics.vue'
    ),
    },  
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
