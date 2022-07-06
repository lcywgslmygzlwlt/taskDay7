<template>
  <div>
    <button>手机注册</button>
    <button>邮箱注册</button>
    <h3>选择所在地区(实名认证主体所在地)？</h3>
    <input type="checkbox" name="" id="" />中国大陆
    <input type="checkbox" name="" id="" />中国香港
    <keep-alive exclude="MyPhone">
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import MyPhone from '../components/注册/MyPhone.vue'
import MyEmil from '../components/注册/MyEmil.vue'
export default {
  data() {
    return {
      comName: 'MyPhone',
    }
  },
  components: {
    MyPhone,
    MyEmil,
  },
}
</script>

<style></style>
