var os = require('os');
var fs = require('fs');
var http = require('http');
var handleRequest = function(request, response) {
  if(request.url == '/readiness') {
    if(fs.existsSync('/tmp/healthy')){
      // healthy      response.writeHead(200);
      response.end("Im ready I'm  "+os.hostname() +" \n");
    }else{
      response.writeHead(500);
      response.end("Im not ready I'm  "+os.hostname() +" \n");
    }
  }else{
    response.writeHead(200);
    response.end("Hello World! I'm  "+os.hostname() +" \n");
  }
  //log  console.log("["+
		Date(Date.now()).toLocaleString()+
		"] "+os.hostname());
}
var www = http.createServer(handleRequest);
www.listen(8080);
// /readiness 를 호출하면 파일 시스템내에  /tmp/healthy라는 파일이 있으면 HTTP 응답코드 200 정상을 리턴하고, 파일이 없으면 HTTP 응답코드 500 비정상을 리턴하는 코드
