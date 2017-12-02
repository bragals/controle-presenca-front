import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import eventos from '@/components/eventos/eventos'
import eventosForm from '@/components/eventos/Form'
import participantes from '@/components/participantes/participantes'
import participantesForm from '@/components/participantes/Form'
import Presenca from '@/components/presenca/Presenca'
import vendas from '@/components/vendas/vendas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // Início Configuração de Rotas para Eventos
    {
      path: '/eventos',
      name: 'eventos',
      component: eventos
    },
    {
      path: '/eventos/Cadastro',
      name: 'Cadastro.eventos',
      component: eventosForm
    },
    {
      path: '/eventos/Edit/:id',
      name: 'editar.eventos',
      component: eventosForm
    },
    // Fim Configuração de Rotas para Eventos
    // Início Configuração de Rotas para Participantes
    {
      path: '/participantes',
      name: 'participantes',
      component: participantes
    },
    {
      path: '/participantes/Cadastro',
      name: 'Cadastro.participantes',
      component: participantesForm
    },
    {
      path: '/participantes/Edit/:id',
      name: 'editar.participantes',
      component: participantesForm
    },
    // Fim Configuração de Rotas para Participantes
    // Rotas para view Vendas
    {
      path: '/vendas',
      name: 'vendas',
      component: vendas
    },
    // /Rotas para view Presença
    {
      path: '/ControlePresenca',
      name: 'presenca',
      component: Presenca
    }
  ]
})
