<template>
  <div class="app-container">
    <SideMenu
      @displayOrders="contentToDisplay = 'orders'"
      @displayPackages="contentToDisplay = 'packages'"
    />
    <div class="app-content">
      <Orders
        v-if="contentToDisplay === 'orders'"
        :orders="orders"
        @displayOrder="displayOrder"
      />
      <OrderDetail v-if="contentToDisplay === 'order'" :order="order" />
      <Packages v-if="contentToDisplay === 'packages'" :packages="packages" />
    </div>
  </div>
</template>

<script src="./App.js" lang="js"></script>
<style src="./App.css" lang="css"></style>
