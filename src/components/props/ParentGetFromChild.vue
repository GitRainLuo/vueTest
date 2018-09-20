<template>
    <div>
        <div id="app">
          <!--父组件中的子标签中监听该自定义事件并添加一个响应该事件的处理方法-->
          <child-to-p :getFromP="parentMsg" @listenToChildEvent="showMsgFromChild"></child-to-p>
          <div>从子组件传递过来的值:{{dataFromChild}}</div>
        </div>
    </div>
</template>

<style>

</style>

<script>
  import ChildToP from './ChildToParent.vue';
    export default{
        data () {
            return {
              parentMsg:'hello child',
              dataFromChild:''
            }
        },
      components:{
            ChildToP
      },
      methods:{
            showMsgFromChild:function (data) {
              console.log('从子组件传递过来的:'+data)
              this.dataFromChild = data;
            }
      }
    }
</script>
