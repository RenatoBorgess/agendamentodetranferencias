import { createStore, Store, useStore as vuexUseStore } from "vuex";

export const key = Symbol();

export const store = createStore({
  state: {
    schedules: [],
  },

  mutations: {
    scheduleTransfer(state, data) {
      state.schedules = data;
      console.log(data);
    },
  },

  actions: {
    async listSchedules({ commit, objeto }) {
      // Simulação de chamada HTTP
      // await http.get("/scheduling", objetoRequest)
      //   .then((response) => {
      //     commit("scheduleTransfer", response.data);
      //   });

      // Dados simulados para a demonstração
      const simulatedData = [
        {
            contaDestino: "1234567890",
            valorFinal: "R$ 1.200,00",
            taxaAplicada: "R$ 15,00",
            dataDeTransferencia: "2024-09-10",
            dataDeAgendamento: "2024-09-01",
          },
          {
            contaDestino: "9876543210",
            valorFinal: "R$ 3.000,00",
            taxaAplicada: "R$ 30,00",
            dataDeTransferencia: "2024-09-12",
            dataDeAgendamento: "2024-09-02",
          },
          {
            contaDestino: "1122334455",
            valorFinal: "R$ 850,00",
            taxaAplicada: "R$ 10,00",
            dataDeTransferencia: "2024-09-15",
            dataDeAgendamento: "2024-09-03",
          },
      ];

      commit("scheduleTransfer", simulatedData);
    },
  },
});

export function useStore() {
  return vuexUseStore(key);
}
