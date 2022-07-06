<template>
  <div>
    <hr />
    <h1>2. 组件缓存</h1>
    <UseDyanmic></UseDyanmic>
    <hr />
    <h1>3. 组件-插槽</h1>
    <UseSlot></UseSlot>
    <hr />
    <h1>4. 组件-具名插槽</h1>
    <use5></use5>
    <hr />
    <h1>5. 组件-作用域插槽</h1>
    <use6></use6>
    <hr />
    <h1>6. 作用域插槽-使用场景</h1>
    <p>组件内标签可以随意定义和数据使用</p>
    <use7></use7>
    <hr />
    <!-- <hr>
    <h1>2. 组件缓存</h1>
    
    <hr>
    <h1>3. 组件-插槽</h1>
    
    <hr>
    <h1>4. 组件-具名插槽</h1>
    
    <hr>
    <h1>5. 组件-作用域插槽</h1>
    
    <hr>
    <h1>6. 作用域插槽-使用场景</h1>
    <p>组件内标签可以随意定义和数据使用</p>
    
    <hr>
    <h1>7. 自定义指令</h1> -->
  </div>
</template>

<script>
import UseDyanmic from './views/04/1.vue';
import UseSlot from './views/04/01.vue';
import use5 from './views/04/02.vue';
import use6 from './views/04/03.vue';
import use7 from './views/04/04.vue';
export default {
  data() {
    return {
      comName: 'MyTest',
    };
  },
  components: {
    MyTest,
    UseDyanmic,
    UseSlot,
    use5,
    use6,
    use7,
  },
};
</script>

<style></style>
