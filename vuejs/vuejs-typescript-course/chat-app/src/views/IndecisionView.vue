<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox @send-message="onMessage" />
    <!-- o @send-message="onMessage($event)"  -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hello!',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No!!!',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/27-8befe9bcaeb66f865dd3ecdcf8821f51.gif',
  },
])

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    message: text,
    itsMine: true,
  })
}
</script>
