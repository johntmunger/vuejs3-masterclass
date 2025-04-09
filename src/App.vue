<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';

//src/App.vue

console.log(supabase);
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
