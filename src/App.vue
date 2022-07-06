<template>
  <div>
    <h1>1. 动态dynamic组件使用</h1>
    <component :is="comName"></component>
    <!-- component vue的内置组件 -->
    <!-- is 属性里放的是 即将渲染在这一块 的组件名 -->
    <hr />
    <h1>2. 组件缓存</h1>
    <UserDynamics1></UserDynamics1>
    <hr />
    <h1>3. 组件-插槽</h1>
    <UseSlot></UseSlot>
    <hr />
    <h1>4. 组件-具名插槽</h1>
    <UseSlot1></UseSlot1>
    <hr />
    <h1>5. 组件-作用域插槽</h1>
    <UseSlot2></UseSlot2>
    <hr />
    <h1>6. 作用域插槽-使用场景</h1>
    <p>组件内标签可以随意定义和数据使用</p>
    <UseTable></UseTable>
    <hr />
    <h1>7. 自定义指令</h1>
    <UseTable1>
      <template v-slot:age="scope">
        <input v-model="scope.row.age" />
      </template>
      <template v-slot:toux="scope">
        <img :src="scope.row.headImgUrl" alt="" />
      </template>
    </UseTable1>
  </div>
</template>

<script>
// 引入组件
import MyTest from './components/01.compent.vue'
import UserDynamics from './views/01_UseDynamic.vue'
import UserDynamics1 from './views/02_UseDynamic.vue'
// import UseSlot from './views/03_UseSlot.vue'
// import UseSlot1 from './views/04_UseSlot.vue'
import UseSlot2 from './views/05_UseSlot.vue'
import UseTable from './views/06_UseTable.vue'
import UseTable1 from './views/07_UseTable.vue'
export default {
  data() {
    return {
      comName: 'MyTest',
    }
  },
  components: {
    MyTest,
    UserDynamics,
    UserDynamics1,
    UseSlot,
    UseSlot1,
    UseSlot2,
    UseTable,
    UseTable1,
  },
}
</script>

<style></style>
