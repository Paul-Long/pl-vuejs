<template>
  <div id="h-total">
    <div id="h-title">
      <div>总销售额</div>
      <i class="el-icon-warning"></i>
    </div>
    <div id="h-price">
      ￥126,560
    </div>
    <div id="h-footer">
      日均销售额￥12,423
    </div>
  </div>
</template>

<script>
  export default {
    name: "home-total"
  }
</script>

<style scoped>
  #h-total {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    padding: 7px;
    align-items: flex-start;
  }

  #h-title {
    display: flex;
    justify-content: space-between;
    height: 30px;
    width: 100%;
  }

  #h-price {
    padding-top: 30px;
    width: 100%;
    text-align: left;
    padding-bottom: 5px;
    font-size: 28px;
    border-bottom: 1px solid #ddd;
  }

  #h-footer {
    line-height: 30px;
  }
</style>
