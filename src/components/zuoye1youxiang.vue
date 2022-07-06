<template>
  <div id="isAbout">
    <div>选择所在地区(实名认证主体所在地)</div>

    <div class="one">
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="1">QQ</van-radio>
        <van-radio name="2">136</van-radio>
      </van-radio-group>
    </div>

    <div><slot name="em"></slot></div>

    <div>
      <van-field
        v-model="sms"
        center
        clearable
        label="邮箱验证码"
        placeholder="请输入邮箱验证码"
      >
        <template #button>
          <van-button size="small" type="primary">验证</van-button>
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

    <div><van-button type="primary">注册</van-button></div>
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

<style></style>
