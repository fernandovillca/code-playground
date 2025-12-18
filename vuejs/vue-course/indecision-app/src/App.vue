<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <hr />
  <!-- :value="5" -> es lo mismo que -> v-bind:value="5" -->
  <MyCounter :value="1" />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3" />
  <MyCounterComposable :value="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue' // al importar se le puede poner cualquier nombre
import MyCounterScript from './components/MyCounterScript.vue'
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue'
import MyCounterComposable from './components/MyCounterComposable.vue'
</script>

<style scoped>
/* el scoped hace que los estilos solo apliquen a este componente */
</style>
