import { computed, ref } from 'vue'

// Si se crea la variable fuera de la función, se comparte el estado
const clicks = ref(0)

export const useCounter = (initialValue: number) => {
  const count = ref(initialValue)
  const square = computed(() => count.value * count.value)

  return {
    count,
    square,
    clicks,
  }
}
