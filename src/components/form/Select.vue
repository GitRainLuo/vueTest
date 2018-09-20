<template>
    <div>
        <div>表单之下拉框</div>
        <select v-model="select" >
          <option  v-for=" option in options" :value="option.value" :key="option.text" >{{option.text}}</option>
        </select>
      <span>selectd:{{select}}</span>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data () {
            return {
                select:'',
                options:[
                  {text:'请选择',value:''},
                  {text:'One',value:'A'},
                  {text:'Two',value:'B'},
                  {text:'Three',value:'C'}
                ]
            }
        },
      name:'Select',
    }
</script>
