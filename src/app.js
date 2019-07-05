import HelloWorld from "./helloWorld.svelte";

const app = new HelloWorld({
    target: document.querySelector('#app')
})

// setting name prop
app.$set({
    name: 'John'
})