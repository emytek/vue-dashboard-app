<template>
  <div class="header-contain">
 <CHeader position="sticky" :class="[headerClassNames, 'custom-background']">
    <CContainer class="border-bottom px-4" fluid>
    <CHeaderToggler @click="$store.commit('toggleSidebar')" style="margin-inline-start: -14px">
      <!-- <CIcon icon="cil-menu" size="lg" /> -->
      <img src="@/assets/icons/compress.svg" alt="">
    </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex mx">
      <p class="header-text">Hello Ayomide!</p>
      <span class="wave">👋🏼</span>
      </CHeaderNav>
      <CHeaderNav class="ms-auto">
        <div class="load-btn">Download Report</div>
      </CHeaderNav>
      <CHeaderNav>
        <!-- <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <CIcon v-if="colorMode === 'dark'" icon="cil-moon" size="lg" />
            <CIcon v-else-if="colorMode === 'light'" icon="cil-sun" size="lg" />
            <CIcon v-else icon="cil-contrast" size="lg" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              :active="colorMode === 'light'"
              class="d-flex align-items-center"
              component="button"
              type="button"
              @click="setColorMode('light')"
            >
              <CIcon class="me-2" icon="cil-sun" size="lg" /> Light
            </CDropdownItem>
            <CDropdownItem
              :active="colorMode === 'dark'"
              class="d-flex align-items-center"
              component="button"
              type="button"
              @click="setColorMode('dark')"
            >
              <CIcon class="me-2" icon="cil-moon" size="lg" /> Dark
            </CDropdownItem>
            <CDropdownItem
              :active="colorMode === 'auto'"
              class="d-flex align-items-center"
              component="button"
              type="button"
              @click="setColorMode('auto')"
            >
              <CIcon class="me-2" icon="cil-contrast" size="lg" /> Auto
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li> -->
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <!-- <CContainer class="px-4" fluid>
      <AppBreadcrumb />
    </CContainer> -->
  </CHeader>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useColorModes } from '@coreui/vue'
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  setup() {
    const headerClassNames = ref('mb-4 p-0');
    const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme');
    const isSmallScreen = ref(window.innerWidth <= 768); 

    const handleResize = () => {
      isSmallScreen.value = window.innerWidth <= 768; 
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);

      document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0) {
          headerClassNames.value = 'mb-4 p-0 shadow-sm';
        } else {
          headerClassNames.value = 'mb-4 p-0';
        }
      });
    });

    return {
      headerClassNames,
      colorMode,
      setColorMode,
      isSmallScreen,
    };
  },
};
</script>

<style>
.header-contain {
  background-color:#E7E9FF;
  padding-top: .8rem;
}
.custom-background {
  background-color: #E7E9FF !important;
}

.header-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9999BC;
  margin-top: 0.8rem;
}
.wave {
  margin-left: 0.4rem;
}
.mx {
  display: flex;
  justify-content: center;
  align-items: center;
}
.load-btn {
  border-radius: 30px;
  padding: 7px 35px 7px 35px;
  background-color: #4568D1;
  /* width: 203px;
  height: 32px; */
  color: #fff;
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .load-btn {
    padding: 4px 10px 4px 10px; 
    font-size: 12px;
  }
}
</style>
