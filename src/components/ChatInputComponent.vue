<template>
  <q-input
    bottom-slots
    v-model="text"
    label="Ask Budiman something"
    counter
    :dense="dense"
  >
    <template v-slot:append>
      <q-icon
        v-if="text !== ''"
        name="close"
        @click="text = ''"
        class="cursor-pointer"
      />
    </template>

    <template v-slot:after>
      <q-btn round dense flat icon="send" @click="sendMessage" />
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";
import { useChatStore } from "store/ChatStore";

const storeChat = useChatStore();

export default {
  name: "ChatInputComponent",
  setup() {
    let text = ref("");
    const sendMessage = () => {
      console.log("sending message");
      console.log(text.value);
      text.value = "";
    };
    return {
      text,
      sendMessage,
      dense: ref(false),
    };
  },
};
</script>
