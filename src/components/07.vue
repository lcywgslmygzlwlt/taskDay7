<template>
  <div id="isAbout">
    <UseTab>
      <template v-slot:id="scope">
        <input type="text" v-model="scope.row.id" />
      </template>
      <template v-slot:name="scope">
        <input type="text" v-model="scope.row.name" />
      </template>
      <template v-slot:age="scope">
        <input type="text" v-model="scope.row.age" />
      </template>
      <template v-slot:tx="scope">
        <div v-if="scope.row.type == 0">
          <a :href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
        </div>
        <div v-if="scope.row.type == 1">
          <img :src="scope.row.headImgUrl" alt="" />
        </div>
        <div v-if="scope.row.type == 2">
          {{ scope.row.headImgUrl }}
        </div>
      </template>
    </UseTab>
  </div>
</template>

<script>
import UseTab from '../components/07_UseTabley.vue';
export default {
  name: 'isAbout',
  components: {
    UseTab,
  },
};
</script>
