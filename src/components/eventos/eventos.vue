<template>
  <div id="eventos"> <!--Cria uma DIV Eventos -- >
    <div class="card"> <!--Início div class="card" -->
      <div class="card-content"> <!-- Início da div class="card-content" -->
        <!-- Início Botões Cadastro e Voltar -->
        <router-link to="/eventos/Cadastro">    <!-- Cria botão Cadastro -->
          <button type="button" name="button" class="btn-floating btn-large waves-effect waves-light blue">
            <i class="material-icons">add</i>
          </button>                             <!-- Fim botão Cadastro -->

                                                <!-- Cria botão Voltar -->
        <router-link class="btn-floating btn-large waves-effect waves-light purple" to="/" >
              <i class="material-icons">arrow_back</i>
        </router-link>                          <!-- Fim botão Voltar -->
        </router-link>
        <!-- Fim Botões Cadastro e Voltar -->

        <table class="bordered striped"> <!-- Início Tabela -->
          <thead> <!-- Início Cabeçalho da Tabela -->
            <tr>
              <th>#</th>
              <th>Nome do Evento</th>
            </tr>
          </thead> <!-- Fim Cabeçalho da Tabela -->
          <tbody>  <!-- Início Corpo da Tabela -->
          <tr v-for="p in eventos" :key="p.key">
              <td width="160"> <!-- Botões Remover e Editar -->
                <button type="button" @click="Delete(p.Id)" name="button" class="btn-floating btn-large waves-effect waves-light red">
                  <i class="material-icons">remove</i>
                </button>
                <router-link :to="'/eventos/Edit/' + p.Id">
                  <button type="button" name="button" class="btn-floating btn-large waves-effect waves-light green">
                    <i class="material-icons">edit</i>
                  </button>
                </router-link>
              </td>           <!-- Fim Botões Remover e Editar -->
              <td>{{p.NomeEvento}}</td> <!-- Mostra registro NomeEvento do banco de dados -->
          </tr>
        </tbody>  <!-- Fim Corpo da Tabela -->
          <tfoot> <!-- Início do Rodapé da Tabela -->
            <tr>
              <th colspan="3">Total de registros: {{eventos.length}}</th>
            </tr>
          </tfoot> <!-- Fim do Rodapé da Tabela -->
        </table> <!-- Fim Tabela -->
      </div> <!-- Fim da div class="card-content" -->
    </div> <!--Fim div class="card" -->
  </div> <!-- Fim da DIV Eventos -->
</template>

<script>
export default {
  data: () => ({
    eventos: []
  }),
  mounted() {
    this.ListaEventos()
  },
  methods: {
    ListaEventos () {
      this.$http.get(process.env.SERVER + '/api/eventos/', {})
      .then(resp => {
        this.eventos = resp.data
      })
    },
    Delete (id) {
      if (id) {
        this.$http.delete(process.env.SERVER + '/api/eventos/' + id)
        .then(resp => {
          this.ListaEventos()
        })
      }
    }
  }
}
</script>

<style scoped>
#eventos{margin-top: 30px;}
table{margin-top: 30px;}
</style>
