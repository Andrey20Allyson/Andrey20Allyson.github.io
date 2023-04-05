import fs from 'fs/promises';

export async function* watchDocs() {
  const fileChangedTimes = new Map<string, number>();

  for await (const info of fs.watch('docs/')) {
    const changedTime = fileChangedTimes.get(info.filename);
    const now = Date.now();

    if (!changedTime || now - changedTime > 1000) {
      fileChangedTimes.set(info.filename, now);
      continue;
    }
    
    yield info;
  }
}