# Express Live coding 

### Setup

Using express generator to get things going fast, based on express docs [Getting started](http://expressjs.com/en/starter/generator.html).

Global install express generator:
```
npm install express-generator -g
```
Run it with the flags:
```
express express-app --ejs --css less --git
```

### Setup

#### Middleware
```
npm install --save helmet compression
```
- helmet - security middleware
- compression - gzip middleware

#### Client js build

```
npm install --save babelify browserify-middleware
```
#### nodemon
```
npm install --save nodemon
```
Add script:
```
"dev": "nodemon --watch ./ --ignore ./public ./bin/www"
```