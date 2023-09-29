<template>
  <div style="width: 100%; max-width: 800px">
    <div v-for="c in chat" :key="c.id">
      <q-chat-message
        :name="[c.name]"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="[c.message]"
        :sent="c.sent"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useChatStore } from "stores/ChatStore";

const storeChat = useChatStore();

export default {
  name: "ChatWindowComponent",
  setup() {
    // let chat = ref([
    //   {
    //     id: 1,
    //     name: "me",
    //     message: "hey, how are you?",
    //     sent: true,
    //   },
    //   {
    //     id: 2,
    //     name: "Budiman",
    //     message: "Doing fine, how are you?",
    //     sent: false,
    //   },
    // ]);
    return {
      // chat,
      chat: storeChat.chat,
    };
  },
};
</script>
