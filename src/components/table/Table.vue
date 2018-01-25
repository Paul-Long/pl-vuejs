<template>
  <div>
    <table-a />
    <table-b />
    <table-c />
    <table-d />
    <table-e />
    <table-f />
  </div>
</template>

<script>
  import TableA from './TableA';
  import TableB from './TableB';
  import TableC from './TableC';
  import TableD from './TableD';
  import TableE from './TableE';
  import TableF from './TableF';

  export default {
    components: {
      TableF,
      TableE,
      TableD,
      TableC,
      TableB,
      TableA
    },
    name: "table"
  }
</script>

<style scoped>

</style>
