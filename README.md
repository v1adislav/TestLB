# Должно быть установлено

node.js - https://nodejs.org/ + npm

git - https://github.com/v1adislav

gulp

```bash
npm install -g gulp
```

# Как и где работаем
* рабочая директория: /src/
* результат development: /build/
* readme: /README.md

В проекте сборка фронтенда реализована с помощью gulp.
Пакетный менеджер npm. По возможности все ставим через него.

# Настройка окружения

```bash
npm i
```

```bash
gulp
```

Запустится сервер http://localhost:3000

## Сборка

запускается при выполнении команды gulp, при этом запускается сервер http://localhost:3000. Собирается в /build/.

### Как работаем

**!!** Ни чего не меняем руками в папке build.

Если нужно внести какие-то изменения в верстку, то вся работа ведется в /src/  сборкой и проверкой на http://localhost:3000.

Также **можно запускать отдельно нужные таски сборки**, например:
```bash
gulp sass
gulp watch
```


Вся работа (до и после интеграции) ведется в /src/

# Что есть

**gulp-uglify** - минификация js

**gulp-scss** - компилятор scss

**gulp-imagemin** - минификация картинок

**gulp-autoprefixer** - автопрефиксы

**browsersync** - вебсервер.

**circle plugin progress** - плагин прогресс бар (https://github.com/rendro/easy-pie-chart)