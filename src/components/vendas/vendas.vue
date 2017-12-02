<template>
    <div class="row" id="cabecalho">
      <div class="card">
        <div class="card-content">
      <h4 class="left teal-text">Vincular Participante a Evento:</h4>
      <form class="col s12">
        <div class="row">       <!-- Botões Select Eventos e Participantes -->
          <div class="input-field  col s6">
              <v-select
                        id="select"
                        :valueSelect="'Id'"
                        :items="eventos"
                        :textField="'NomeEvento'"
                        select-text="Selecione um evento"
                        v-model="venda.EventoId"
              ></v-select>
              <label for="select">Eventos</label>
          </div>
          <div class="input-field  col s6">
              <v-select
                        id="select"
                        :items="participantes"
                        :textField="'Nome'"
                        select-text="Selecione um evento"
                        v-model="venda.ParticipanteId"
              ></v-select>
              <label for="select">Participantes</label>
          </div>
        </div>            <!-- Fim Botões Select Eventos e Participantes -->
          <!-- Formulário do Botão Vincular -->
          <form @submit.prevent="Vincular()">
            <div class="message" v-if="message">
              {{ message }}
            </div>
                <button type="submit" name="button" class="btn btn-large" @onclick="LoadPage()"> Vincular </button>
          </form>
          <!-- Fim Formulário do Botão Vincular -->
      </form>

      <table class="bordered striped responsive"> <!-- Início Tabela -->
        <thead> <!-- Início Cabeçalho da Tabela -->
          <tr>
            <th>#</th>
            <th>Participante</th>
            <th>Evento</th>
          </tr>
        </thead> <!-- Fim Cabeçalho da Tabela -->
        <tbody>  <!-- Início Corpo da Tabela -->
        <tr v-for="i in vendas" :key="i.key">
            <td width="160"> <!-- Botões Remover e Editar -->
              <button type="button" @click="Delete(i.Id)" name="button" class="btn-floating btn-large waves-effect waves-light purple">
                <i class="material-icons">remove</i>
              </button>
              </router-link>
            </td>           <!-- Fim Botões Remover e Editar -->
            <td>{{i.Participante.Nome}}</td>
            <td>{{i.Evento.NomeEvento}}</td>
             <!-- Mostra registro NomeEvento do banco de dados -->
        </tr>
      </tbody>  <!-- Fim Corpo da Tabela -->
        <tfoot> <!-- Início do Rodapé da Tabela -->
          <tr>
            <th colspan="3">Total de registros: {{vendas.length}}</th>
          </tr>
        </tfoot> <!-- Fim do Rodapé da Tabela -->
      </table> <!-- Fim Tabela -->

    </div>
</div>
</div>
</template>

<script>
export default {
  data: () => ({
    venda: {
      EventoId: null,
      ParticipantesId: null
    },
    eventos: [],
    participantes: [],
    vendas: [],
    message: null,
    typeMessage: null,
  }),
  mounted () {
    this.BuscarEventos()
    this.BuscarParticipantes()
    this.ListarVendas()
  },
  methods: {
    ListarVendas () {
    this.$http.get(process.env.SERVER + '/api/vendas/', {})
    .then(resp => {
      this.vendas = resp.data
    })
  },
    BuscarEventos () {
      this.$http.get(process.env.SERVER + '/api/eventos', {})
      .then(resp => {
        this.eventos = []
        resp.data.forEach(x => {
          this.eventos.push({ id: x.Id, NomeEvento: x.NomeEvento })
        })
      })
    },
    BuscarParticipantes () {
      this.$http.get(process.env.SERVER + '/api/participantes', {})
      .then(resp => {
        this.participantes = []
        resp.data.forEach(x => {
          this.participantes.push({ id: x.Id, Nome: x.Nome })
        })
      })
    },
    Vincular () {
      this.$http.post(process.env.SERVER + '/api/Vendas', this.venda)
      .then(resp => {
        this.message = resp.data.message
        this.typeMessage = resp.data.success
        if (resp.data.success) {
          this.LoadPage()
          this.venda = {}
          this.ListarVendas()
        }
      })
    },
    Delete (id) {
      if (id) {
        this.$http.delete(process.env.SERVER + '/api/vendas/' + id)
        .then(resp => {
          this.ListarVendas()
        })
      }
    },
    LoadPage () {
      setTimeout(() => {
        this.message = null
        this.typeMessage = null
      }, 50000)
    }
}}
</script>
<style scoped>
#cabecalho{margin-top: 30px;}
.message{border:1px solid #ccc; padding: 8px; margin-bottom: 18px;}
.message.success{ background-color: rgba(0, 229, 0, 0.3);}
.message.erro{ background-color: rgba(255, 0, 9, 0.3);}
</style>
