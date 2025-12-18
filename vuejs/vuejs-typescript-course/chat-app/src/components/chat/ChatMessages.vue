<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!--
        # NOTE: EL binding v-bind="message" es equivalente a:
        :message="message.message"
        :itsMine="message.itsMine"
        :image="message.image"
        # las propiedades del objeto se "desempaquetan" y se pasan como props individuales
        # y las props que no son requeridas se ignoran
      -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBubble from './ChatBubble.vue'

interface Props {
  messages: ChatMessage[]
}

defineProps<Props>()
</script>
