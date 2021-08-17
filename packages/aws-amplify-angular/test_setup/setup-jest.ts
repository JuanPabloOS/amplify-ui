import 'jest-preset-angular';

declare global {
  interface Window {
    URL: any;
  }
}

window.alert = (msg) => {
  console.log(msg);
};

function noOp(): any {}

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
}

class MockWorker implements Worker {
  onmessage = noOp;
  postMessage = noOp;
  terminate = noOp;
  addEventListener = noOp;
  removeEventListener = noOp;
  onerror = noOp;
  onmessageerror = noOp;
  dispatchEvent(event: Event): boolean {
    throw new Error('Method not implemented.');
  }
}

window.Worker = MockWorker;
