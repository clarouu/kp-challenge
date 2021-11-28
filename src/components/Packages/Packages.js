import { defineComponent } from "@vue/composition-api";
import cancel from "../../assets/cancel.png";
import checked from "../../assets/checked.png";
import { ref } from "vue";

export default defineComponent({
    props: {
        packages: {
            required: true,
            type: Array
        }
    },
    setup() {
        const orderIdFilter = ref("");
        const orderStateFilter = ref("Tous");

        return { cancel, checked, orderIdFilter, orderStateFilter };
    },
});