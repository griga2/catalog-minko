<script setup>


</script>

<template>
    <section id = 'start_block'>
        <section id = 'text_block_start'>
            <a id = 'big_start_text'>
                Absent team
            </a>
            <p id = 'small_start_text'>
                Мир кузня - не скованный законами адептус механикус (и гв)
            </p>
        </section>
        <section id="big_logo">
            <img>   
        </section>
    </section>
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
        <section>
            <a>Контакты</a>
        </section>
        <section>
            <a>Договор оферты</a>
        </section>
    </footer>
</template>

<style scoped>

#text_block_start{
    width: 40%;
}

main {
    height: 50vh;
    width: 100%;
    background-color: #36786E;
    margin: 0px;
    border: 0px;
    padding: 0px;

}
#big_start_text{
font-size: 12vh;  
font-family: Inter;
}

main * {

}

template{
    margin: 0px;
    border: 0px;
}

#big_logo{
    background-color: white;
    height: 400px;
    width: 400px;
}

#start_block{
    background-color: #36786E;
    height: 50vh;
    width: 100%;
    display: flex; 
    align-content: center;
    padding: 0px;
    align-items: center;
    justify-content: space-evenly;
    color:white;
    font-style: normal;
    text-align: right;
    font-family: Inter;
    font-size: 3vh;
    padding-top: 22vh;
    padding-bottom: 28vh;
    scroll-behavior: smooth;
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
    margin-top: 0px;
    border: 0px;
    padding: 0px;
    top: calc(40vh);
}

*{
    margin: 0px;
    border: 0px;
    padding: 0px;
}
body{
    height: max-content;
}

footer{
    height: 300px;
    background-color: #36786E   ;
}
</style>