<!-- Home estilizada -->
<script setup lang="ts">
import CardForm from "../components/CardForm.vue";
import Table from "../components/Table.vue";
import { ref } from "vue";
const showForm = ref(false);
</script>

<template>
  <main class="container w-75">
    <div class="d-flex justify-content-between align-items-center my-4">
      <h2>Agendamentos Recentes</h2>
      <button
        class="btn btn-lg text-white btn-background"
        @click="showForm = true"
      >
        <span>Agendar</span>
      </button>
    </div>
    <Table />
    <CardForm :showModal="showForm" @close="showForm = false" />
  </main>
</template>

<style scoped>
.btn-background {
  background: linear-gradient(180deg, #e14a4f 2%, #ca4247 25%, #a8323a 100%);
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
}

.btn-background:hover {
  background: linear-gradient(180deg, #ca4247 2%, #a8323a 100%);
}
</style>