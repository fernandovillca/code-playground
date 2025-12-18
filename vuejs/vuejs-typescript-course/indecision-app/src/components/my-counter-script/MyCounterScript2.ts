import { computed, defineComponent, ref } from 'vue'
// NOTE : USAMOS EL DEFINE COMPONENT

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const count = ref(props.value)
    const square = computed(() => count.value * count.value)

    return {
      count,
      square,
    }
  },
})
