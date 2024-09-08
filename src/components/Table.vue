<script setup lang="ts">
import { ref } from "vue";
import { store, useStore } from "../store"
import { computed, onMounted } from 'vue';

const store = useStore();

const data = computed(() => store.state.schedules);

onMounted(() => {
  store.dispatch('listSchedules');
});
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
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.originAccount }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.fee }}</td>
          <td>{{ item.dateOfTransfer }}</td>
          <td>{{ item.dateOfSchedule }}</td>
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