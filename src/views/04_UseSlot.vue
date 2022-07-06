<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <template v-slot:title>
          <h4>芙蓉楼送辛渐</h4>
        </template>
        <template v-slot:content>
        <p>chuan</p>
          <span>我是内容</span>
        </template>
      </Pannel>

    </div>
  </div>
</template>

<script>
import Pannel from '../components/04/Pannel';
export default {
  components: {
    Pannel,
  },
};
</script>
