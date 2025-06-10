<script setup lang="ts">

</script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense>
        <Component v-if="Component" :is="Component" :key="route.name"></Component>
        <template #fallback>
          <span>Loading ...</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
