<template>
  <div class="d-flex gap-5">
    <ProductForm />
    <div class="flex-grow-1">
      <ProductTable :products="[]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductForm from "../components/ProductForm.vue";
import ProductTable from "../components/ProductTable.vue";
</script>
