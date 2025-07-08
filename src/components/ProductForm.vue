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
      <Button type="submit" variant="success">Add Product</Button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newProduct: { id: "", name: "", price: 0 },
    };
  },

  methods: {
    createProduct() {
      const product = {
        id: Date.now(),
        name: this.newProduct.name,
        price: this.newProduct.price,
      };

      this.$emit("create", product);
      this.newProduct = { id: "", name: "", price: 0 };
    },
  },
};
</script>
