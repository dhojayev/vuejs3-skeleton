<template>
  <div class="app">
    <div class="container">
      <component :is="activeComponent"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import routes from './routes'
  import NotFoundComponent from './pages/NotFoundComponent.vue'
  import { Component } from 'vue-router/types/router.js'

  export default defineComponent({
    data: () => ({
      currentRoute: window.location.pathname,
    }),

    computed: {
      activeComponent(): Component {
        return routes[this.currentRoute] || NotFoundComponent
      },
    },
  })
</script>
