<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';

(async () => {
  const { data, error } = await supabase.from('projects').select();

  if (error) console.log(error);

  console.log('Projects: ', data);
})();
</script>

<template lang="">
  <div>
    <h1>Projects page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>
