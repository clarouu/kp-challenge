import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    props: {
        packages: {
            required: true,
            type: Array
        }
    },
    setup() {

        return {};
    },
});