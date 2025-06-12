<script setup lang="ts">

import DataTable from '@/components/ui/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page';
import { tasksWithProjectsQuery } from '@/utils/supaQueries';
import type { TasksWithProjects } from '@/utils/supaQueries';
import { columns } from '@/utils/tableColumns/tasksColumns';

usePageStore().pageData.title = 'My Tasks'


const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)

  tasks.value = data;
  console.log(data);
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
