<template>
     <div>
        <p class="min-text">Last updated 1 minute ago 
            <span class="spn-icon"><img src="@/assets/icons/refresh.svg" alt=""></span>
            <span class="spn-text">Refresh</span>
        </p>
    <div class="main-cards">
    <WidgetsAnalytics />
    </div>
  </div>
</template>

<script>
import WidgetsAnalytics from './../widgets/WidgetsAnalytics.vue'


export default {
    components: {
        WidgetsAnalytics,
    },
    setup() {
        
    },
}
</script>

<style scoped>
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
</style>