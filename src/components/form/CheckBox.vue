<template>
    <div>
        <div>复选框</div>
        <label for="apple"><input type="checkbox" id="apple" v-model="checkFruits" value="apple"/>apple</label>
        <label for="banana"><input type="checkbox" id="banana" v-model="checkFruits" value="banana"/>banana</label>
        <label for="orange"><input type="checkbox" id="orange" v-model="checkFruits" value="orange"/>orange</label>
        <label for="watermelon"><input type="checkbox" id="watermelon" v-model="checkFruits" value="watermelon"/>watermelon</label>
        <br/>
        <span>选中的fruits:{{checkFruits}}</span>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data () {
            return {
              checkFruits:[],
            }
        }
    }
</script>
