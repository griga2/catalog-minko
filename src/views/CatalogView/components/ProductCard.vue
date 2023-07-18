<script setup>
    import {defineProps} from 'vue'
    import { useCatalogStore } from '@/stores/catalog'
    import { storeToRefs } from 'pinia'
    const catalogStore = useCatalogStore();

    const {
        current_product,
        close_card,
    } = storeToRefs(catalogStore);

    defineProps({
        product: {},
    })

</script>


<template>
    <main class = 'card' :class="{current  :product.id == current_product}">
        <section id="fl">
            <article >
                <img :class="{current  :product.id == current_product}" id = 'image_box' :src="product.main_image" alt="">
            </article>
            <article :class="{current  :product.id == current_product}" id="name_box">
                {{ product.name }}
                <button id ='buy_button' :class="{current  :product.id == current_product}">
                    В карзину
                </button>
                <article v-if="product.id == current_product">
                    <p>
                        ОПИСАНИЕ ЫЫ
                    </p>
                </article>
            </article>
            
        </section>
        <article id ='logo'>
            DG
        </article>
        <button @click = "(event) => {
            console.log(current_product + ' ' + product.id);
            current_product = null;
            close_card = true;
        }"
        v-if = "product.id == current_product" id = 'out_button'>
            X
        </button>
    </main>
</template>

<style scoped>

#logo{
    background-color: #87A75B;
    position: relative;
    top: -335px;
    left: -15px;
    border-radius: 400px;
    width: 63px;
    height: 63px;
    text-align: center;
}

#out_button{
    background-color: red;
    color: white;
    position: relative;
    top: -650px;
    left: 655px;
    border-radius: 400px;
    width: 63px;
    height: 63px;
    text-align: center;
    transition: 0s;
}

#image_box{
    border-radius: 26px 26px 5px 5px;
    border-style: solid;
    border-color: #87a75b;
    border-width: 3px;
    width: 198px;
    height: 127px;
}

#image_box.current{
    transition: all 1s;

    width: 648px;
    height: 332px;
    border-radius: 50px 50px 0px 0px;
}

#name_box{
    background: #87a75b;
    border-radius: 5px 5px 25px 25px;
    width: 198px;
    height: 125px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    padding-top: 3px;
}

#name_box.current{
    transition: all 1s;

    width: 646px;
    height: 178.488px;
    border-radius: 0px 0px 50px 50px;
    background: #87a75b;
}

#buy_button{
    background: #9b4e24;
  border-radius: 25px;
  width: 137px;
  height: 51px;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
  position: relative;
  top: 50px;
}

#buy_button.current{
  
}

main.card{
    background-color: #0C3A2F;
    width: 244px;
    height: 324px;
    border-radius: 28px;
    margin: 10px;
}

main.card.current{
    transition: all 1s;
    transform-origin: 50% 50% 50%;
    width: 712px;
    height: 596px;
    flex-shrink: 0;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
    top: calc(50% - 298px);
    left: calc(50% - 356px);
}

#fl{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
}
</style>