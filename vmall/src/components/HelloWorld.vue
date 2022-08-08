<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg:'Vmall home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
