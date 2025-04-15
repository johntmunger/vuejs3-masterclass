<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';

const projects = ref();
(async () => {
  const { data, error } = await supabase.from('projects').select();

  if (error) console.log(error);

  projects.value = data;

  console.log('projects: ', projects.value);
})();
</script>

<template lang="">
  <div>
    <h1>Projects page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
    {{ projects }}
  </div>
</template>
