<template>
    <div>
        <p>从父组件得到:{{childMessage}}</p>
    </div>
</template>

<script>
    export default{
      props:['childMessage'],
      data(){
          return{

          }
      },
    }
</script>
