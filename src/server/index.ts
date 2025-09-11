import HttpHandle from '~/server/class/HttpHandle';

const httpHandle: HttpHandle = new HttpHandle({
  debug: true,
  logLevel: 7,
  onlyLogFail: false,
});
httpHandle.listen();
