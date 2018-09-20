<template>
    <div>
      <h4>子组件向父组件传递值</h4>
      <div>{{getFromP}}</div>
      <input type="text" v-model="sendToPData"/>
      <!--点击事件-->
      <button @click="sendMsgToParent">向父组件传值</button>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data () {
            return {
              sendToPData:''
            }
        },
        props:['getFromP'],
        methods:{
//          响应该点击事件的函数中使用$emit来触发一个自定义事件，并传递一个参数
            sendMsgToParent:function () {
               this.$emit('listenToChildEvent',this.sendToPData)
            }
        }
    }
</script>
