<template>
  <div class="header-contain">
 <CHeader  :class="[headerClassNames, 'custom-background']">
    <CContainer class="border-bottom px-4" fluid>
   <CHeaderToggler @click="$store.commit('toggleSidebar')"  style="margin-inline-start: -14px">
      <CIcon icon="cil-menu" v-if="isSmallScreen" size="lg" />
      <img src="@/assets/icons/compress.svg" alt="" v-show="!isSmallScreen" />
    </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex mx">
      <p class="header-text">Hello Ayomide!</p>
      <span class="wave">👋🏼</span>
      </CHeaderNav>
    <CHeaderNav class="ms-auto">
          <div class="load-btn" @mouseover="showDownloadBtn = true" @mouseleave="showDownloadBtn = false">
            <span v-if="!showDownloadBtn">Download Report</span>
            <span v-else class="download-icon">📊</span>
          </div>
        </CHeaderNav>
      <CHeaderNav>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
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

.header-animate {
  transition: transform 0.3s ease-in-out;
}

.header-text:hover {
  transform: scale(1.1);
  cursor: pointer;
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
  position: relative;
  overflow: hidden;
}
.download-icon {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.load-btn:hover .download-icon {
  transform: translateY(0);
  opacity: 1;
}
@media screen and (max-width: 767px) {
  .load-btn {
    padding: 4px 10px 4px 10px; 
    font-size: 12px;
  }
}
</style>
