<script setup>

    import { useUserStore } from '@/stores/catalog'
    import { storeToRefs } from 'pinia'
    import ProductCard from './components/ProductCard.vue'
    const userStore = useUserStore();

    const {
        products,
        categories,
    } = storeToRefs(userStore);

</script>


<template >
        <nav>
            <section id="categories" v-for="categori in categories" :key="categori.id">
                <button class ='categori_button'>{{ categori.name }}</button> 
            </section>
        </nav>

        <main class = 'catalog_grid'>
            <section  v-for="product in products" :key="product.id">
                <ProductCard class = 'card' :product = 'product'></ProductCard>
            </section>
        </main>


        <footer>

        </footer>
</template>

<style scoped>

.catalog_grid{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    overflow-y:scroll;
    -ms-overflow-style: none;
    width: calc(100% - 300px);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -1;
    scrollbar-width: 0px;
    padding-left: 300px;
    padding-top: 20px;
    
}
.categori_button{
    width: 100%;
    height: 100%;
    border: 0px;
    margin: 0px;
    padding: 0px;
    font-size: 26px;
    color: white;
    background-color: #87A75B;
}

.catalog_grid::-webkit-scrollbar {
  display: none;
}
#categories{
    color: white;
    font-size: 26px;
    border: 0px;
    background-color: #87A75B;
    width: 100%;
    height: 60px;
}

.categori_button:hover{
    animation: 0.5s nav_button_anim forwards;
    transition: all 0.2s;
}

.categori_button:focus{
    padding-left: 25px;
    border-left: 3px solid #87A75B;
    background-color: #36786E;

}

@keyframes nav_button_anim {
    100% {
        padding-left: 25px;
        background-color: #36786E;
    }
}

#app{
    width: 100%;
    height: 100%;
    margin: 0px;
    background-color: #36786E;
    border: 0px;
    scrollbar-width: 0px;
    padding: 0px;
}

#card{
    width: 264px;
}


nav{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 100%;
    background-color: #87A75B;
    color-scheme: #FFFFFF;
}
</style>