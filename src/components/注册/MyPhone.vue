<template>
  <div>
    <h3>手机号</h3>
    <input type="text" placeholder="输入手机号码" /><br />
    <input type="text" placeholder="输入验证码" /><button>发送验证码</button>
    <h3>登录密码</h3>
    <input type="text" placeholder="请输入登录密码" /><br />
    <input type="text" placeholder="再次输入登录密码" />
    <h3>邀请码(选填)</h3>
    <input type="text" placeholder="输入客户经理邀请码" />
  </div>
</template>

<script>
export default {
  created() {
    console.log('created--MyPhone')
  },
  destroyed() {
    console.log('destroyed--MyPhone')
  },
  activated() {
    //激活
    console.log('activated--MyPhone')
  },
  deactivated() {
    //失去 激活
    console.log('deactivated--MyPhone')
  },
}
</script>

<style></style>
