<!-- HomeHeader.vue -->
<template>
  <header class="header">
    <div class="header_inner">
      <div class="header_cont">主页</div>
    </div>
  </header>
</template>

<style >
  .header {
    height: 50px;
  }

  .header_inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    max-width:800px;
    height: 50px;
    box-sizing: border-box;
    margin: 0 auto;
    border-bottom: 1px solid #aaa;
    background-color: #fff;
  }

  .header_cont {
    text-align: center;
    line-height: 50px;
    width: 100%;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
