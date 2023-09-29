import { defineStore } from "pinia";
import axios from "axios";

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

  actions: {
    sendingMessage(text) {
      console.log("sending message");
      console.log(text);
      this.chat.push({
        id: this.chat.length + 1,
        name: "me",
        message: text,
        sent: true,
      });

      let data = JSON.stringify({
        prompt: text,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://q-dellxps13.bleak-atlas.ts.net/v1/query",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.chat.push({
            id: this.chat.length + 1,
            name: "Budiman",
            message: response.text,
            sent: false,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
