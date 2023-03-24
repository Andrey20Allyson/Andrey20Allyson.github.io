import { bundle } from './lib/builder';

type Result = Awaited<ReturnType<typeof bundle>>;

function onBundled(result: Result) {
  console.log('bundler with success!');
}

bundle().then(onBundled);