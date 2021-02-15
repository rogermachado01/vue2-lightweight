import Vue, { Component } from 'vue';
import Message from '../model/Mensagem'

const sum = (times: number) => {
  return times += 1
}

const HelloWord = (): Component => {
  const state = Vue.observable({ times: 0 })

  return {
    name: 'Hello-world',
    functional: true,
    props: new Message(),
    render: function (h, context) {
      const props = context.props as unknown as Message
      props.author = 'Roger Tests' + state.times
      props.text = 'clicked ' + state.times

      context.data.style = {
        color: '#ff99ff'
      }

      context.data.on = {
        'click': () => {
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