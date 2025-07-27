## 실행 방법

아래 명령어를 실행한 후 localhost:3000으로 접속

```bash
npm run build
npm run start
```

## 폴더 구조 설명

```
📦 my-nextjs-app/
├── app/                         # App Router 루트 디렉토리
│   ├── api/                     # 서버 api
│   ├── layout.tsx
│   └── page.tsx
│
├── components/                  # UI 컴포넌트
│   ├── common/                  # 공통 UI
│   ├── disclosure-data/         # 공시 데이터 컴포넌트
│   └── filter/                  # 필터 컴포넌트
│
├── constants/                   # enum, option 등 상수 모음
│
├── hooks/                       # 커스텀 훅
│
├── lib/                         # 서비스 로직
│
├── stores/                      # 전역 상태 관리
│
├── stories/                     # 스토리북 클라이언트 테스트코드
│   └── __mocks__                # 모킹 데이터
│
├── types/                       # 타입 정의
│
├── utils/                       # 유틸리티 함수
│
└── README.md                    # 프로젝트 설명서
```
