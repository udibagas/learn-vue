<template>
  <div class="container my-4">
    <!-- <ProductForm @create="createProduct" />
    <br />
    <ProductTable :products="products" @buy="buyProduct" /> -->
    <Products />
  </div>
</template>

<script setup>
import ProductForm from "./components/ProductForm.vue";
import ProductTable from "./components/ProductTable.vue";
import Products from "./components/Products.vue";
import { ref } from "vue";

const products = ref([
  { id: 1, name: "Baju", price: 100_000, stock: 10, status: "available" },
  { id: 2, name: "Kaos", price: 80_000, stock: 5, status: "unavailable" },
  { id: 3, name: "Celana", price: 120_000, stock: 8, status: "available" },
]);

function createProduct(product) {
  products.value.push(product);
}

function buyProduct(id) {
  const indexProduct = products.value.findIndex((p) => p.id === id);

  if (indexProduct === -1) {
    console.error("Product not found");
    return;
  }

  products.value[indexProduct].stock--;
}

// export default {
//   // data() {
//   //   return {
//   //     products: [
//   //       { id: 1, name: "Baju", price: 100_000 },
//   //       { id: 2, name: "Kaos", price: 80_000 },
//   //     ],
//   //   };
//   // },

//   setup() {
//     const products = ref([
//       { id: 1, name: "Baju", price: 100_000 },
//       { id: 2, name: "Kaos", price: 80_000 },
//     ]);

//     function createProduct(product) {
//       products.value.push(product);
//     }

//     return {
//       products,
//       createProduct,
//     };
//   },

//   // local registration
//   components: {
//     ProductTable,
//     ProductForm,
//   },

//   // methods: {
//   //   createProduct(product) {
//   //     this.products.push(product);
//   //   },
//   // },
// };
</script>
