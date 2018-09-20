<template>
    <div>
          <div>多行文本</div>
          <textarea v-model="message" placeholder="多行文本"></textarea>
          <p style="white-space: pre-line">{{message}}</p>
    </div>
</template>

<style>

</style>

<script>
    export default{
        data () {
            return {
                message:'',
            }
        }
    }
</script>
