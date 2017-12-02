<template lang="html">
  <div class="">
    <div class="mensagem" :class="msg" v-if="active">
      <h1> {{ mensagem }} </h1>
    </div>
      <div class="card"> <!-- Início div class="card" -->
        <div class="card-content"> <!-- Início Conteúdo do Cartão -->
          <form @submit.prevent="Salvar()">
            <div class="row">
              <div class="input-field col s6">
                <input id="descricao" v-model="participante" type="text" class="validate">
                <label class="active" for="descricao">Digite ou leia o seu cartão:</label>
              </div>
            </div>
            <button type="submit" name="button" class="btn btn-large">Gravar</button>
          </form>
        </div> <!-- Início Conteúdo do Cartão -->
      </div> <!-- Fim div class="card" -->
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    presenca: false,
    mensagem: null,
    participante: null,
    msg: null
  }),
  methods: {
    Salvar () {
      this.LoadPage()
      if (this.presenca) {
        this.presenca = false
        this.msg = 'success'
        this.mensagem = 'Acesso liberado'
      }
      else {
        this.presenca = true
        this.msg = 'erro'
        this.mensagem = 'Acesso negado'
      }
    },
    LoadPage () {
      this.active = true
      setTimeout(() => {
        this.active = false
      }, 5000)
     }
  }
}
</script>

<style lang="css">
.mensagem{display: flex; top: 0; width: 100%; height:100%; position: absolute; z-index: 999; left: 0px; flex-direction: column; align-items: center; justify-content: center;}
.success{background: rgba(0, 229, 0, 0.9); color: white}
.erro{background: rgba(255, 0, 9, 0.9); color: white}
</style>
