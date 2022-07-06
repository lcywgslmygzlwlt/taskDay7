<template>
  <div>
    <button @click="qname = 'UserInfo'">账号密码填写</button>
    <button @click="qname = 'UserName'">个人信息填写</button>

    <p>下面显示注册组件-动态切换:</p>
    <div style="border: 1px solid red">
      <keep-alive>
        <component :is="qname"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue';
import UserName from '../components/UserName.vue';
export default {
  components: {
    UserInfo,
    UserName,
  },
  data() {
    return {
      qname: 'UserInfo',
    };
  },
};
</script>

<style></style>
