<template>
  <div>
    <h2 class="kp_order-title">Commande : {{ order.order_id }}</h2>
    <div>
      <h3 class="kp_order-section_title">Résumé</h3>
      <div class="kp_order-section">
        <div>
          <b>Status</b> :
          <span
            class="kp_order_status"
            :class="[
              'kp_order_status-' + order.order_status.color,
              'kp_order_status-text_color-' + order.order_status.text_color,
            ]"
            >{{ order.order_status.label }}</span
          >
        </div>
        <div><b>Client</b> : {{ order.customer }}</div>
      </div>
      <div class="kp_order-section">
        <div><b>Nombre de produits</b> : {{ order.qty_to_pack }}</div>
        <div><b>Nombre de produits emballés</b> : {{ order.qty_packed }}</div>
        <div><b>Nombre de colis</b> : {{ order.qty_package }}</div>
      </div>
      <h3 class="kp_order-section_title">Produits à emballer</h3>
      <div class="kp_order-section kp_order-product_container">
        <div v-for="(product, index) in order.order_products" :key="index">
          <div class="kp_order-product">
            <div><b>Nom du produit</b> : {{ product.product_name }}</div>
            <div>
              <b>Numéro de série</b>: {{ product.product_serial || "NA" }}
            </div>
            <div><b>Nombre de produits à emballer</b> : {{ product.qty_to_pack }}</div>
            <div class="kp_order-product_state">
              <img :src="product.product_state ? checked : cancel" />
              <span>
                {{ product.product_state ? "Ajouté" : "À ajouter" }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./OrderDetail.js" lang="js"></script>
<style src="./OrderDetail.css" scoped></style>
