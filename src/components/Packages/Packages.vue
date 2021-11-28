<template>
  <div class="kp_packages-main_container">
    <div class="kp_packages-section_title-container">
      <h2 class="kp_packages-title">Mes colis</h2>
    </div>
    <div class="kp_packages">
      <h3 class="kp_packages-section_title">Colis</h3>

      <div class="kp_packages-list">
        <div
          class="kp_packages-container"
          v-for="(currentPackage, index) in packages"
          :key="index"
        >
          <div class="kp_package-container">
            <div><b>Id de la commande</b> : {{ currentPackage.order_id }}</div>
            <div class="kp_packages-status">
              <b>Status de la commande</b> :
              <span
                class="kp_packages_status"
                :class="[
                  'kp_packages_status-' + currentPackage.order_status.color,
                  'kp_packages_status-text_color-' +
                    currentPackage.order_status.text_color,
                ]"
                >{{ currentPackage.order_status.label }}</span
              >
            </div>
            <div><b>Produits</b> :</div>
            <div class="kp_packages-products">
              <div
                v-for="(product, prdIndex) in currentPackage.order_products"
                :key="prdIndex"
                class="kp_package-product"
              >
                <div><b>Nom du produit</b> : {{ product.product_name }}</div>
                <div>
                  <b>Numéro de série</b> :
                  {{ product.product_serial ? product.product_serial : "NA" }}
                </div>
                <div><b>Quantité</b> : {{ product.qty_to_pack }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Packages.js" lang="js"></script>
<style src="./Packages.css" lang="css" scoped></style>
