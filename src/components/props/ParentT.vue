<template>
    <div>
      <h4>父组件向子组件传值</h4>
      <input v-model="message"/>
      <child-t :childMessage="message"></child-t>
    </div>
</template>

<style>

</style>

<script>
  import ChildT from './ChildT.vue'
    export default{
      components:{
            ChildT
      },
      data(){
          return {
              message:'hello'
          }
      }
    }
</script>
