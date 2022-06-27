FROM node:carbon
EXPOSE 8080
COPY server.js .
COPY healthy /tmp/
CMD node server.js > log.out
# 컨터이너에서 “cat /tmp/healthy” 명령어를 실행해서 성공하면 컨테이너를 정상으로 판단하고 실패하면 비정상으로 판단
