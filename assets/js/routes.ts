import HomeComponent from './pages/HomeComponent.vue'
import { Component } from 'vue-router/types/router.js'

const routes: { [key: string]: Component } = {
    '/': HomeComponent,
}

export default routes
