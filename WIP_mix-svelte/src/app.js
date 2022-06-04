import HelloWorld from './components/HelloWorld.svelte';

// TODO: can we use a class as well?
new HelloWorld({
    target: document.querySelector('#hello-world-container'),
});