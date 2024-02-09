<template>
  <div>
    <CTable hover class="table-main">
      <CSpinner v-if="loading" class="loading-spinner" />
      <CTableHead>
        <CTableRow class="trow">
          <CTableHeaderCell @click="sortData('full_name')" class="thead">USERS</CTableHeaderCell>
          <CTableHeaderCell @click="sortData('message_sent')" class="thead"
            >MESSAGES SENT
            <img
              v-show="sortField === 'message_sent' && sortOrder === 'asc'"
              src="/icons/asc.svg"
              alt="Ascending"
            />
            <img
              v-show="sortField === 'message_sent' && sortOrder === 'desc'"
              src="/icons/desc.svg"
              alt="Descending"
            />
          </CTableHeaderCell>
          <CTableHeaderCell @click="sortData('media_storage_used')" class="thead"
            >MEDIA STORAGE USED
            <img
              v-show="sortField === 'media_storage_used' && sortOrder === 'asc'"
              src="/icons/asc.svg"
              alt="Ascending"
            />
            <img
              v-show="sortField === 'media_storage_used' && sortOrder === 'desc'"
              src="/icons/desc.svg"
              alt="Descending"
            />
          </CTableHeaderCell>
          <CTableHeaderCell @click="sortData('date_created')" class="thead"
            >DATE CREATED
            <img
              v-show="sortField === 'date_created' && sortOrder === 'asc'"
              src="/icons/asc.svg"
              alt="Ascending"
            />
            <img
              v-show="sortField === 'date_created' && sortOrder === 'desc'"
              src="/icons/desc.svg"
              alt="Descending"
            />
          </CTableHeaderCell>
          <CTableHeaderCell @click="sortData('media_sent')" class="thead"
            >MEDIA SENT
            <img
              v-show="sortField === 'media_sent' && sortOrder === 'asc'"
              src="/icons/asc.svg"
              alt="Ascending"
            />
            <img
              v-show="sortField === 'media_sent' && sortOrder === 'desc'"
              src="/icons/desc.svg"
              alt="Descending"
            />
          </CTableHeaderCell>
          <CTableHeaderCell></CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="user in displayedData" :key="user.full_name">
          <CTableHeaderCell class="tdata">{{ user.full_name }}</CTableHeaderCell>
          <CTableDataCell class="tdata">{{ user.message_sent }}</CTableDataCell>
          <CTableDataCell class="tdata">{{
            formatMediaStorage(user.media_storage_used)
          }}</CTableDataCell>
          <CTableDataCell class="tdata">{{ formatDate(user.date_created) }}</CTableDataCell>
          <CTableDataCell class="tdata">{{ user.media_sent }}</CTableDataCell>
          <CTableDataCell class="tdata">
          <img @click="openModal(user)" src="/icons/more.svg" alt="Image Icon" style="cursor: pointer;">
         </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>

    <div class="pagination">
      <button v-if="currentPage > 1" @click="changePage(currentPage - 1)" class="pagination-button">
        &lt;
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: page === currentPage }"
        class="pagination-button"
      >
        {{ page }}
      </button>
      <button
        v-if="currentPage < totalPages"
        @click="changePage(currentPage + 1)"
        class="pagination-button"
      >
        &gt;
      </button>
    </div>
    <MainFilter  
      :user="selectedUser"
      :is-visible="isModalVisible"
      @close-modal="closeModal" 
    />
  </div>
</template>

<script>
import axios from 'axios'
import MainFilter from './MainFilter.vue'

export default {
  components: {
    MainFilter,
  },
  data() {
    return {
      apiEndpoint: 'https://sfe-m3if.onrender.com/api/v1/messages',
      data: [],
      displayedData: [],
      sortField: '',
      sortOrder: 'asc',
      currentPage: 1,
      itemsPerPage: 5,
      loading: false,
      isModalVisible: false,
      selectedUser: null,
       visible: false,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true

      axios
        .get(this.apiEndpoint)
        .then((response) => {
          this.data = response.data.data
          this.sortData() // Initial sort
          this.changePage(1)
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.loading = false
        })
    },
    sortData(field) {
      if (field) {
        if (this.sortField === field) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
        } else {
          this.sortField = field
          this.sortOrder = 'asc'
        }
      }

      this.data.sort((a, b) => {
        const aValue = field ? a[field] : a
        const bValue = field ? b[field] : b

        if (this.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })

      this.changePage(this.currentPage)
    },
    changePage(page) {
      this.currentPage = page
      const startIndex = (page - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      this.displayedData = this.data.slice(startIndex, endIndex)
    },
    formatMediaStorage(mediaStorage) {
      if (mediaStorage < 1024) {
        return mediaStorage.toFixed(1) + ' MB'
      } else {
        return (mediaStorage / 1024).toFixed(1) + ' GB'
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    },

    openModal(user) {
      this.selectedUser = user
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },

  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage)
    },
  },
}
</script>

<style>
.table-main {
  background-color: #ffffff;
}
.thead {
  font-weight: 400;
  font-size: 14px;
  color: #9999bc;
  line-height: 24px;
}
.tdata {
  font-weight: 400;
  font-size: 16px;
  color: #071439;
  line-height: 24px;
  padding: 1.2rem;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.8rem;
}
.pagination-button {
  margin-right: 7px;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  width: 34px;
  height: 34px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #212b36;
  /* padding-left: 0.2rem;
  padding-right: 0.2rem; */
}
.loading-spinner {
  margin: 20px auto;
  display: block;
}

@media screen and (min-width: 1024px) {
  .table-main {
    max-width: 950px;
    width: 100%;
    margin-left: 1.6rem;
  }
}
</style>