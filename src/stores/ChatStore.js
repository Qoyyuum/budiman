import { defineStore } from "pinia";

export const useChatStore = defineStore("chatMessages", {
  state: () => ({
    chat: [
      {
        id: 1,
        name: "me",
        message: "hey, how are you?",
        sent: true,
      },
      {
        id: 2,
        name: "Budiman",
        message: "Doing fine, how are you?",
        sent: false,
      },
    ],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      console.log("sending message");
      console.log(text.value);
      this.chat.push(text.value);
      text.value = "";
    },
  },
});
