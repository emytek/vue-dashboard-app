<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useColorModes } from '@coreui/vue'

export default {
 
}
</script>

<style lang="scss">
@import './styles/global.scss';
// Import Main styles for this application
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300&display=swap');
@import 'styles/style';
// We use those styles to show code examples, you should remove them in your application.
@import 'styles/examples';
</style>
