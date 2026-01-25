<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductAmount',
  props: {
    amount: { type: Number, required: true },
  },
  emits: ['update:amount'],
})
</script>

<template>
  <v-number-input :model-value="amount" @update:model-value="$emit('update:amount', $event ?? 1)" :min="1" :max="10"
    density="comfortable" controlVariant="split" variant="outlined" label="Množstvo"></v-number-input>
</template>