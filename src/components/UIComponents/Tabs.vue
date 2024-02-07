<template>
  <div class="tabs-main">
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: activeTab === 'directMessages' }"
        @click="setActiveTab('directMessages')"
      >
        Direct Messages
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'groups' }"
        @click="setActiveTab('groups')"
      >
        Groups
      </div>
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 'directMessages'" class="content">
        <h2>Direct Messages</h2>
        <p>Welcome to your Direct Messages!</p>
        <ul>
          <li>User 1: Hello there!</li>
          <li>User 2: How are you doing?</li>
          <!-- Add more direct messages as needed -->
        </ul>
      </div>
      <div v-if="activeTab === 'groups'" class="content">
        <h2>Groups</h2>
        <p>Explore and participate in groups!</p>
        <ul>
          <li>Group A: Topic discussion</li>
          <li>Group B: Project collaboration</li>
          <!-- Add more groups as needed -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Tabs',
  setup() {
    const activeTab = ref('directMessages');

    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
}

.tab {
  padding: 10px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
}

.tab.active {
  color: #ea8d51;
  border-bottom: 2px solid #ea8d51;
}

.tab-content {
  margin-top: 20px;
}

.tabs-main {
  margin-left: 2.5rem;
}

::v-deep .content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: none;
}

::v-deep .content.active {
  display: block;
}
</style>

