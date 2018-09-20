<template>
    <div>
        <slot-parent></slot-parent>
    </div>
</template>

<style>

</style>

<script>
  import SlotParent from './SlotParent.vue';
    export default{
        data () {
            return {}
        },
      components:{
        SlotParent
      },
      name:'Slot'
    }
</script>
