import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.tsx';
// @ts-expect-error: Ignore PNG type declaration errors
import Logo from '../assets/logo.png'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld
  },
  render(h) {
    return <div class="home">
      <img alt="Vue logo" src={Logo} ></img>
      <Hello-world />
    </div>
  }
});
