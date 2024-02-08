<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
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
        <img src="@/assets/icons/cancel.svg" alt="Icon 2" class="mx-icon">
      </div>
    </div>

       <!-- Core UI Offcanvas -->
    <transition name="fade">
    <COffcanvas placement="end" :visible="offcanvasVisible" @hide="toggleOffcanvas" :backdrop="true" >
      <COffcanvasHeader>
        <COffcanvasTitle class="filter">Filter Table</COffcanvasTitle>
        <CCloseButton class="text-reset" @click="toggleOffcanvas"/>
      </COffcanvasHeader>
      <COffcanvasBody>
        <!-- Content for the offcanvas goes here -->
        <p>This is the content of the offcanvas. You can place any components or custom elements here.</p>
      </COffcanvasBody>
    </COffcanvas>
    </transition>
  </div>
</template>

<script>
export default {
   data() {
    return {
      offcanvasVisible: false,
    };
  },
  props: {
    user: Object, // User object to display details
    isVisible: Boolean, // Modal visibility state
  },
  methods: {
    closeModal() {
      // Emit an event to parent component to close the modal
      this.$emit('close-modal');
    },
       toggleOffcanvas() {
      this.offcanvasVisible = !this.offcanvasVisible;
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

</style>
