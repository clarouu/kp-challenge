import { defineComponent } from "@vue/composition-api";
import { ref } from "vue";
import logo from "../../assets/keyProdLogo.png";

export default defineComponent({
    setup(props, ctx) {
        const activeItem = ref("orders");

        function displayOrders() {
            activeItem.value = "orders";
            ctx.emit("displayOrders");
        }

        function displayPackages() {
            activeItem.value = "packages";
            ctx.emit("displayPackages");
        }

        return { logo, activeItem, displayOrders, displayPackages };
    },
});