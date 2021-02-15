import {Component, CreateElement, RenderContext } from 'vue';

export const HelloWord = (): Component => {

return {
  name: 'Hello-world',
  functional: true,
  props: {
    author : String
  },
  render: function (h, context) {
    context.props.author = 'Roger Testss'
    
    context.data.style = {
      color : '#ff99ff'
    }
    
    context.data.attrs = { ...context.data.attrs, ['data-test']: 'nomeRoger' }

    return h('div', context.data, [ h('h1', context.props.author)])
  }
}}