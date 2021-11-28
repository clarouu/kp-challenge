<template>
  <div>
    <h2 class="kp_orders-title">Commandes</h2>
    <div>
      <div
        class="kp_orders-order"
        v-for="order in orders"
        :key="order.order_id"
      >
        <div class="kp_orders-order_detail">
          <div
            class="kp_orders-order_status kp_orders-order_item"
            :class="'kp_orders-order_status-' + order.order_status.color"
            :title="order.order_status.label"
          ></div>
          <div class="kp_orders-order_item">
            <b>Id de commande</b> : {{ order.order_id }}
          </div>
          <div class="kp_orders-order_item">
            <b>Client</b> : {{ order.customer }}
          </div>
        </div>
        <div class="kp_orders-order_view-detail" @click="displayOrder(order)">
          Voir le détail
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Orders.js" lang="js"></script>
<style src="./Orders.css" lang="css" scoped></style>
