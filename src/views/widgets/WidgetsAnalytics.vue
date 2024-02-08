<template>
<div>
<CRow :xs="{ gutter: 4 }" class="custom-row">
      <CCol v-for="widget in widgets" :key="widget.id" :sm="6" :xl="4" :xxl="3" class="custom-widget">
        <CWidgetStatsA class="main-widget">
          <p class="top-info">{{ widget.title }}</p>
          <p class="stat">{{ widget.value }}</p>
        </CWidgetStatsA>
      </CCol>
    </CRow>
  <CSpinner v-if="loading" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      widgets: [
        { id: 1, title: 'USERS ONLINE', value: 0 },
        { id: 2, title: 'USERS ACTIVE TODAY', value: 0 },
        { id: 3, title: 'USERS ACTIVE THIS MONTH', value: 0 },
        { id: 4, title: 'PEAK CONCURRENCY THIS MONTH', value: 0 },
        { id: 5, title: 'DASHBOARD', value: '0 GB' },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.get('https://sfe-m3if.onrender.com/api/v1/dashboard')
        .then(response => {
          const data = response.data.data;
          this.widgets.forEach(widget => {
            switch (widget.title) {
              case 'USERS ONLINE':
                widget.value = data.usersOnline;
                break;
              case 'USERS ACTIVE TODAY':
                widget.value = data.usersActiveToday;
                break;
              case 'USERS ACTIVE THIS MONTH':
                widget.value = data.usersActiveThisMonth;
                break;
              case 'PEAK CONCURRENCY THIS MONTH':
                widget.value = data.peakConcurrency;
                break;
              case 'DASHBOARD':
                widget.value = this.formatStorage(data.dashboard);
                break;
            }
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    formatStorage(bytes) {
      if (bytes >= 1e9) {
        return (bytes / 1e9).toFixed(2) + 'GB';
      } else if (bytes >= 1e6) {
        return (bytes / 1e6).toFixed(2) + 'MB';
      } else {
        return bytes + 'B';
      }
    },
  },
};
</script>

<style scoped>
.custom-row {
  display: flex;
  align-items: stretch; /* Align items to stretch vertically */
}

.custom-widget {
  display: flex;
  flex-direction: column;
  max-width: 240px;
  width: 100%;
  /* max-height: 120px;
  height: 100%; */
}

.main-widget {
  flex-grow: 1; /* Allow the content to take the full height of the widget */
  padding: 1.2rem;
}

.top-info {
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #566BA0;
}

.stat {
  font-weight: 500;
  font-size: 28px;
  line-height: 24px;
  color: #566BA0;
}
@media screen and (min-width: 1024px) {
  .custom-row {
    margin-left: 1.6rem;
  }
}
</style>