<template>
  <div>
    <task>
      <template v-slot:id="scope">
        <input v-model="scope.row.id" />
      </template>
      <template v-slot:namea="scope">
        <input v-model="scope.row.name" />
      </template>
      <template v-slot:age="scope">
        <input v-model="scope.row.age" />
      </template>
      <template v-slot:toux="scope">
        <div v-if="scope.row.type == 0">
          <a :href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
        </div>
        <div v-else-if="scope.row.type == 1">
          <img style="width: 100px" :src="scope.row.headImgUrl" alt="" />
        </div>
        <div v-else-if="scope.row.type == 2">
          <a>{{ scope.row.headImgUrl }}</a>
        </div>
      </template>
    </task>
  </div>
</template>

<script>
import task from "../components/2.表单/task2.vue";
export default {
  components: {
    task,
  },
};
</script>

<style></style>
