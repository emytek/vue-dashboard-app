<template>
  <div>
    <WidgetsStatsA class="mb-4" />
    <div class="mx-flex">
     <Tabs />
    <SearchVue @search="handleSearch" />
    </div>
    <Table :search-query="searchQuery" />
   

  </div>
</template>

<script>
import avatar1 from '@/assets/images/avatars/1.jpg'
import avatar2 from '@/assets/images/avatars/2.jpg'
import avatar3 from '@/assets/images/avatars/3.jpg'
import avatar4 from '@/assets/images/avatars/4.jpg'
import avatar5 from '@/assets/images/avatars/5.jpg'
import avatar6 from '@/assets/images/avatars/6.jpg'
import MainChart from './MainChart'
import WidgetsStatsA from './../widgets/WidgetsStatsTypeA.vue'
import WidgetsStatsD from './../widgets/WidgetsStatsTypeD.vue'
import SearchVue from '../../components/UIComponents/Search.vue'
import Tabs from '../../components/UIComponents/Tabs.vue'
import Table from '../../components/UIComponents/FeatureTable.vue'

export default {
  name: 'Dashboard',
  components: {
    MainChart,
    WidgetsStatsA,
    WidgetsStatsD,
    SearchVue,
    Tabs,
    Table
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
}
</script>

<style scoped>
  .mx-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
