<script setup>

    import { useCatalogStore } from '@/stores/catalog'
    import { storeToRefs } from 'pinia'
    import {ref} from 'vue'
    import ProductCard from './components/ProductCard.vue'
    const catalogStore = useCatalogStore();

    const {
        products,
        // categories,
        current_product,
        close_card,
    } = storeToRefs(catalogStore);


    const catalog_menu_open = ref(false);
    const basket_open = ref(false);
    const personal_area_open = ref(false);
</script>


<template >



        <section class = 'catalog_menu'  v-if='catalog_menu_open'>

        </section>

        <section class = 'basket'  v-if='basket_open'>

        </section>

        <section class = 'personal_area'  v-if='personal_area_open'>

        </section>

        <section class = 'menu'>
            <section>
                <button class = 'menu_button'
                @click = " () => {
                    if (!catalog_menu_open) { catalog_menu_open =  true 
                    } else {
                        catalog_menu_open =  false
                    }
                }">Каталог</button>
            </section>
            <!-- поиск -->
            <section>
                <button class = 'menu_button'
                @click = " () => {
                    if (!basket_open) { basket_open =  true 
                    } else {
                        basket_open =  false
                    }
                }">Корзина</button>
            </section>
            <section>
                <button class = 'menu_button'
                @click = " () => {
                    if (!personal_area_open) { cpersonal_area_open =  true 
                    } else {
                        personal_area_open =  false
                    }
                }">Личный кабинет</button>
            </section>
        </section>

        <section class = 'menu_window'  v-if='menu_window'>
        </section>

        <main class = 'catalog_grid'>
            <section  v-for="product in products" :key="product.id" >
                <ProductCard class = 'card' :product = 'product' @click="() => {
                if (close_card){
                    close_card=false;
                } else {
                    current_product = product.id;
                }
                console.log(current_product);
                }"></ProductCard>
            </section>
        </main>


        <footer>
                
        </footer>
</template>

<style scoped>
main {
    height: 100%;
    width: 100%;
    background-color: #36786E;
    margin: 0px;
    border: 0px;
    padding: 0px;
}

.menu {
    height: 25%;
    width: 100%;
    background-color: #9ECD5D;
    margin: 0px;
    padding: 0px;
    position: static;
    z-index: 7;
}

.basket {
    height: 70%;
    width: 70%;
    background-color: #9ECD5D;
    padding: 0px;
    position: absolute;
    border-radius: 25px;
    z-index: 3;
    top: 15%;
    left: 15%;
}

.personal_area {
    height: 70%;
    width: 70%;
    background-color: #9ECD5D;
    padding: 0px;
    position: absolute;
    border-radius: 25px;
    z-index: 7;
    top: 15%;
    left: 15%;
}

.catalog_menu {
    height: 70%;
    width: 70%;
    background-color: #9ECD5D;
    padding: 0px;
    position: absolute;
    border-radius: 25px;
    z-index: 3;
    top: 15%;
    left: 15%;

}

main * {
    box-sizing: border-box;
}
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

@media (max-width: 1600px) {
    .catalog_grid{
    grid-template-columns: 25% 25% 25% 25%;
         
    }   
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