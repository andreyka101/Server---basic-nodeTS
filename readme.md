# создание сервера nodeTS

сначала нужно сделать сервер nodeJS

``` bash
https://github.com/andreyka101/Server---basic-nodeJS-express
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

создаём файл

``` bash
tsconfig.json
```

в него пишем

``` bash
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
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


