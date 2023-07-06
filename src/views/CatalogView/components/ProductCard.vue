<script setup>
import {defineProps} from 'vue'
defineProps({
        product: {},
    })

</script>


<template>
    <main>
       
        <section id="fl">
            <article id = 'image_box'>
                image
            </article>
            <article id="name_box">
                {{ product.name }}
                <button id ='buy_button'>
                    В карзину
                </button>
            </article>
        </section>
        <article id ='logo'>
            DG
        </article>
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

#image_box{
    border-radius: 26px 26px 5px 5px;
    border-style: solid;
    border-color: #87a75b;
    border-width: 3px;
    width: 198px;
    height: 127px;
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

main{
    background-color: #0C3A2F;
    width: 244px;
    height: 304px;
    border-radius: 28px;
    margin: 10px;
}
#fl{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
}
</style>