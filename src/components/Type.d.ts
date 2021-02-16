import Message from './model/Message';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'Hello-world': Message;
    }
  }
}

