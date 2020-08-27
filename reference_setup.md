# 2. PROJECT SETUP

**#2.0 Setting Up the Project**

1. 프로젝트 폴더를 만들위치를 정하고 npx 설치, create-react-app 

   ```javascript
   npm i npx -g
   npx create-react-app nomflix
   ```

2. prop-types 설치

   ```javascript
   yarn add prop-types
   ```

3. yarn 실행

   ```javascript
   yarn start
   ```

   

**.env 의 역할**

```NODE_PATH=src```

기본적으로 src파일을 보게 만들어준다.



**#2.1 React Router Part One**

**react router** ([`react-router-dom`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom))

github. https://github.com/ReactTraining/react-router

```javasc
yarn add react-router-dom
```



**필요한 page**

```
	src/Components

​		-App.js

​		-Routes.js

​	src/Routes

​		-Detail.js

​		-Home.js

​		-Search.js

​		-Tv.js
```



**router**

	- Tv
	- Search
	- Detail



**hashRouter를 사용한 router 만들기**

```javascript
import { HashRouter as Router, Route } from "react-router-dom";

...
export default = () => (
<Router>
    <Route path="/" exact component={...} />
</Router>
)
```

hashRouter는 쉽게 코드를 구현할 수 있지만 url에 # 이 삽입되면서 예뻐보이지 않는다.



>  **Router는 오직 하나의 child만 가질 수 있다.** _*따라서 fragment를 사용한다. (<></>)*_



**#2.2 React Router part Two**

**BrowserRouter를 사용한 router 만들기**

```javascript
import { BrowserRouter as Router, Route } from "react-router-dom";
```

-Composition: 두 개 이상의 Route를 동시에 랜더링하는 방식



**Redirect Router**

```javascript
import { BrowserRouter as Redirect} from "react-router-dom";

<Redirect from="*" to="/" /> {/* 일치하는 route가 하나도 없다면 /로 보낸다. */}
```



**Switch**

​	-한 번에 오직 하나의 Route만 Render하게 해준다.

​	사용법

​		`<Router></Router>`를 `<Switch></Switch>`로 감싸준다.



**exact의 활용**

```javascript
<Route path="/tv" exact component={TV} /> {/* exact 사용: 정확하게 /tv로 들어올 경우만 Route 동작 */}

<Route path="/search" component={Search} /> {/* exact 미사용: /search가 포함된 url의 경우 ex) /search/ex1, /search 둘 다 Search page를 호출 */}
```

