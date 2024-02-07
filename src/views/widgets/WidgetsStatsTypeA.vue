<template>
 <CRow :xs="{ gutter: 4 }" class="custom-row">
    <CCol :sm="6" :xl="4" :xxl="3" class="custom-widget">
      <CWidgetStatsA class="main-widget">
        <p class="top-info">NO OF USERS</p>
        <p class="stat">453</p>
      </CWidgetStatsA>
    </CCol>
    <CCol :sm="6" :xl="4" :xxl="3" class="custom-widget">
      <CWidgetStatsA class="main-widget">
        <p class="top-info">TOTAL MESSAGES SENT</p>
        <p class="stat">453</p>
      </CWidgetStatsA>
    </CCol>
    <CCol :sm="6" :xl="4" :xxl="3" class="custom-widget">
      <CWidgetStatsA class="main-widget">
        <p class="top-info">TOTAL MEDIA STORAGE USED</p>
        <p class="stat">453</p>
      </CWidgetStatsA>
    </CCol>
    <CCol :sm="6" :xl="4" :xxl="3" class="custom-widget">
      <CWidgetStatsA class="main-widget">
        <p class="top-info">TOTAL MEDIA SENT</p>
        <p class="stat">453</p>
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script>
import { onMounted, ref } from 'vue'
import { CChart } from '@coreui/vue-chartjs'
import { getStyle } from '@coreui/utils'

export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
  setup() {
    const widgetChartRef1 = ref()
    const widgetChartRef2 = ref()

    onMounted(() => {
      document.documentElement.addEventListener('ColorSchemeChange', () => {
        if (widgetChartRef1.value) {
          widgetChartRef1.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-primary')
          widgetChartRef1.value.chart.update()
        }

        if (widgetChartRef2.value) {
          widgetChartRef2.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-info')
          widgetChartRef2.value.chart.update()
        }
      })
    })

    return { getStyle, widgetChartRef1, widgetChartRef2 }
  },
}
</script>

<style scoped>
.custom-row {
  display: flex;
  align-items: stretch; /* Align items to stretch vertically */
}

.custom-widget {
  display: flex;
  flex-direction: column;
  max-width: 230px;
  width: 100%;
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