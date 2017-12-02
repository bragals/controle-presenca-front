<template>
  <div id="app">
    <!--Início da barra de navegação-->
    <nav class="teal"> <!--Altera cor da navbar-->
      <!--Ínicio das opções de menu-->
      <ul class="container">
        <li>
          <router-link to="/">Início</router-link>
        </li>
        <li>
          <router-link to="/Eventos">Eventos</router-link>
        </li>
        <li>
          <router-link to="/Participantes">Participantes</router-link>
        </li>
        <li>
          <router-link to="/Vendas">Vendas</router-link>
        </li>
        <li>
          <router-link to="/ControlePresenca">Presença</router-link>
        </li>
      </ul>
      <!--Ínicio das opções de menu-->
      </nav>
      <!--Fim da barra de navegação-->
      <div class="container">
        <router-view></router-view>
      </div>
      <!-- Início Rodapé -->
      <footer class="teal page-footer">
        <div class="center container">
        © 2017 Lucas Braga
        <br><br>
        </div>
      </footer>
      <!-- Fim Rodapé -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

</style>
