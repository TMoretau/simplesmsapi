<template>
  <div class="codebox">
    <div class="codebox-head">
      <span class="codebox-head-method">
        {{ method }}
      </span>
      {{ url }}
    </div>
    <code>
      <div class="codebox-language">
        {{ language }}
      </div>
      <slot></slot>
    </code>
  </div>
</template>
<script>
export default {
  name: 'CodeBox',
  props: ['url', 'method', 'language'],
};
</script>
<style lang="scss">
.codebox {
  position: relative;
  &-head {
    width: 100%;
    padding: 0 20px;
    background: #FFF;
    border: 1px solid #E9E9E9;
    border-radius: 15px 15px 0 0;
    &-method {
      text-transform: uppercase;
      color: #FFC132;
      margin-right: 10px;
    }
    font-weight: bolder;
    height: 50px;
    line-height: 50px;
  }
  pre {
    color: #333;
    padding: 20px;
    background: #E9E9E9;
    border-radius: 0 0 30px 30px;
  }
  &-language {
    position: absolute;
    color: #999;
    right: 20px;
    top: 60px;
    font-weight: bolder;
    text-transform: uppercase;
  }
}
</style>
