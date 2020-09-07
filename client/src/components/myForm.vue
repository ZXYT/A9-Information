<template>
  <div class="form">
    <div class="content">
      <slot />

      <div class="btns">
        <button @click="$emit('cancal')">取消</button>
        <button @click="$emit('submit')">提交</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(39, 30, 30, 0.123);
  .content {
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: #fff;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    border-radius: 5px;
    line-height: 40px;
    div {
      padding: 0 20px;
      span {
        display: inline-block;
        width: 4em;
        text-align: right;
        padding-right: 20px;
      }

      select,
      input {
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid #000000;
        width: 200px;
        padding: 5px;
      }
    }
    .btns {
      text-align: center;
    }
  }
}
</style>