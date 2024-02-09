<template>
  <div v-if="isVisible" class="modal-overlay"  @click="closeModal($event)">
    <div class="modal-content">
      <!-- First Section -->
      <div class="modal-section">
        <p class="view">View</p>
        <p class="close">Disable</p>
      </div>

      <!-- Horizontal Rule -->
      <hr class="modal-rule">

      <!-- Second Section -->
      <div class="modal-section">
       <img src="@/assets/icons/eye.svg" alt="Icon 1" class="mx-icon" @click="toggleOffcanvas">
        <img src="@/assets/icons/cancel.svg" alt="Icon 2" class="my-icon"  @click="closeModal">
      </div>
    </div>

       <!-- Core UI Offcanvas -->
    <!-- <transition name="fade"> -->
    <div class="offcanvas">
      <COffcanvas placement="end" :visible="offcanvasVisible" @hide="toggleOffcanvas" >
        <COffcanvasHeader>
          <COffcanvasTitle class="filter">Filter Table</COffcanvasTitle>
          <CCloseButton class="text-reset" @click="toggleOffcanvas"/>
        </COffcanvasHeader>
        <div class="px-flex">
          <div :class="{ 'filter1': activeFilter === 'today' }" @click="setActiveFilter('today')">Today</div>
          <div :class="{ 'filter1': activeFilter === 'last7days' }" @click="setActiveFilter('last7days')">Last 7 days</div>
          <div :class="{ 'filter1': activeFilter === 'thisMonth' }" @click="setActiveFilter('thisMonth')">This month</div>
          <div :class="{ 'filter1': activeFilter === 'last3months' }" @click="setActiveFilter('last3months')">Last 3 months</div>
        </div>
        <COffcanvasBody>
        <div class="date-picker-container">
          <!-- Date From -->
          <div class="date-picker" @click="toggleDatePicker('dateFrom')">
            <label for="dateFrom" class="px-label">Date From</label>
            <input
              type="text"
              readonly
              v-model="dateFrom"
              id="dateFrom"
              placeholder="Select Date"
            />
            <div v-show="showDatePicker.dateFrom" class="date-picker-calendar">
              <input
                type="date"
                v-model="dateFrom"
                @change="handleDateFromChange"
              />
            </div>
          </div>

          <!-- Date To -->
          <div class="date-picker" @click="toggleDatePicker('dateTo')">
            <label for="dateTo" class="px-label">Date To</label>
            <input
              type="text"
              readonly
              v-model="dateTo"
              id="dateTo"
              placeholder="Select Date"
            />
            <div v-show="showDatePicker.dateTo" class="date-picker-calendar">
              <input
                type="date"
                v-model="dateTo"
                @change="handleDateToChange"
              />
            </div>
          </div>
        </div>

          <div class="messages">
          <label for="filterSelect" class="mx-label">Messages</label>
          <select v-model="selectedFilter" @change="handleFilterChange" id="filterSelect" class="message-field">
            <option value="" disabled>Select an option</option>
            <option value="option1">0 - 500 Messages</option>
            <option value="option2">500 - 2000 Messages</option>
            <option value="option3">2000+ Messages</option>
            <!-- Add more options as needed -->
          </select>
          <p v-if="selectedFilter">Selected Filter: {{ selectedFilter }}</p>
        </div>

          <div class="messages">
          <label for="filterSelect" class="mx-label">Media Storage Used</label>
          <select v-model="selectedFilter" @change="handleFilterStorageChange" id="filterStorageSelect" class="message-field">
            <option value="" disabled>Select an option</option>
            <option value="option1">0 - 50MB</option>
            <option value="option2">50MB - 200MB</option>
            <option value="option3">200MB - 1GB</option>
          </select>
          <p v-if="selectedStorageFilter">SelectedStorage Filter: {{ selectedStorageFilter }}</p>
        </div>

        <div class="filter-btn">
          Filter Table
        </div>
      </COffcanvasBody>
      </COffcanvas>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import DatePicker from 'vue3-datepicker';


export default {
  components: {
    DatePicker,
  },
   data() {
    return {
      offcanvasVisible: false,
      activeFilter: 'today',
      dateFrom: null,
      dateTo: null,
      showDatePicker: {
        dateFrom: false,
        dateTo: false,
      },
      selectedFilter: null,
      selectedStorageFilter: null,
    };
  },
  props: {
    user: Object, // User object to display details
    isVisible: Boolean, // Modal visibility state
  },
  methods: {
    closeModal(event) {
      // Check if the clicked element is the cancel icon, if not, do nothing
      if (!event.target.classList.contains('my-icon')) {
        return;
      }

      // Emit an event to parent component to close the modal
      this.$emit('close-modal');
    },
    toggleOffcanvas() {
      console.log('Toggling offcanvas:::::');
      this.offcanvasVisible = !this.offcanvasVisible;
    },
     setActiveFilter(filter) {
      this.activeFilter = this.activeFilter === filter ? '' : filter;
    },
    handleDateFromChange(event) {
      const selectedDate = event.target.value;
      if (selectedDate) {
        this.dateFrom = selectedDate;
      } else {
        this.dateFrom = null;
      }
    },
   handleDateToChange(event) {
      const selectedDate = event.target.value;
      if (selectedDate) {
        this.dateTo = selectedDate;
      } else {
        this.dateTo = null;
      }
    },
    toggleDatePicker(field) {
      // Toggle visibility for the clicked date picker
      this.showDatePicker[field] = !this.showDatePicker[field];
    },
    handleFilterChange() {
      // Store the selected filter value for further use (e.g., filtering)
      console.log('Selected Filter:', this.selectedFilter);
    },
    handleFilterStorageChange() {
      // Store the selected filter value for further use (e.g., filtering)
      console.log('Selected Filter:', this.selectedStorageFilter);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
}

/* Modal Content */
.modal-content {
  max-width: 247px;
  max-height: 108px;
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
}

/* Modal Sections */
.modal-section {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
}

/* Image Icon in Modal */
.modal-section img {
  width: 40px; /* Adjust the size as needed */
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
}

.offcanvas {
  max-width: 600px;
}

/* Horizontal Rule */
.modal-rule {
  border: 0;
  border-top: 1px solid #ddd; /* Adjust color as needed */
  width: 100%;
  margin: 5px 0;
}
.mx-icon {
  padding-bottom: 1rem;
}
.my-icon {
  padding-bottom: 1rem;
}
.view {
  color: #51545C;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;  
}
.close {
  color: #D53120;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;  
  padding-top: 1rem;
}
.filter {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
}
.px-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 2rem;
    cursor: pointer;
}
.filter1 {
    border-radius: 100px;
    border: 1px solid #F05A28;
    display: inline-block;
    padding: 10px 15px;
    background-color: #FFF1E9;
    color: #F05A28;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
}
.group {
   border: 1px solid #EFF1F6;
   padding: 10px, 18px, 10px, 18px;
   border-radius: 100px;
    font-weight: 400;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
}
.date-picker-container {
  display: flex;
  gap: 12px;
}

.px-label {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #51545C;
}

.date-picker {
  border: 1px solid #9999BC;
  border-radius: 4px;
  padding: 10px; /* Adjust padding as needed */
}


label {
  display: block;
  margin-bottom: 5px;
  font-weight: 400;
  color: #9999BC;
  font-size: 16px;
  line-height: 24px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.date-picker-calendar {
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.date-picker:hover .date-picker-calendar {
  display: block;
}
.messages {
  max-width: 400px;
  max-height: 320px;
  margin-top: 1rem;
}

.message-field {
  width: 100%;
  max-height: 80px;
  height: 100%;
  background-color: #F5F7FC;
  border: 1px solid #9999BC;
}
.mx-label {
  color: #51545C;
}
.filter-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  background-color: #4568D1;
  padding: 10px 15px;
  color: #fff;
  border-radius: 30px;
  margin-top: 7rem;
  text-align: center;
  width: 80%;
}
</style>
