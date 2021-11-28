import { defineComponent } from "@vue/composition-api";
import { ref } from "vue";
import Orders from "./components/Orders/Orders.vue";
import OrderDetail from "./components/OrderDetail/OrderDetail.vue";
import Packages from "./components/Packages/Packages.vue";
import SideMenu from "./components/SideMenu/SideMenu.vue";

export default defineComponent({
    name: "App",
    components: {
        Orders,
        SideMenu,
        OrderDetail,
        Packages,
    },
    setup() {
        let contentToDisplay = ref("orders");
        let order = ref(null);

        const orders = [
            {
                order_status: { 'label': 'Livré', 'color': 'green', 'text_color': 'white' },
                order_id: 'KP-12343',
                customer: 'JPB-Système',
                qty_to_pack: 6,
                qty_packed: 6,
                qty_package: 1,
                order_products: [
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.00',
                        product_serial: 'KP.VBE.A003.00.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAB',
                        product_package: 1,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.NTC.A003.00',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.NTC.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },]
            },
            {
                order_status: { 'label': 'Expédiée', 'color': 'indigo', 'text_color': 'white' },
                order_id: 'KP-12344',
                customer: 'JPB-Système',
                qty_to_pack: 6,
                qty_packed: 6,
                qty_package: 1,
                order_products: [
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.00',
                        product_serial: 'KP.VBE.A003.00.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAB',
                        product_package: 1,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.NTC.A003.00',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.NTC.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },]
            },
            {
                order_status: { 'label': 'En préparation', 'color': 'blue', 'text_color': 'white' },
                order_id: 'KP-12345',
                customer: 'JPB-Système',
                qty_to_pack: 6,
                qty_packed: 1,
                qty_package: 1,
                order_products: [
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.00',
                        product_serial: 'KP.VBE.A003.00.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 1
                    },
                    {
                        product_state: true,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAB',
                        product_package: 1,
                        qty_to_pack: 1
                    },
                    {
                        product_state: false,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },
                    {
                        product_state: false,
                        product_name: 'KP.NTC.A003.00',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },
                    {
                        product_state: false,
                        product_name: 'KP.NTC.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 1
                    },]
            },
            {
                order_status: { 'label': 'En attente', 'color': 'amber', 'text_color': 'black' },
                order_id: 'KP-12346',
                customer: 'KeyProd',
                qty_to_pack: 12,
                qty_packed: 0,
                qty_package: 0,
                order_products: [
                    {
                        product_state: false,
                        product_name: 'KP.VBE.A003.00',
                        product_serial: 'KP.VBE.A003.00.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 2
                    },
                    {
                        product_state: false,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAA',
                        product_package: 0,
                        qty_to_pack: 2
                    },
                    {
                        product_state: false,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: 'KP.VBE.A003.01.AAAAAB',
                        product_package: 1,
                        qty_to_pack: 2
                    },
                    {
                        product_state: false,
                        product_name: 'KP.VBE.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 2
                    },
                    {
                        product_state: false,
                        product_name: 'KP.NTC.A003.00',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 2
                    },
                    {
                        product_state: false,
                        product_name: 'KP.NTC.A003.01',
                        product_serial: null,
                        product_package: null,
                        qty_to_pack: 2
                    },]
            },
        ];

        const ordersInProgress = orders.filter((order) => order.order_status.label !== "Livré" && order.order_status.label !== "Expédiée");

        const packages = [{
            order_id: 'KP-12343',
            order_status: { 'label': 'Livré', 'color': 'green', 'text_color': 'white' },
            order_products: [{
                product_name: 'KP.VBE.A003.00',
                product_serial: 'KP.VBE.A003.00.AAAAAA',
                qty_to_pack: 1
            }, {
                product_name: 'KP.VBE.A003.01',
                product_serial: 'KP.VBE.A003.01.AAAAAA',
                qty_to_pack: 1
            }, {
                product_name: 'KP.VBE.A003.01',
                product_serial: 'KP.VBE.A003.01.AAAAAB',
                qty_to_pack: 1
            }, {
                product_name: 'KP.VBE.A003.01',
                product_serial: null,
                qty_to_pack: 1
            }, {
                product_name: 'KP.NTC.A003.00',
                product_serial: null,
                qty_to_pack: 1
            }, {
                product_name: 'KP.NTC.A003.01',
                product_serial: null,
                qty_to_pack: 1
            }]
        },
        {
            order_id: 'KP-12344',
            order_status: { 'label': 'Expédiée', 'color': 'indigo', 'text_color': 'white' },
            order_products: [{
                product_name: 'KP.VBE.A003.00',
                product_serial: 'KP.VBE.A003.00.AAAAAA',
                qty_to_pack: 1
            }, {
                product_name: 'KP.VBE.A003.01',
                product_serial: 'KP.VBE.A003.01.AAAAAA',
                qty_to_pack: 1
            }, {
                product_name: 'KP.VBE.A003.01',
                product_serial: 'KP.VBE.A003.01.AAAAAB',
                qty_to_pack: 1
            }, {
                product_name: 'KP.VBE.A003.01',
                product_serial: null,
                qty_to_pack: 1
            }, {
                product_name: 'KP.NTC.A003.00',
                product_serial: null,
                qty_to_pack: 1
            }, {
                product_name: 'KP.NTC.A003.01',
                product_serial: null,
                qty_to_pack: 1
            }]
        }];

        function displayOrder(orderToDisplay) {
            contentToDisplay.value = "order";
            order.value = orderToDisplay;
        }

        return { contentToDisplay, order, orders, packages, ordersInProgress, displayOrder };
    },
});