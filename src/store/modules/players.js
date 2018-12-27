import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  players: [
    {
      'name': 'Neymar',
      'position': 'center midfielder'
    },
    {
      'name': 'Lionel Messi',
      'position': 'left-back'
    },
    {
      'name': 'Roberto Firmino',
      'position': 'center midfielder'
    },
    {
      'name': 'Roberto Contesque',
      'position': 'goalkeeper'
    },
    {
      'name': 'Ivan Raktic',
      'position': 'right-back'
    },
    {
      'name': 'Raheem Sterling',
      'position': 'center forward'
    },
    {
      'name': 'Kevin De Bruyne',
      'position': 'left midfielder'
    },
    {
      'name': 'Kevin De Wit',
      'position': 'right-back'
    },
    {
      'name': 'Cristiano Ronaldo',
      'position': 'right-back'
    }
  ],
  positions: [
    {
      'position': 'center midfielder'
    },
    {
      'position': 'left-back'
    },
    {
      'position': 'goalkeeper'
    },
    {
      'position': 'right-back'
    },
    {
      'position': 'center forward'
    },
    {
      'position': 'left midfielder'
    },
    {
      'position': 'center-back'
    }
  ],
  selectedPlayers: []
}

const getters = {
  [getterNames.players]: (state, getters) => (
    state.players
  ),
  [getterNames.posistions]: (state, getters) => (
    state.positions
  ),
  [getterNames.selected]: (state, getters) => (
    state.selectedPlayers
  )
}

const actions = {

}

const mutations = {
  [mutationTypes.ADD_PLAYER] (state, player) {
    state.selected.push(player)
  },

  [mutationTypes.REMOVE_PLAYER] (state, player) {
    state.selected = state.selected.filter(pla => (pla !== player))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
