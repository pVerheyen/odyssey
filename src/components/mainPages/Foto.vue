<template>
<div class="text-center">
  <h1>Foto's</h1> 
  <br/>
  <lightbox :images="evenement1" title="evenement1" ></lightbox>
  <lightbox :images="evenement2" title="evenement2" ></lightbox>
  <lightbox :images="images" title="Demo Gallery" ></lightbox>
</div>
</template>

<script>
export default {
  name: "fotos",
  data() {
    return {
        images : [
    {
        src: 'https://unsplash.it/500',
        caption: 'Image 1',
    },
    {
        src: 'https://unsplash.it/501',
    },
        {
        src: 'https://unsplash.it/500',
        caption: 'Image 1',
    },
    {
        src: 'https://unsplash.it/501',
    },
        {
        src: 'https://unsplash.it/500',
        caption: 'Image 1',
    },
    {
        src: 'https://unsplash.it/501',
    },
        {
        src: 'https://unsplash.it/500',
        caption: 'Image 1',
    },
    {
        src: 'https://unsplash.it/501',
    },
],
        evenement1 : [
    {
        src: require('../../assets/images/evenement1/1.jpg'),
    },
    {
        src: require('../../assets/images/evenement1/2.jpg'),
    },
        {
        src: require('../../assets/images/evenement1/3.jpg'),
    },
    {
        src: require('../../assets/images/evenement1/1.jpg'),
    },
    {
        src: require('../../assets/images/evenement1/2.jpg'),
    },
        {
        src: require('../../assets/images/evenement1/3.jpg'),
    },
    {
        src: require('../../assets/images/evenement1/1.jpg'),
    },
    {
        src: require('../../assets/images/evenement1/2.jpg'),
    },
        {
        src: require('../../assets/images/evenement1/3.jpg'),
    },
],
        evenement2 : [
    {
        src: 'src/assets/images/evenement2/1.jpg',
    },
    {
        src: 'src/assets/images/evenement2/2.jpg',
    },
        {
        src: 'src/assets/images/evenement2/3.jpg',
    },
        {
        src: 'src/assets/images/evenement2/1.jpg',
    },
    {
        src: 'src/assets/images/evenement2/2.jpg',
    },
        {
        src: 'src/assets/images/evenement2/3.jpg',
    },
        {
        src: 'src/assets/images/evenement2/1.jpg',
    },
    {
        src: 'src/assets/images/evenement2/2.jpg',
    },
        {
        src: 'src/assets/images/evenement2/3.jpg',
    },
]
    };
  }
};
</script>