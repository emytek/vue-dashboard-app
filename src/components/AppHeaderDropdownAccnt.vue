<template>
  <CDropdown placement="bottom-end" variant="nav-item">
    <CDropdownToggle class="py-0 pe-0" :caret="false">
         <div>
    <div class="circle-container">
      <div class="circle" style="background-color: #E8E8E8; height: 40px; width: 40px;">
        <span style="color: #000000; font-size: 12px; font-weight: 400; line-height: 13.2px; display: flex; align-items: center; justify-content: center;">AO</span>
      </div>
    </div>
  </div>
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold mb-2 rounded-top"
      >
        Account
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-bell" /> Updates
        <CBadge color="info" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-envelope-open" /> Messages
        <CBadge color="success" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-task" /> Tasks
        <CBadge color="danger" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-comment-square" /> Comments
        <CBadge color="warning" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold my-2"
      >
        Settings
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-user" /> Profile
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-settings" /> Settings
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-dollar" /> Payments
        <CBadge color="secondary" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-file" /> Projects
        <CBadge color="primary" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem>
        <CIcon icon="cil-shield-alt" /> Lock Account
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-lock-locked" /> Logout
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
}
</script>

<style>
.circle-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
