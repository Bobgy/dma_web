# Web Server of DanMaku Arena

This is web server of my project for b/s programming course. It is a multiplayer game which belongs to the STG (Shoot 'Em Up Games) genre.

This webserver that serves [*DanMaku Arena*](https://github.com/Bobgy/dma
) or [*DMA*](https://github.com/Bobgy/dma
), which also provides user registration, score management, etc.

Although built for serving *DMA*, this project is loosely coupled with the game. *DMA* is only included as a node_module [*danmaku.arena*](http://npmjs.com/package/danmaku.arena). Code related to danmaku.arena is limited to less than 10 lines. So this shall serve any multiplayer game of similar requirements.

This server is built with express and mysql.

## How to

- Dependencies
 - Node
 - Coffee (only for building)
 - mysql
 - other dependencies that can be auto installed


- Auto install dependencies
```
$> npm install
```

- Start the server and listen to port 3000
```
$> npm start
```

- Visit http://localhost:3000.
