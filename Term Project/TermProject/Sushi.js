const sushiApp = Vue.createApp({
    data() {
        return {
            sushiTypes: [
                {
                    type: 'Salmon Nigiri',
                    ingredient: 'Salmon',
                    flavor: 'Rich and buttery with a melt-in-your-mouth texture',
                    images: [
                        'images/salmon nigiri.jpg',
                        'images/salmon nigiri2.jpg',
                        'images/salmon nigiri3.jpg'
                    ],
                    currentImage: 0
                },
                {
                    type: 'Tuna Sashimi',
                    ingredient: 'Tuna',
                    flavor: 'Lean and meaty with a subtle sweetness',
                    images: [
                        'images/Tuna Sashimi2.jpg',
                        'images/Tuna Sashimi.jpg',
                        'images/Tuna Sashimi3.jpg'
                    ],
                    currentImage: 0
                },
                {
                    type: 'Unagi (Eel) Sushi',
                    ingredient: 'Eel',
                    flavor: 'Savory and slightly sweet with a hint of smokiness',
                    images: [
                        'images/Unagi (Eel) Sushi.jpg',
                        'images/Unagi (Eel) Sushi1.jpg',
                        'images/Unagi (Eel) Sushi3.jpg'
                    ],
                    currentImage: 0
                }
            ]
        };
    },
    methods: {
        nextImage(sushi) {
            sushi.currentImage = (sushi.currentImage + 1) % sushi.images.length;
        }
    }
}).mount('#sushiApp');
