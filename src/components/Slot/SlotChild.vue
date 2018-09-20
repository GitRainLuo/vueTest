<template>
  <div>
    <slot  name=”header”>这是拥有命名的slot的默认内容</slot>
    <br/>
    <slot  name=”main”>这是拥有命名的slot的默认内容</slot>
    <br/>
    <slot  name=”footer”>这是拥有命名的slot的默认内容</slot>
    <br/>
    <slot  name=”other”>这是拥有命名的slot的默认内容</slot>
  </div>
</template>

<style>

</style>

<script>
    export default{
        data () {
            return {}
        }
    }
</script>
