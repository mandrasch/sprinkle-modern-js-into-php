
import HelloWorld from './components/HelloWorld.vue'
import { createApp } from 'vue'

const app = createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
})

app.component('hello-world', HelloWorld)

app.mount('#app')