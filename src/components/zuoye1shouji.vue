<template>
  <div id="isAbout">
    <div>选择所在地区(实名认证主体所在地)</div>

    <div class="one">
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="1">中国大陆</van-radio>
        <van-radio name="2">中国香港</van-radio>
      </van-radio-group>
    </div>

    <div><slot name="sj"></slot></div>

    <div>
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </div>

    <div>
      <van-field
        v-model="password"
        type="password"
        label=""
        placeholder="请输入登录密码！"
      />

      <van-field
        v-model="password"
        type="password"
        label=""
        placeholder="再次输入登录密码"
      />
    </div>

    <div>
      <van-field v-model="digit" type="digit" label="邀请码" />
    </div>

    <div><van-button type="primary">登录</van-button></div>
  </div>
</template>

<script>
export default {
  name: 'isAbout',
  data() {
    return {
      radio: '',
      sms: '',
      password: '',
      digit: '',
    };
  },
};
</script>

<style scoped>
#isAbout {
  width: 100%;
  height: 100%;
}
.one {
  margin: 0 auto;
}
</style>
