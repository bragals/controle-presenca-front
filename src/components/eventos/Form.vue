<template>
  <div> <!--Formulário para Cadastro -->
    <div class="card"> <!-- Início div class="card" -->
      <div class="card-content"> <!-- Início Conteúdo do Cartão -->
        <form @submit.prevent="Salvar()">
          <div class="message" :class="classMessage" v-if="message">
            {{ message }}
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="descricao" v-model="evento.NomeEvento" type="text" class="validate">
              <label class="active" for="descricao">Digite aqui o nome do Evento:</label>
            </div>
          </div>
          <button type="submit" name="button" class="btn btn-large">Salvar</button>
          <router-link class="btn btn-large" to="/Eventos" >Voltar</router-link>
        </form>
      </div> <!-- Início Conteúdo do Cartão -->
    </div> <!-- Fim div class="card" -->
  </div> <!--Fim Formulário para Cadastro -->
</template>

<script>
export default {
  data: () => ({
    evento: {},
    message: null,
    typeMessage: null,
    classMessage: null
  }),
  mounted () {
   if (this.$route.params.id) {
     this.BuscarEventos()
   }
  },
  methods: {
    BuscarEventos () {
      this.$http.get(process.env.SERVER + '/api/Eventos/' + this.$route.params.id)
      .then(resp => {
        this.evento = resp.data
      })
    },
    Salvar () {
      if (this.$route.params.id) {
        this.Update()
      } else {
        this.Cadastrar()
      }
    },
    Cadastrar () {
      this.$http.post(process.env.SERVER + '/api/Eventos', this.evento)
      .then(resp => {
        this.message = resp.data.message
        this.typeMessage = resp.data.success
        if (resp.data.success) {
          this.LoadPage()
        }
      })
    },
    Update () {
      this.$http.put(process.env.SERVER + '/api/Eventos', this.evento)
      .then(resp => {
        this.mesage = resp.data.message
        this.typeMessage = resp.data.success
        if (resp.data.success) {
          this.LoadPage()
        }
      })
    },
    LoadPage () {
      setTimeout(() => {
        this.$router.push('/eventos')
      }, 2000)
     }
  },
  watch: {
    typeMessage () {
      console.log(this.typeMessage)
      if (this.typeMessage === true) {
        this.classMessage = 'success'
      } else {
        this.classMessage = 'erro'
      }
    }
   }
}
</script>
<style scoped>
.message{border:1px solid #ccc; padding: 8px; margin-bottom: 18px;}
.message.success{ background-color: rgba(0, 229, 0, 0.3);}
.message.erro{ background-color: rgba(255, 0, 9, 0.3);}
</style>
