<template>
  <div v-if="!product">Loading...</div>

  <div v-else class="card shadow p-5">
    <div class="card-body d-flex gap-5">
      <div class="flex-shrink-1">
        <img
          :src="product.image"
          class="card-img-top mb-3"
          style="width: 300px; object-fit: contain"
          :alt="product.title"
        />
      </div>

      <div class="flex-grow-1">
        <h1 class="card-title">{{ product.title }}</h1>
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

        <p class="my-4">{{ product.description }}</p>

        <a href="#" class="btn btn-outline-info">Buy</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { id } = route.params;
const product = ref(null);

onMounted(() => {
  fetch("https://fakestoreapi.com/products/" + id)
    .then((res) => res.json())
    .then((json) => {
      product.value = json;
    });
});
</script>
