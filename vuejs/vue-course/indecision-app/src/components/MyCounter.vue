<template>
  <hr />
  <section>
    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ square }}</h3>
  </section>

  <div>
    <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="count++">
      Increment (+1)
    </button>
    <button class="bg-red-500 text-white px-4 py-2 rounded" @click="count--">Decrement (-1)</button>
  </div>

  <hr />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
// NOTE : Primera forma de definir las props
// const props = defineProps({
//   value: {
//     type: Number,
//     required: true,
//   },
// })

/**
 * NOTE : Segunda forma de definir las props usando TypeScript
 */
// const props = defineProps<{
//   // es lo mismo que el de arriba, solo que este codigo es mas ligero
//   // todo lo que esta dentro de las llaves es el tipo de dato
//   // para que el valor sea opcional se le pone un signo de interrogacion `value?: number`
//   value: number
// }>()

/**
 * NOTE : Tercera forma de definir las props usando una interface de TypeScript
 */
// si no queremos definir las props de esa manera tambien podemos crearos una interface
interface Props {
  value: number
}

const props = defineProps<Props>()

const count = ref(props.value)

const square = computed(() => count.value * count.value)
</script>

<style scoped>
/* el scoped hace que los estilos solo apliquen a este componente */
hr {
  margin: 20px 0;
  color: #121fd6;
}
</style>
