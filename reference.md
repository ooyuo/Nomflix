# Setting up / React Router

**SETUP**

1. 프로젝트 폴더를 만들위치를 정하고 npx 설치, create-react-app

   ```javascript
   npx i npx -g
   npx create-react-app nomflix
   ```

2. prop-types 설치

   ```javascript
   yarn add prop-types
   ```

3) yarn 실행

   ```javascript
   yarn start
   ```

**.env 의 역할**

`NODE_PATH=src`

기본적으로 src파일을 보게 만들어준다.

**react router** ([`react-router-dom`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom))

github. https://github.com/ReactTraining/react-router

```javasc
yarn add react-router-dom
```

router

- Tv
- Search
- Detail

hashRouter를 사용한 router 만들기

```javascript
import { HashRouter as Router, Route } from "react-router-dom";
```

src/Components

​ -App.js

​ -Routes.js

src/Routes

​ -Detail.js

​ -Home.js

​ -Search.js

​ -Tv.js

\*\* Router는 오직 하나의 child만 가질 수 있다.

따라서 fragment를 사용한다. (<></>)
