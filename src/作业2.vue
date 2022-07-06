<template>
  <MyList1>
    <template v-slot:name="spocn">
      <input type="text" v-model="spocn.row.name" />
    </template>
    <template v-slot:age="spocn">
      <input type="number" v-model="spocn.row.age" />
    </template>
    <template v-slot:tou="spocn">
      <div v-if="spocn.row.type == 0">
        <a :href="spocn.row.headImgUrl">{{ spocn.row.headImgUrl }}</a>
      </div>
      <div v-if="spocn.row.type == 1">
        <img :src="spocn.row.headImgUrl" alt="" />
      </div>
      <div v-if="spocn.row.type == 2">
        {{ spocn.row.headImgUrl }}
      </div>
    </template>
    <template v-slot:zz="spocn">
      <input v-model="spocn.row.type" />
    </template>
  </MyList1>
</template>

<script>
import MyList1 from './components/MyList1.vue';

export default {
  data() {
    return {};
  },
  components: {
    MyList1,
  },
};
</script>

<style></style>
