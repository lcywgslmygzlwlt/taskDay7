<template>
  <div class="id">
    <van-button type="info" @click="change = 'Phone'">手机注册</van-button
    ><van-button type="info" @click="change = 'Email'">邮箱注册</van-button>
    <keep-alive>
      <component :is="change">
        <template v-slot:sj>
          <van-field v-model="tel1" type="tel" label="手机号" />
        </template>

        <template v-slot:em>
          <van-field v-model="tel" type="tel" label="邮箱" />
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Phone from './components/zuoye1shouji.vue';
import Email from './components/zuoye1youxiang.vue';
export default {
  data() {
    return {
      change: 'Phone',
      phone: '',
      tel: '',
      tel1: '',
    };
  },
  components: {
    Email,
    Phone,
  },
};
</script>

<style></style>
