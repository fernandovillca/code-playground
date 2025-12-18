<template>
  <hr />
  <section>
    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ square }}</h3>
  </section>

  <div>
    <button class="border-2" @click="count++">Increment (+1)</button>
    <button class="border-2" @click="count--">Decrement (-1)</button>
  </div>

  <hr />
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter'

const { count, square } = useCounter()
// interface Props {
//   value: number
// }

// const props = defineProps<Props>()
//
</script>

<style scoped>
/* el scoped hace que los estilos solo apliquen a este componente */
hr {
  margin: 20px 0;
  color: #121fd6;
}
</style>
