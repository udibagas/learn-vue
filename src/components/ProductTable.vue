<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Product List ({{ products.length }} items)</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Manage Products</h6>

      <p>Total Stock = {{ totalStock }}</p>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>
              {{
                product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                })
              }}
            </td>
            <td>{{ product.stock }}</td>
            <td
              :class="
                product.status == 'available' ? 'text-success' : 'text-danger'
              "
            >
              {{ product.status }}
            </td>
            <td>
              <Button
                v-if="product.status === 'available'"
                variant="success"
                @click="emit('buy', product.id)"
              >
                Beli
              </Button>

              <Button v-else>Restock</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const { products } = defineProps(["products"]);
const emit = defineEmits(["buy"]);

// hanya dipanggil ketika ada perubahan pada products
const totalStock = computed(() =>
  products.reduce((prev, curr) => prev + curr.stock, 0)
);

// selalu dipanggil ketika re-render
function getTotalStock() {
  return products.reduce((prev, curr) => prev + curr.stock, 0);
}
</script>
