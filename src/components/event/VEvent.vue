<template>
  <div class="event-main">
    <demo-parent />
    <demo-parent-m />
    <ve-sync />
  </div>
</template>

<script>
  import DemoParent from '@/components/event/v-emit/DemoParent';
  import DemoParentM from '@/components/event/v-model/DemoParentM';
  import VeSync from '@/components/event/ve-sync/VeSync';

  export default {
    components: {
      VeSync,
      DemoParentM,
      DemoParent
    },
    name: "v-event"
  }
</script>

<style scoped>
  .event-main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .box-card {
    margin-bottom: 15px;
    width: 300px;
    display: inline-block;
    height: 300px;
  }
</style>
