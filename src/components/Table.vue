<script setup lang="ts">
import { ref } from "vue";

const scheduled = ref([
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
]);
</script>

<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped align-middle">
      <thead class="table-dark">
        <tr>
          <th>Conta Destino</th>
          <th>Valor Final</th>
          <th>Taxa Aplicada</th>
          <th>Data de TransferÃªncia</th>
          <th>Data de Agendamento</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in scheduled" :key="index">
          <td>{{ item.contaDestino }}</td>
          <td>{{ item.valorFinal }}</td>
          <td>{{ item.taxaAplicada }}</td>
          <td>{{ item.dataDeTransferencia }}</td>
          <td>{{ item.dataDeAgendamento }}</td>
          <td>
            <button class="btn btn-primary btn-background">Cancelar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  margin-top: 20px;
}

.table th,
.table td {
  vertical-align: middle;
  text-align: center;
}

.table th {
  background-color: #333;
  color: white;
}

.table-hover tbody tr:hover {
  background-color: #f8f9fa;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-responsive {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.btn-background {
  background: linear-gradient(180deg, #e14a4f 2%, #ca4247 25%, #a8323a 100%);
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
}
</style>