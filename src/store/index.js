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


      // Dados simulados para a demonstração
  //     const simulatedData = [
  //      {
  //   contaDestino: "1234567890",
  //   valorFinal: "R$ 1.200,00",
  //   taxaAplicada: "R$ 15,00",
  //   dataDeTransferencia: "2024-09-10",
  //   dataDeAgendamento: "2024-09-01",
  // },
  // {
  //   contaDestino: "9876543210",
  //   valorFinal: "R$ 3.000,00",
  //   taxaAplicada: "R$ 30,00",
  //   dataDeTransferencia: "2024-09-12",
  //   dataDeAgendamento: "2024-09-02",
  // },
  // {
  //   contaDestino: "1122334455",
  //   valorFinal: "R$ 850,00",
  //   taxaAplicada: "R$ 10,00",
  //   dataDeTransferencia: "2024-09-15",
  //   dataDeAgendamento: "2024-09-03",
  // },
  //     ];

  //     commit("listTransfers", simulatedData);
  //   },
  
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
//       const response = await axios.post("http://localhost:8080/api/scheduling", scheduleDTO);
//       console.log("Transfer scheduled:", response.data);
      
     
//       commit("listTransfers", response.data);
//     } catch (error) {
//       console.error("Error scheduling transfer:", error);
//     }
//   },
// },
  }
}
});

export function useStore() {
  return vuexUseStore(key);
}
