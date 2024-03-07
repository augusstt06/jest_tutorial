## Configuration for apply Vitest

### project configuration

```
pnpm create vite@latest
```

```json
{
  "react": "^18.2.0",
  "vite": "^5.1.4",
  "typescript": "^5.3.3"
}
```

```zsh
pnpm install
```

### Tools

- [Vitest](https://vitest.dev/guide/)
  - Vite 기반의 테스트 프레임워크
  - React를 사용할때 주로 Vite를 이용하여 번들링하므로 해당 프레임워크를 사용
- [MSW (Mock Service Worker)](https://mswjs.io/)
  - Service Worker를 이용한 api 모킹 라이브러리
    > Service Worker : 브라우저와 네트워크 사이의 가상 프록시
    - 클라이언트에서 HTTP 통신을 요청하면 Service Worker가 요청을 가로채 Mocking된 응답값을 반환하여 마치 서버와 통신하는 것처럼 해주는 라이브러리.
  - api 통신에 대한 테스트 코드 작성을 위하여 사용

### Install devDependencies

```zsh
pnpm add -D vitest msw @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

### script

```json
"scripts": {
    "test": "vitest --coverage",
    "test:run": "vitest --coverage run"
  },
```

### Run test

```zsh
pnpm test

# 일회성 테스트
pnpm test:run
```
