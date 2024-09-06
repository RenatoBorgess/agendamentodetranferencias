<script setup>
import { defineEmits, defineProps } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const emit = defineEmits(['close']);
const props = defineProps({
  showModal: Boolean,
});

function onSchedule() {
  emit('close');
}
</script>

<template>
  <div v-if="showModal" class="modal d-block" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Agendamento</h5>
          <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="origem" class="form-label">Conta Origem</label>
              <input type="text" class="form-control" id="origem">
            </div>
            <div class="mb-3">
              <label for="destino" class="form-label">Conta Destino</label>
              <input type="text" class="form-control" id="destino">
            </div>
            <div class="mb-3">
              <label for="valor" class="form-label">Valor</label>
              <input type="number" class="form-control" id="valor">
            </div>
            <div class="mb-3">
              <label for="data" class="form-label">Data</label>
              <input type="date" class="form-control" id="data">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Fechar</button>
          <button type="button" class="btn btn-primary" @click="onSchedule">Concluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  color: #635d5f;
  display: block;
  background: rgba(0, 0, 0, 0.5);
}

.modal-title {
  color: #635d5f;
}

.btn-primary {
  background: linear-gradient(180deg, #e14a4f 2%, #ca4247 25%, #a8323a 100%);
}
</style>