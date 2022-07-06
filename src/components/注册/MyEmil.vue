<template>
  <div>
    <div>
      <h3>邮箱</h3>
      <input type="text" placeholder="请输入邮箱" />
      <h3>登录密码</h3>
      <input type="text" placeholder="请输入登录密码" /><br />
      <input type="text" placeholder="再次输入登录密码" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('created--MyEmil')
  },
  destroyed() {
    console.log('destroyed--MyEmil')
  },
  activated() {
    //激活
    console.log('activated--MyEmil')
  },
  deactivated() {
    //失去 激活
    console.log('deactivated--MyEmil')
  },
}
</script>

<style></style>
