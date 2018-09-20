<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h5>vue生命周期</h5>
    {{message}}
    <button type="button" @click="changeMessage">更新数据</button>
    <!--缓存-->
    <keep-alive>
     <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--<router-view></router-view>-->
    <!--<keep-alive :include="includedComponents">-->
      <!--<router-view></router-view>-->
    <!--</keep-alive>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          message:'hello vue!'
      }
  },
  methods:{
      changeMessage:function () {
        this.message = '数据改变了';
      }
  },
  beforeCreate(){
      console.group('beforeCreate 创建前状态=====>');
      console.log("%c%s",'color:red','el:'+ this.$el);
      console.log("%c%s",'color:red','data:'+ this.$data);
      console.log("%c%s",'color:red','message:' +this.message);
//      console.groupEnd('11111111111')
  },
  created(){
      console.group('created 创建完毕状态 =====>');
      console.log("%c%s",'color:red','el:'+ this.$el);
      console.log("%c%s",'color:red','data:'+ this.$data);
      console.log("%c%s",'color:red','message:' +this.message);
  },
  beforeMount(){
    console.group('beforeMount 挂载前状态 =====>');
    console.log("%c%s",'color:red','el:'+ this.$el);
    console.log(this.$el);
    console.log("%c%s",'color:red','data:'+ this.$data);
    console.log("%c%s",'color:red','message:' +this.message);
  },
  mounted(){
    console.group('mounted 挂载完毕状态 =====>');
    console.log("%c%s",'color:red','el:'+ this.$el);
    console.log(this.$el);
    console.log("%c%s",'color:red','data:'+ this.$data);
    console.log("%c%s",'color:red','message:' +this.message);
  },
  beforeUpdate(){
    console.group('beforeUpdate 更新前状态 =====>');
    console.log('真实DOM结构：' + document.getElementById('app').innerHTML)
    console.log("%c%s",'color:red','el:'+ this.$el);
    console.log(this.$el);
    console.log("%c%s",'color:red','data:'+ this.$data);
    console.log("%c%s",'color:red','message:' +this.message);
  },
//  beforeupdate:数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
//  updated:由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
//  分析原因:
//  1.之前的log打印的是虚拟DOM的内容
  updated(){
    console.group('updated 更新完毕状态 =====>');
    console.log('真实DOM结构：' + document.getElementById('app').innerHTML)
    console.log("%c%s",'color:red','el:'+ this.$el);
    console.log(this.$el);
    console.log("%c%s",'color:red','data:'+ this.$data);
    console.log("%c%s",'color:red','message:' +this.message);
  },
  beforeDestroy(){
    console.group('beforeDestroy 销毁前状态 =====>');
    console.log("%c%s",'color:red','el:'+ this.$el);
    console.log(this.$el);
    console.log("%c%s",'color:red','data:'+ this.$data);
    console.log("%c%s",'color:red','message:' +this.message);
  },
  destroyed(){
    console.group('destroyed 销毁完毕状态 =====>');
    console.log("%c%s",'color:red','el:'+ this.$el);
    console.log(this.$el);
    console.log("%c%s",'color:red','data:'+ this.$data);
    console.log("%c%s",'color:red','message:' +this.message);
  },
  activated(){
      console.log('activated执行了');
  },
  deactivated(){
      console.log('deactivated执行了');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
