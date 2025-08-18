import HttpHandle from '~/server/class/HttpHandle';

const httpHandle: HttpHandle = new HttpHandle({
  debug: true,
  logLevel: 7,
});
httpHandle.listen();
