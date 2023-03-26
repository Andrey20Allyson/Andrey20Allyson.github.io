import '.';

const eventSource = new EventSource('/events');

let reloaded = false;

eventSource.onmessage = (ev: MessageEvent<string>) => {
  const { data } = ev;

  const args = data.split(' ');

  if (args[0] === 'reload') {
    if (reloaded) return;
    reloaded = true;
    location.reload()  
  }
}