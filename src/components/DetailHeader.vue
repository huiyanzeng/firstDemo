<!-- DetailHeader.vue -->
<template>
  <header class="header">
    <div class="header_inner">
      <div
        id="header_btn_nav"
        class="header_btn header_btn_back"
        v-on:click="goBack"
      >返回
      </div>
      <div class="header_cont flex">详情</div>
    </div>
  </header>
</template>

<style scoped>

  .header {
    height: 50px;
  }

  .header_inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    max-width: 800px;
    height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    background-color: #fff;
  }

  .header_btn {
    width: 50px;
    height: 100%;
    background-repeat: no-repeat;
    float: left;
    margin-left: 20px;
  }

  .header_btn_back {
    line-height: 50px;
  }

  .header_cont {
    text-align: center;
    float: right;
    width: 100px;
    padding: 0 20px;
    line-height: 50px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header_btn:active {
    opacity: 0.7;
  }
</style>
<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    }
  }
}
</script>
