<template>
     <div>
        <p class="min-text">Last updated 1 minute ago 
            <span class="spn-icon"><img src="@/assets/icons/refresh.svg" alt=""></span>
            <span class="spn-text">Refresh</span>
        </p>
    <div class="main-cards">
    <WidgetsAnalytics />
    </div>
    <hr  class="custom-hr" />
    <div class="custom-graphs">
    <div class="chart-box">
     <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody class="md">
            <CRow>
                <div class="graph-case">
                    <p class="text">DAILY ACTIVE USERS</p>
                    <select id="select1" class="field-select">
                        <option value="default" selected disabled class="option-text">30 DAYS</option>
                        <option value="option1" class="option-text">7 DAYS</option>
                    </select>
                    
                <select id="select2" class="field-select">
                    <option value="default" selected disabled class="option-text">All Activities</option>
                    <option value="optionB" class="option-text">No Activity</option>
                </select>
                </div>
              <MainChart style="height: 300px; max-height: 300px; margin-top: 40px" />
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </div>

    <div class="chart-box">
     <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody class="md">
            <CRow>
                <div class="graph-case">
                    <p class="text">MONTHLY ACTIVE USERS</p>
                    <select id="select1" class="field-select">
                        <option value="default" selected disabled class="option-text">30 DAYS</option>
                        <option value="option1" class="option-text">7 DAYS</option>
                    </select>
                    
                <select id="select2" class="field-select">
                    <option value="default" selected disabled class="option-text">All Activities</option>
                    <option value="optionB" class="option-text">No Activity</option>
                </select>
                </div>
              <MonthlyChart style="height: 300px; max-height: 300px; margin-top: 40px" />
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </div>
    </div>
  </div>
</template>

<script>
import WidgetsAnalytics from './../widgets/WidgetsAnalytics.vue'
import MainChart from './MainChart.vue'
import MonthlyChart from './MonthlyChart.vue'

export default {
    components: {
        WidgetsAnalytics,
        MainChart,
        MonthlyChart
    },
    setup() {
        
    },
}
</script>

<style scoped>
.chart-box {
    max-width: 430px;
    width: 100%;
    max-height: 390px;
    height: 100%;
    margin-top: 1.4rem;
}
.min-text {
    font-size: 16px;
    color: #51545C;
    font-weight: 400;
    line-height: 24px;
    margin-left: 2rem;
}
.spn-icon {
    margin-left: 1rem;
    cursor: pointer;
}
.spn-text {
    margin-left: .5rem;
    color: #15AE73;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
}
.main-cards {
    cursor: pointer;
}

.graph-case {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.text {
  margin-right: 20px;
  color: #566BA0;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 1rem;
}

select {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
}
.field-select{
    width: 121px;
    height: 40px;
    border-radius: 4px;
}
.option-text{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #021C3E;
}
.custom-hr {
    margin-top: 1.5rem;
  border: 1px solid #535F89;
  max-width: 953px;
}
.custom-graphs {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@media screen and (min-width: 954px) {
  .chart-box {
    margin-left: 2.8rem;
  }
  .custom-hr {
    margin-left: 2.5rem;
  }
}
</style>