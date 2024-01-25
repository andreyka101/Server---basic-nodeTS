# создание сервера nodeTS

сначала нужно сделать сервер nodeJS

``` bash
npm init
```

подключаем express

``` bash
npm i express
```

подключить nodemon

``` bash
npm install --save-dev nodemon
```

___

после этого пишем в терминале:
``` bash
npm install -D ts-node
```

``` bash
npm install -D typescript
```

``` bash
npm install -D tslib @types/node
```

``` bash
npm i --save-dev @types/express
```

теперь создаём файл

``` bash
app.ts
```

и в него для проверки пишем

``` bash
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  console.log(req)

  res.send('Hello World')
})

app.listen(3700)
```

всё

<br/>

для запуска в консоле пишим

``` bash
npx nodemon app.ts
```

для запуска в scripts (сценарии npm) пишим

``` bash
"dev": "nodemon app.ts",
```
