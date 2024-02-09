<template>
  <div>
    <CRow :xs="{ gutter: 4 }" class="custom-row">
      <CCol v-for="widget in widgets" :key="widget.id" :sm="6" :xl="4" :xxl="3" class="custom-widget">
        <CWidgetStatsA class="main-widget">
          <div class="overlay">
            <span>...</span>
          </div>
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
        { id: 1, title: 'NO OF USERS', value: 0 },
        { id: 2, title: 'TOTAL MESSAGE SENT', value: 0 },
        { id: 3, title: 'TOTAL MEDIA STORAGE USED', value: 0 },
        { id: 4, title: 'TOTAL MEDIA SENT', value: 0 },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.get('https://sfe-m3if.onrender.com/api/v1/chat_dashboard')
        .then(response => {
          const data = response.data.data;
          this.widgets.forEach(widget => {
            switch (widget.title) {
              case 'NO OF USERS':
                widget.value = data.numberOfUsers;
                break;
              case 'TOTAL MESSAGE SENT':
                widget.value = data.totalMessagesSent;
                break;
              case 'TOTAL MEDIA SENT':
                widget.value = data.totalMediaSent;
                break;
              case 'TOTAL MEDIA STORAGE USED':
                widget.value = this.formatStorage(data.totalStorageUsed);
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
  max-width: 230px;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.custom-widget:hover {
    transform: scale(1.05);
}

.main-widget {
  flex-grow: 1; /* Allow the content to take the full height of the widget */
  padding: 1.2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.main-widget .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF1E9;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .main-widget:hover .overlay {
    opacity: 1;
  }

  .main-widget .overlay span {
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
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