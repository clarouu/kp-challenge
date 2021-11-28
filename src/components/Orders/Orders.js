import {
    defineComponent
} from "@vue/composition-api";

export default defineComponent({
    name: "Orders",
    components: {
    },
    props: {
        orders: {
            required: true,
            type: Object
        }
    },
    setup(props, ctx) {
        function displayOrder(order) {
            ctx.emit("displayOrder", order);
        }

        return { displayOrder };
    }
});