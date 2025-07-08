<template>
  <div class="w-50 border p-3 shadow rounded">
    <h1>Product List</h1>
    {{ apa }}

    <ul class="list-group">
      <!-- list rendering -->
      <li class="list-group-item" v-for="product in products">
        <strong>{{ product.name }}</strong>
        -
        <span class="text-muted">
          {{
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            })
          }}
        </span>

        <Button variant="danger">Hapus</Button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["products", "apa"],
};
</script>
