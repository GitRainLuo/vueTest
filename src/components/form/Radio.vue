<template>
    <div>
        <div>单选按钮</div>
        <!--<input type="radio" id="male" value="男" v-model="picked"/>-->
        <!--<label for="male">男</label>-->
        <!--<input type="radio" id="female" value="女" v-model="picked"/>-->
        <!--<label for="female">女</label>-->
        <label for="male"><input type="radio" id="male" v-model="sex" value="男"/>男</label>
        <label for="female"><input type="radio" id="female" v-model="sex" value="女"/>女</label>
      <!--<span>picked:{{picked}}</span>-->
      <span>性别:{{sex}}</span>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data () {
            return {
                picked:'',
                sex:'男'//默认选中男
            }
        }
    }
</script>
