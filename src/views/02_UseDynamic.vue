<template>
  <div>
    <button>账号密码填写</button>
    <button>个人信息填写</button>

    <p>下面显示注册组件-动态切换:</p>
    <div style="border: 1px solid red">
      <keep-alive exclude="UserInfo">
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// keep-alvue 内置组件 缓存组建的作用
// keep-aliver 需要缓存的组件

import UserInfo from '../components/01/UserInfo.vue'
import UserName from '../components/01/UserName.vue'
export default {
  data() {
    return { comName: 'UserName' }
  },
  components: {
    UserInfo,
    UserName,
  },
}
</script>

<style></style>
