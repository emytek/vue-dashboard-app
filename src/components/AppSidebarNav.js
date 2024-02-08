import { defineComponent, h, onMounted, ref, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { CBadge, CSidebarNav, CNavItem, CNavGroup, CNavTitle } from '@coreui/vue'
import nav from '@/_nav.js'

import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

const normalizePath = (path) =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(html)$/, '')

    const isActiveLink = (route, link) => {
      if (link === undefined) {
        return false
      }
    
      if (route.hash === link) {
        return true
      }
    
      const currentPath = normalizePath(route.path)
      const targetPath = normalizePath(link)
    
      return currentPath === targetPath
    }

const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.to)) {
    return true
  }

  if (item.items) {
    return item.items.some((child) => isActiveItem(route, child))
  }

  return false
}

const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const route = useRoute()
    const firstRender = ref(true)
    const currentLink = ref(null)

    onMounted(() => {
      firstRender.value = false
    })

    const setActiveLink = (link) => {
      currentLink.value = link
    }

    const renderItem = (item) => {
      const isActive = isActiveItem(route, item)

      if (isActive) {
        setActiveLink(item.name)
      }

      if (item.items) {
        return h(
          CNavGroup,
          {
            as: 'div',
            compact: true,
            ...(firstRender.value && {
              visible: item.items.some((child) => isActiveItem(route, child)),
            }),
          },
          {
            togglerContent: () => [
              h(resolveComponent('CIcon'), {
                customClassName: 'nav-icon',
                name: item.icon,
              }),
              item.name,
            ],
            default: () => item.items.map((child) => renderItem(child)),
          },
        )
      }

      return item.to
        ? h(
            RouterLink,
            {
              to: item.to,
              custom: true,
            },
            {
              default: (props) =>
                h(
                  resolveComponent(item.component),
                  {
                    class: `nav-item ${isActive ? 'active' : ''}`,
                    active: props.isActive,
                    as: 'div',
                    href: props.href,
                    onClick: () => props.navigate(),
                  },
                  {
                    default: () => [
                      item.icon
                        ? typeof item.icon === 'string'
                          ? h('img', {
                              class: `nav-icon ${isActive ? 'active' : ''}`,
                              src: item.icon,
                              alt: 'Icon',
                            })
                          : item.icon // If it's not a string, assume it's a custom icon VNode
                        : h('span', { class: 'nav-icon' }, h('span', { class: 'nav-icon-bullet' })),
                      h('span', { class: `nav-name ${isActive ? 'active' : ''}` }, item.name),
                    ],
                  },
                ),
            },
          )
        : h(
          resolveComponent(item.component),
          {
            class: `nav-item ${isActive ? 'active' : ''}`,
            as: 'div',
          },
          {
            default: () => item.name,
          },
        )
    }

    return () =>
    h(
      CSidebarNav,
      {
        as: simplebar,
      },
      {
        default: () => nav.map((item) => renderItem(item)),
      },
    )
  },
})
export { AppSidebarNav }
