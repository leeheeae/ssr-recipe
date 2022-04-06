# 서버 사이드 렌더링 이해하기

> 서버 사이드 렌더링은 UI를 서버에서 렌더링 하는 것을 의미
> 서버 사이드 렌더링을 구현하면 사용자가 웹 서비스에 방문했을 때 서버 쪽에서 초기 렌더링을 대신해주고 사용자가 html을 전달 받을 때 그 내부에 렌더링된 결과물이 보임

## 서버 사이드 렌더링의 장점

- 구글, 네이버, 다음 등의 검색 엔진이 웹 애플리케이션의 페이지를 원활하게 수집할 수 있음
  - 리액트로 만든 SPA는 검색 엔진 크롤러 봇처럼 자바스크립트가 실행되지 않는 환경에서는 페이지가 제대로 나타나지 않음
- 초기 렌더링 성능을 개선할 수 있음
  - 자바스크립트 파일 다운로드가 완료되지 않은 시점에서도 html상에 사용자가 볼 수 있는 콘텐츠가 있기 때문에 대기 시간이 최소화되고, 이로 인해 사용자 경험도 향상됨

## 서버 사이드 렌더링의 단점

- 원래 브라우저가 해야 할 일을 서버가 대신 처리하는 것이므로 서버 리소스가 사용된다는 단점이 있음
  - 갑자기 수많은 사용자가 동시에 웹 페이지에 접속하면 서버에 과부하가 발생할 수 있음
  - 사용자가 많은 서비스라면 캐싱과 로드 밸런싱을 통해 성능을 최적화해 주어야 함
- 프로젝트의 구조가 좀 더 복잡해질 수 있고, 데이터 미리 불러오기, 코드 스플리팅과의 호환 등 고려해야할 사항이 많아져서 개발이 어려움

## 서버 사이드 렌더링과 코드 스플리팅 충돌

1. 서버 사이드 렌더링된 결과물이 브라우저에 나타남
2. 자바스크립트 파일 로딩 시작
3. 자바스크립트가 실행되면서 아직 불러오지 않은 컴포넌트를 null로 렌더링함
4. 페이지에서 코드 스프리팅된 컴포넌트들이 사라짐
5. 코드 스플리팅된 컴포넌트들이 로딩된 이후 제대로 나타남

### 문제점 개선 방법

- 이러한 이슈를 해결하기 위해 라우트 경로마다 코드스플리팅된 파일 중에서 필요한 모든 파일을 브라우저에서 렌더링하기 전에 미리 불러와야함
- Loadable Components 라이브러리에서 제공하는 기능을 써서 서버 사이트 렌더링 후 필요한 파일을 경로로 추출하여 렌더링 결과에 스크립트/스타일 태그를 삽입해주는 방법

---

### 프로젝트 사용 라이브러리

`react`,`react-dom`, `react-router-dom`


