import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.tsx';
// @ts-expect-error: Ignore PNG type declaration errors
import Logo from '../assets/logo.png'
import store  from '../store'

const logCallBack = (val: string) => {
  console.log(val)
}

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld
  },
  render(h) {
    const count = store.state.count
    console.log('count', count)
    return <div class="home">
      <img alt="Vue logo" src={Logo} ></img>
      <Hello-world author='Roger' text={`VueX counter ${count}`}/>
    </div>
  }
});
