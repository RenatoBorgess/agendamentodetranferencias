import { createStore, Store, useStore as vuexUseStore } from "vuex";
import  axios  from 'axios'
import httpClient from '../http/index'
export const key = Symbol();


export const store = createStore({
  state: {
    schedules: [],
  },


  mutations: {
    listTransfers(state, data) {
      state.schedules = data;
      console.log(data);
    },
  },

  actions: {
    async listSchedules({ commit }) {
      
      await httpClient.get("/scheduling")
        .then((response) => {
          console.log("Get response:", response)
          commit("listTransfers", response.data);
        });
    },
    
  async schedule({ commit }, payload) {
    await httpClient.post("/scheduling", payload, {headers: {
      'Content-Type': 'application/json'
    }
  })
      .then((response) => {
      console.log("Post response:", response);
    })
    .catch((error) => {
      console.error("Error sending payload:", error);
    })
  }
}
});

export function useStore() {
  return vuexUseStore(key);
}
