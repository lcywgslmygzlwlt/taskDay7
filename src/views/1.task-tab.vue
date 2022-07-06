<template>
  <div id="app">
    <a class="shouji" @click.prevent="choice = 'Mailbox'">手机注册</a>
    <a class="youx" @click.prevent="choice = 'Mobile'">邮箱注册</a>
    <div>
      <keep-alive
        ><component :is="choice">
          <template v-slot:shouji="scope">
            <input v-model="scope.list" placeholder="请输入手机号" />
          </template>
        </component>
        <component :is="choice1">
          <template v-slot:youx="scope">
            <input v-model="scope.list" placeholder="请输入手机号" />
          </template>
        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Mailbox from "../components/1.作业tab切换/MailboxRegistration.vue";
import Mobile from "../components/1.作业tab切换/MobileRegistration.vue";
export default {
  data() {
    return {
      choice: "Mailbox",
      choice1: "Mobile",
    };
  },
  components: {
    Mailbox,
    Mobile,
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 300px;
  height: 330px;
  background-color: pink;
  margin: 0 auto;
  padding-top: 5px;
  text-align: center;
  a {
    text-decoration: none;
  }
  .shouji {
    padding-right: 40px;
  }
}
</style>
