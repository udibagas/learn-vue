<template>
  <form @submit.prevent="login" class="w-50 mx-auto border p-3 shadow rounded">
    <h1>Login</h1>
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="username"
        placeholder="Enter your username"
        v-model="username"
      />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>

    <div class="d-flex gap-3">
      <button type="submit" class="btn btn-primary">Login</button>
      <button type="reset" class="btn btn-secondary">Reset</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");

const router = useRouter();

function login() {
  const validUsers = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
  ];

  const isValid = validUsers.find(
    (u) => u.username == username.value && u.password == password.value
  );

  if (isValid) {
    localStorage.setItem("token", "valid-token");
    router.push({ name: "admin" });
  } else {
    alert("Invalid username or password");
  }
}
</script>
