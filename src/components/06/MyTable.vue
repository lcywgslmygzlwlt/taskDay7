<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(obj, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <!-- {{item.headImgUrl}} -->
            <!-- <img :src="item.headImgUrl" alt="" /> -->
            <slot :row="obj"></slot>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Code06UseTable',

  data() {
    return {
      list: [
        {
          name: '小传同学',
          age: 18,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg',
        },
        {
          name: '小黑同学',
          age: 25,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg',
        },
        {
          name: '智慧同学',
          age: 21,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg',
        },
      ],
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
