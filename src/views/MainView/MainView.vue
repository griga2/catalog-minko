<script setup>


</script>

<template>
    <header>
        <a>AbsentTeam</a>
        <section>
            <button class = 'nav_bt' @click="$router.push('/catalog')">
                Каталог
            </button>
            <button class = 'nav_bt'>
                Карзина
            </button>
            <button class = 'nav_bt'>
                Личный кабинет
            </button>
        </section>
    </header>
    <main>
        
    </main>
</template>

<style>

main{
    height: 100%;
    width: 100%;
    background-color: #36786E;
    
}

main * {
    box-sizing: border-box;
}

.nav_bt{
    width: 250px;
    height: 50px;
    border: 0px;
    background-color: #87a75b;
    color: white;
    font-size: 26px;
}

header{
    position: static;
    height: 100px;
    width: calc(100%-40px);
    background: #87a75b;    
    display: flex;
    flex: 4 1 1 1   ;
    justify-content: space-between;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;

}

</style>