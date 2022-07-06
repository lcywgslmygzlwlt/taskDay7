<template>
  <div id="app">
    <input type="radio" />中国大陆 <input type="radio" />中国香港
    <div class="shouji">
      <p>手机号码</p>
      <!-- <input type="text" placeholder="请输入手机号" /> -->
      <slot name="shouji" :row="list"></slot>
    </div>
    <div class="yanz">
      <input type="text" placeholder="输入验证码" /><button>发送验证码</button>
    </div>
    <div class="mima">
      <p>登录密码</p>
      <input type="text" placeholder="请输入密码" />
      <input type="text" placeholder="再次输入登录密码" />
    </div>
    <div class="foot">
      <p>邀请码(选填)</p>
      <input type="text" name="" id="" placeholder="输入用户经理邀请码" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.shouji {
  margin-top: 10px;
  p {
    padding-right: 140px;
  }
  input {
    width: 200px;
    height: 25px;
  }
}
.yanz {
  padding-top: 10px;
  input {
    width: 110px;
    height: 25px;
  }
  button {
    width: 80px;
    margin-left: 10px;
    height: 28px;
  }
}
.mima {
  padding-top: 5px;

  input {
    width: 200px;
    margin-top: 6px;
    height: 25px;
  }
  p {
    padding-right: 140px;
  }
}
.foot {
  padding-top: 10px;
  p {
    padding-right: 110px;
  }
  input {
    width: 200px;
    height: 25px;
  }
}
</style>
