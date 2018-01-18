<!-- List.vue -->
<template>
  <li class="sec_li">
    <router-link to="/detail" class="lp_li_a">
      <div class="lp_li_imgWrap">
        <img :src="img"  alt="">
      </div>
      <p class="lp_li_name">{{ title }}</p>
      <p class="lp_li_price">￥{{ price }}元</p>
    </router-link>
  </li>
</template>

<style scoped>
  .sec_li {
    float: left;
    width: 50%;
    margin-bottom: 5px;
  }

  .lp_li_a {
    display: block;
    padding: 20px 0;
    margin: 0 2px;
    text-align: center;
    background: #fff;
  }

  .lp_li_imgWrap {
    padding: 10px 0;
  }

  .lp_li_imgWrap > img {
    width: auto;
    height: 200px;
  }

  .lp_li_name {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #333;
  }

  .lp_li_price {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fb3b3b;
  }
</style>

<script>
  export default {
    props: ['price', 'title','img']
  }
</script>
