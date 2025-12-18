<template>
  <hr />
  <section>
    <h2 class="text-4xl">
      Counter with Composable
      <span class="bg-blue-700 text-white p-2">{{ clicks }}</span>
    </h2>

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

interface Props {
  value: number
}

const props = defineProps<Props>()

const { count, square, clicks } = useCounter(props.value)
</script>
