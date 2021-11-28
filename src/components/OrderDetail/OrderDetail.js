import {
    defineComponent
} from "@vue/composition-api";
import cancel from "../../assets/cancel.png";
import checked from "../../assets/checked.png";

export default defineComponent({
    name: "Order",
    components: {
    },
    props: {
        order: {
            required: true,
            type: Object
        }
    },
    setup() {
        return { checked, cancel };
    }
});