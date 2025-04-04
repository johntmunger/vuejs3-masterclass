<script setup lang="ts"></script>

<template lang="">
  <div>
    <h1>Projects page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>
