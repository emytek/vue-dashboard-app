<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="search">
      <input v-model="searchQuery" type="text" placeholder="Search...">
      <button type="submit">
        <img src="/icons/search.svg" alt="">
      </button>
    </form>
  </div>
</template>

<script>
import { CIcon } from '@coreui/icons-vue';

export default {
  components: {
    CIcon,
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.container {
max-width: 300px;
width: 100%;
max-height: 45px;
height: 100%;
}

form {
  border-radius: 6px;
  border: 1px solid #C1CEC8;
  position: relative;
  /* opacity: 54%; */
}

input {
  width: 100%;
  height: 100%;
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #8D9091;
    padding: .6rem;
}

input:focus {
  outline: none;
}

button {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 18px;
}

button i {
  color: rgb(93, 94, 95);
}

button:hover i {
  color: rgb(162, 163, 163);
}
</style>
