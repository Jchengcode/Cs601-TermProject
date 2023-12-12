//example button
document.querySelector('.button').addEventListener('click', function() {
    this.classList.toggle('clicked');
});

//simple vue message app
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
});
app.mount('#app');
