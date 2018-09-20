<template>
    <div>
        <slot-child>
          <span slot="header">hello world</span>
          <span slot="main">hello world</span>
          <span slot="footer">hello world</span>
          <span slot="other">{{otherData}}</span>
        </slot-child>
    </div>
</template>

<style>

</style>

<script>
  import SlotChild from  './SlotChild.vue';
    export default{
        data () {
            return {}
        },
      components:{
        SlotChild
      }
    }
</script>
