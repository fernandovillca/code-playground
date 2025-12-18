<template>
  <hr />
  <section>
    <h3>Counter {{ count }}</h3>
    <h3>Square: {{ square }}</h3>
  </section>

  <div>
    <button @click="count++">Increment (+1)</button>
    <button @click="count--">Decrement (-1)</button>
  </div>

  <hr />
</template>

<script lang="ts" src="./MyCounterScript2"></script>

<style scoped>
/* el scoped hace que los estilos solo apliquen a este componente */
hr {
  margin: 20px 0;
  color: #121fd6;
}
</style>
