<template>
  <h1>Products</h1>
  <div class="d-flex flex-wrap gap-5">
    <div
      class="card shadow"
      style="width: 18rem"
      v-for="product in products"
      :key="product.id"
    >
      <div class="card-body">
        <img
          :src="product.image"
          class="card-img-top mb-3"
          style="height: 150px; object-fit: contain"
          :alt="product.title"
        />
        <h5 class="card-title text-truncate">{{ product.title }}</h5>
        <p class="card-text">
          <span class="badge text-bg-info">{{ product.category }}</span>
        </p>

        <h4>${{ product.price }}</h4>

        <span
          v-for="r in new Array(Math.ceil(product.rating.rate))"
          class="me-1 text-sm"
        >
          ⭐️
        </span>
      </div>
      <div class="card-body d-grid gap-2">
        <a href="#" class="btn btn-outline-info">Buy</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([
  // {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   rating: {
  //     rate: 3.9,
  //     count: 120,
  //   },
  // },
  // {
  //   id: 2,
  //   title: "Mens Casual Premium Slim Fit T-Shirts ",
  //   price: 22.3,
  //   description:
  //     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //   category: "men's clothing",
  //   image:
  //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //   rating: {
  //     rate: 4.1,
  //     count: 259,
  //   },
  // },
]);

onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products.value = json;
    });
});
</script>
