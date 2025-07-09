<template>
  <form @submit.prevent="createProduct" class="w-50 border p-3 shadow rounded">
    <h1>Input Product</h1>
    <div class="mb-3">
      <label for="name" class="form-label">Product Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Product Name"
        v-model="newProduct.name"
      />
    </div>

    <div class="mb-3">
      <label for="price" class="form-label">Product Price</label>
      <input
        type="number"
        class="form-control"
        id="price"
        placeholder="Product Price"
        v-model="newProduct.price"
      />
    </div>

    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <select class="form-select" id="status" v-model="newProduct.status">
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="stock" class="form-label">Product Stock</label>
      <input
        type="number"
        class="form-control"
        id="stock"
        placeholder="Product Stock"
        v-model="newProduct.stock"
        :disabled="newProduct.status === 'unavailable'"
      />
    </div>

    <div class="mb-3">
      <Button type="submit" variant="success">Add Product</Button>
    </div>
  </form>
</template>

<script setup>
import { defineEmits, reactive, watch } from "vue";

const newProduct = reactive({
  id: "",
  name: "",
  price: 0,
  stock: 0,
  status: "available",
});

watch(newProduct, (newValue) => {
  if (newValue.status === "unavailable") {
    newValue.stock = 0; // Reset stock when status is unavailable
  }
});

const emit = defineEmits(["create"]);

function createProduct() {
  const { name, price, stock } = newProduct;
  const product = { id: Date.now(), name, price, stock };

  emit("create", product);
  newProduct.id = "";
  newProduct.name = "";
  newProduct.price = 0;
  newProduct.stock = 0;
}
</script>
