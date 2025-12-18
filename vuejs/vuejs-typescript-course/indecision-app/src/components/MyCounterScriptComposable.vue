<template>
  <hr />
  <section>
    <h2>Counter with Composable 2</h2>

    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ square }}</h3>
  </section>

  <div>
    <button @click="count++">Increment (+1)</button>
    <button @click="count--">Decrement (-1)</button>
  </div>

  <hr />
</template>

<script lang="ts">
import { useCounter } from '../composables/useCounter'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { count, square } = useCounter(props.value)

    return {
      count,
      square,
    }
  },
})
</script>

<style scoped>
/* el scoped hace que los estilos solo apliquen a este componente */
hr {
  margin: 20px 0;
  color: #121fd6;
}
</style>
