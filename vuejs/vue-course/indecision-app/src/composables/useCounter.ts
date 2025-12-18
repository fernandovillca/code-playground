import { computed, ref } from 'vue'

export const useCounter = () => {
  const count = ref(5)
  const square = computed(() => count.value * count.value)

  return {
    count,
    square,
  }
}
