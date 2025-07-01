<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue';
import { usePageStore } from '@/stores/page';
import { useErrorStore } from '@/stores/error';
import { projectsQuery } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/projectsColumns';
import type { Projects } from '@/utils/supaQueries';

usePageStore().pageData.title = 'Projects';

const projects = ref<Projects | null>(null);
const getProjects = async () => {
  const { data, error, status } = await projectsQuery;

  if (error) useErrorStore().setError({ error, customCode: status });

  projects.value = data;
};

await getProjects();
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
