<template>
  <div>
    <MyTable :arr="list">
      <template v-slot="scope">
        <img :src="scope.row.headImgUrl" alt="" width="40px" />
      </template>
    </MyTable>

    <MyTable :arr="list">
      <template>
        <a href="scope.row.headImgUrl" alt="">{{ scope.row.headImgUrl }}</a>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/06/MyTable.vue'
export default {
  name: 'Code06UseTable',
  components: {
    MyTable,
  },

  data() {
    return {
      
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
