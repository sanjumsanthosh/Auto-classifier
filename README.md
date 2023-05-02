<p style="text-align: center" align="center">
  <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">
  <h1>Ts.ED - auto-classifier</h1>
  <br />
  <div align="center">
    <a href="https://cli.tsed.io/">Website</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://cli.tsed.io/getting-started.html">Getting started</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://api.tsed.io/rest/slack/tsedio/tsed">Slack</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://twitter.com/TsED_io">Twitter</a>
  </div>
  <hr />
</div>

> An awesome project based on Ts.ED framework

## Getting started

> **Important!** Ts.ED requires Node >= 14, Express >= 4 and TypeScript >= 4.

```batch
# install dependencies
$  install

# serve
$  start

# build for production
$  build
$  start:prod
```

<!-- example api documentaion -->

## API Documentation

- [Swagger](http://localhost:8083/doc/)

<!-- post api.  -->
<!-- curl -X 'POST' \
  'http://localhost:8083/rest/openai/predict' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "query": "Hackers can use SQL injection to bypass login",
  "type": "dance"
}' -->

<!-- respnse  {
  "corrected_sentance": "Hackers can bypass login using SQL injection.",
  "score": "4"
}-->

### API Endpoints

- POST `/rest/openai/predict`

  - Sample Request Body

    ```json
    {
      "query": "Hackers can use SQL injection to bypass login",
      "type": "dance"
    }
    ```

  - Sample Response Body

    ```json
    {
      "corrected_sentance": "Hackers can bypass login using SQL injection.",
      "score": "4"
    }
    ```

    

## Docker

```
# build docker image
docker compose build

# start docker image
docker compose up
```

## Barrelsby

This project uses [barrelsby](https://www.npmjs.com/package/barrelsby) to generate index files to import the controllers.

Edit `.barreslby.json` to customize it:

```json
{
  "directory": [
    "./src/controllers/rest",
    "./src/controllers/pages"
  ],
  "exclude": [
    "__mock__",
    "__mocks__",
    ".spec.ts"
  ],
  "delete": true
}
```
