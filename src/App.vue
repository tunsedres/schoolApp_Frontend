<template>
  <div>
    <Navbar/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Home from './views/Home'
import Navbar from './views/Partials/Navbar'

export default {
  name: 'App',

  components: {
    Home,
    Navbar
  },

  data: () => ({
    //
  })
}
</script>
