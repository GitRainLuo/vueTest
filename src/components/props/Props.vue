<template>
    <div>
        <parent-t></parent-t>
        <parent-get-from-child></parent-get-from-child>
    </div>
</template>

<style>

</style>

<script>
  import ParentT from  './ParentT.vue';
  import ParentGetFromChild from './ParentGetFromChild.vue';
    export default{
        data () {
            return {}
        },
      name:'Props',
      components:{
        ParentT,
        ParentGetFromChild
      }
    }
</script>
