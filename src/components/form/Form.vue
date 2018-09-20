<template>
    <div>
      <form-select></form-select>
      <form-radio></form-radio>
      <form-check-box></form-check-box>
    </div>
</template>

<style>

</style>

<script>
  import FormSelect from './Select.vue';
  import FormRadio from './Radio.vue';
  import FormCheckBox from './CheckBox.vue';
  import FormTextArea from  './TextArea.vue';
    export default{
        data () {
            return {
//              includedComponents:'Form'
            }
        },
      name:'Form',
      components:{
        FormSelect,
        FormRadio,
        FormCheckBox,
        FormTextArea
      }
    }
</script>
