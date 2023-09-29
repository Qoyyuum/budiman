<template>
  <q-page class="q-pa-md">
    <ChatWindowComponent></ChatWindowComponent>
    <ChatInputComponent></ChatInputComponent>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ChatWindowComponent from "components/ChatWindowComponent.vue";
import ChatInputComponent from "components/ChatInputComponent.vue";

export default defineComponent({
  components: {
    ChatWindowComponent,
    ChatInputComponent,
  },
  name: "IndexPage",
});
</script>
