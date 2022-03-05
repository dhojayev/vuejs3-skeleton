import HomeComponent from './pages/HomeComponent.vue'
import { Component } from 'vue'

const routes: { [key: string]: Component } = {
    '/': HomeComponent,
}

export default routes
