<template>
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
        <!-- <router-link
          class="btn btn-outline-info"
          :to="{
            name: 'product-detail',
            params: { id: product.id },
          }"
        >
          Show Detail
        </router-link> -->
        <button class="btn btn-outline-info" @click="showDetail(product.id)">
          Show Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();

function showDetail(productId) {
  router.push(`/products/${productId}`);
}

const products = ref([]);

onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products.value = json;
    });
});
</script>
