<template>
  <div class="hello">
    <router-link to="/props">props传值</router-link>
    <br/>
    <router-link to="/form">表单</router-link>
    <br/>
    <router-link to="/slot">Slot</router-link>
  </div>
</template>

<script>
export default {

  components: {

  },
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
