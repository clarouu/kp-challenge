<template>
  <div class="kp_side-menu">
    <div class="kp-side-menu_header">
      <img class="kp-side-menu_logo" :src="logo" />
      <div class="kp-side-menu_title">K-rGo</div>
    </div>
    <div class="kp-side-menu_items">
      <div
        class="kp-side-menu_item"
        :class="activeItem === 'orders' ? 'kp-side-menu_active-item' : ''"
        @click="displayOrders"
      >
        Commandes
      </div>
      <div
        class="kp-side-menu_item"
        :class="activeItem === 'packages' ? 'kp-side-menu_active-item' : ''"
        @click="displayPackages"
      >
        Colis
      </div>
    </div>
  </div>
</template>

<script src="./SideMenu.js" lang="js"></script>
<style src="./SideMenu.css" lang="css" scoped></style>
