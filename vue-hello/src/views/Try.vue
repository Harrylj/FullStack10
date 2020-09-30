<template>
  <div class="about">
    <h1>try</h1>
    <div>
      <p>css实现文本右下角展示查看更多</p>
      <br />
      <div :class="[{'box': showBtn}, 'words']" :content="describe">
        {{describe}}
        <span v-if="showBtn" class="btn" @click="showMore">查看更多</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "try",
  data() {
    return {
      tel: "",
      sms: "",
      num_01: "",
      num_02: "",
      showBtn: true,
      describe: 'Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。' 
    };
  },
  components: {},
  methods: {
    showMore(){
      this.showBtn = false
    }
  },
  created() {},
};
</script>
<style lang="scss" scope>
.words {
  max-height: 40px;
  color: #666;
  font-size: 14px;
  position: relative;
}
.box {
  color: #fff;
}
.box::before,
.box::after {
  content: attr(content);
  overflow: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  color: #666;
  line-height: 20px;
}
.box::before {
  max-height: 20px;
  z-index: 2;
  background: #fff;
}
.box::after {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-line-clamp: 2;
  text-indent: -4em;
  padding-right: 4em;
}
.box .btn {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
  color: #696;
  line-height: 20px;
}
</style>
