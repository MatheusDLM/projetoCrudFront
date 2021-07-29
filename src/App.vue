<template>

  <div id="app">
    <Header/>
    <router-view/>

  </div>
  
</template>

<script>
import Header from './components/Header.vue' //Importa o header
export default {
  name:'App',
  components:{ //Utiliza o header
    Header
  }
}
</script>

<style>

</style>