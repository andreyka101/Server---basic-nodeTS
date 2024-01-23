# создание сервера nodeTS

сначала нужно сделать сервер nodeJS и подключить к нему express

``` bash
https://github.com/andreyka101/Server---basic-nodeJS-express
```

подключить nodemon

``` bash
npm i nodemon
```

создать файл

``` bash
nodemon.json
```

в него нужно вписать 

``` bash
фыв
```

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

создаём файл

``` bash
tsconfig.json
```

в него пишем

``` bash
{
    "compilerOptions": {
      "strict": true,
      "module": "ES2020",
      "moduleResolution": "Node",
      "target": "ES2017",
      "lib": ["ESNext"],
      "skipLibCheck": true,
      "esModuleInterop": true,
      "baseUrl": ".",
      "paths": {
        "@/": ["./*"]
      }
    },
    "ts-node": {
        "transpileOnly": true,
        "compilerOptions": {
            "module": "CommonJS"
        }
    },
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
  }
```

теперь создаём файл

``` bash
app.ts
```

и в него для проверки пишем

``` bash
console.log("hello world")
```


