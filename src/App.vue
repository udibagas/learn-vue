<template>
  <div class="container mt-5 d-flex gap-4">
    <ProductForm @create="createProduct" />
    <ProductList :products="products" apa="Apa ni?" />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ProductForm from "./components/ProductForm.vue";

export default {
  data() {
    return {
      products: [
        { id: 1, name: "Baju", price: 100_000 },
        { id: 2, name: "Kaos", price: 80_000 },
      ],
    };
  },

  // local registration
  components: {
    ProductList,
    ProductForm,
  },

  methods: {
    createProduct(product) {
      this.products.push(product);
    },
  },
};
</script>
