import Vue, { Component } from 'vue';
import Message from '../model/Mensagem'
import store  from '../store'

const sum = (times: number) => {
  return times += 1
}

function  HelloWord(): Component {
  const state = Vue.observable({ times: 0 })

  return {
    inheritAttrs: false,
    name: 'Hello-world',
    functional: true,
    props: new Message(),
    render: function (h, context) {
      const props = context.props as unknown as Message
      props.author = `${props.author} ${state.times}`
      props.text = `${props.text} ${state.times}`
      context.data.style = {
        color: '#ff99ff'
      }
 
      context.data.on = {
        'click': () => {
          store.commit('increment', { amount: 10})
          state.times = sum(state.times)
          console.log('asdasd')
        }
      }

      context.data.attrs = { ...context.data.attrs, ['data-test']: 'nomeRoger' }
      return h('button', context.data, [h('h1', context.props.author)])
    }
  }
}

export default HelloWord()