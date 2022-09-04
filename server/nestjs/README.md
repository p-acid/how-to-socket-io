# Socket.io server by Nest.js

[Nest.js](https://docs.nestjs.com/)를 활용하여 구현한 Socket.io 레포지토리입니다.

# Build

## Nest Project

```sh
# 홈 디렉토리에서 nestjs cli 전역 설치
npm i -g @nestjs/cli

# 위치한 디렉토리에 프로젝트 생성
new nest .

# nest.js 프로젝트명으로 별도 디렉토리와 함께 생성
new nest [project-name]
```

## Dependencies

```sh
yarn add @nestjs/websockets @nestjs/platform-socket.io

# types
yarn add -D @types/socket.io
```
