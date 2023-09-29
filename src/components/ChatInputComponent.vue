<template>
  <q-input
    standout
    bottom-slots
    v-model="text"
    label="Ask Budiman something"
    counter
    :dense="dense"
  >
    <template v-slot:append>
      <q-icon
        v-if="SpeechRecognition.available()"
        name="microphone"
        @click="speechInput"
        class="cursor-pointer"
      />
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
import { useChatStore } from "stores/ChatStore";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";

const storeChat = useChatStore();

export default {
  name: "ChatInputComponent",
  setup() {
    SpeechRecognition.available();
    const speechInput = () => {
      SpeechRecognition.start({
        language: "en-US",
        maxResults: 2,
        prompt: "Say something",
        partialResults: true,
        popup: true,
      });
    };

    let text = ref("");
    const sendMessage = () => {
      storeChat.sendingMessage(text.value);
      text.value = "";
    };
    return {
      text,
      speechInput,
      sendMessage,
      dense: ref(false),
    };
  },
};
</script>
