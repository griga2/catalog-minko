<script setup>


</script>

<template>
    <header>
        <a>AbsentTeam</a>
        <nav>
            <button class = 'nav_bt' @click="$router.push('/catalog')">
                Каталог
            </button>
            <button class = 'nav_bt'>
                Карзина
            </button>
            <button class = 'nav_bt'>
                Личный кабинет
            </button>
        </nav>
    </header>

    <main>
        <a>a</a>
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

main * {
    box-sizing: border-box;
}

.nav_bt{
    width: 250px;
    height: 100px;
    border: 0px;
    background-color: #87a75b;
    color: white;
    font-size: 26px;
}

.nav_bt:hover{
    background-color: #708a4b;
}

header{
    position: static;
    height: 100px;
    width: calc(100%-40px);
    background: #87a75b;    
    display: flex;
    flex: 4 1 1 1   ;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

}

body{
    height: max-content;
}

footer{
    height: 300px;
    background-color: #36786E   ;
}
</style>