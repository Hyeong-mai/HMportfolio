// 프로젝트 데이터
export const projects = [
  {
    id: 8,
    coverImage: "/image/project8/Project8Cover.png",
    githubLink: null,
    link: null,
    mainColor: "#4F46E5",
    name: "히든태그 커넥트 (HIDDENTAG CONNECT)",
    type: "team",
    tag: ["팀", "브랜드 보호 SaaS", "정품 인증", "AI 분석", "PM", "회사 프로젝트"],
    date: "2025.11 ~ 재직중 (신규 개발 2026.06 · 6/24 개발 완료, 7/1 배포)",
    description:
      "QR 스캔 기반 정품 인증 데이터로 브랜드를 보호하고 소비자 인사이트를 제공하는 B2B 관제형 SaaS입니다. ‘Scan to Connect, Connect to Value’ — 전 세계 스캔 관제부터 가품 제보, 소비자 인사이트, AI 리포트까지 제공합니다.",
    subDescription:
      "AI 개발 하네스와 세컨드 브레인을 활용해 신규 매출 기능을 단기간에 기획·개발했으며, 자동 EM 시스템으로 기술팀 최초의 직접 매출 성과를 냈습니다. (프론트엔드 메인 + PM)",
    skills: [
      "자동 EM(이메일 마케팅) 시스템 기획·구현 — 영업일 1.5일 만에 개발, 약 2주 만에 영업자 1인 5개월치 업무량 소화 → 기술팀 최초 매출",
      "신규 매출 기능 프로젝트 PM 담당 — 프론트엔드 메인, 백엔드·디자이너 리드 (6/24 완료·7/1 배포)",
      "통합 관제: 전 세계 스캔 지도(히트맵), 국가별 스캔량·월별 추이·성별/연령대 분석 시각화",
      "가품 대응: 소비자 제보 센터(신고 내역·국가별 비율·CSV 내보내기), 이상 가격 탐지",
      "소비자 인사이트(정품/가품 설문·응답자 프로필)·이벤트 효과 비교·프로모션(스캔/푸시) 분석",
      "AI 리포트: 스캔·제보·인사이트 데이터를 AI가 요약해 핵심 발견·다음 행동을 제안",
      "AI 개발 하네스 + 세컨드 브레인 구축·접목으로 개발 효율과 유지보수 안정성 향상",
    ],
    language: [
      {
        name: "React (React Query)",
        languageDescription:
          "React Query로 대규모 관제 데이터의 서버 상태를 효율적으로 관리하고, 캐싱·비동기 처리로 반응성 높은 관제 대시보드를 구현했습니다.",
      },
      {
        name: "Styled-components",
        languageDescription:
          "컴포넌트 단위의 일관된 디자인 시스템을 구축해 재사용 가능한 관제 UI와 반응형 레이아웃을 빠르게 구현했습니다.",
      },
      {
        name: "데이터 시각화 (지도·차트)",
        languageDescription:
          "전 세계 스캔을 지도 히트맵으로 표현하고, 추이(라인)·구성(도넛)·국가별(막대) 차트로 스캔·제보·설문 지표를 직관적으로 시각화했습니다.",
      },
      {
        name: "AI (LLM) 리포트·인사이트",
        languageDescription:
          "스캔·제보·설문 데이터를 LLM으로 요약해 AI 리포트·소비자 인사이트·신고 인사이트를 생성하고, 브랜드별 자동 EM 리포트를 작성했습니다.",
      },
      {
        name: "AI 개발 하네스 (Cursor / Claude)",
        languageDescription:
          "직접 구축한 AI 개발 하네스에 세컨드 브레인(지식 베이스)을 접목해, AI가 제 코드 스타일과 프로젝트 컨텍스트 위에서 동작하도록 만들었습니다. 이를 통해 자동 EM 시스템을 영업일 1.5일 만에 완성하는 등 개발 속도와 유지보수 안정성을 동시에 확보했습니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "자동 EM(이메일 마케팅) 시스템 구축 — 기술팀 최초 매출",
        contributionLi: [
          {
            title: "트렌드 분석 → 브랜드 추출 → 리포트 → 자동 발송 파이프라인",
            ex: [
              "트렌드 분석과 브랜드 추출을 자동화하고, 브랜드별 리포트를 생성해 담당자에게 자동으로 메일링하는 전 과정을 하나의 파이프라인으로 구현했습니다.",
              "AI 개발 하네스를 활용해 영업일 1.5일 만에 개발을 완료했고, 도입 약 2주 만에 영업 담당자 1인 기준 5개월치 업무량을 소화하며 영업 리소스를 대폭 절감했습니다.",
            ],
          },
          {
            title: "매출로 이어진 기능 발굴",
            ex: [
              "단순 기능 개발을 넘어 실사용자가 필요로 하고 매출로 이어질 수 있는 기능을 기획 단계부터 주도하여, 기술팀 최초의 직접 매출 기여 사례를 만들었습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "신규 매출 기능 프로젝트 PM",
        contributionLi: [
          {
            title: "기획부터 배포까지 단기간 완주",
            ex: [
              "프론트엔드를 메인으로 하며 백엔드 개발자·디자이너와의 협업을 리드하여, 신규 위젯 플랫폼 기능을 6월 24일 개발 완료하고 7월 1일 배포했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "통합 관제 & 데이터 시각화",
        contributionLi: [
          {
            title: "전 세계 스캔 관제 대시보드",
            ex: [
              "전 세계 스캔을 지도 히트맵으로 표현하고, 총 누적·정품·가품 스캔, 국가별 스캔량, 월별 추이, 성별·연령대, 핫스팟(가품 발생) 등을 한 화면에서 관제하도록 구현했습니다.",
              "RegionScan(지역 스캔 분석) 기능을 고도화하고, 결제 흐름·인터랙션·트래픽 등 사용성 개선을 함께 수행했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "가품 대응 & AI 인사이트",
        contributionLi: [
          {
            title: "제보·인사이트·AI 리포트",
            ex: [
              "소비자 제보 센터(가품 신고 내역·국가별 신고 비율·IQR 상세·CSV 내보내기)와 이상 가격 탐지로 가품 유통을 모니터링하도록 구현했습니다.",
              "정품/가품 설문 기반 소비자 인사이트와, 스캔·제보·설문 데이터를 AI가 요약해 핵심 발견·다음 행동을 제안하는 AI 리포트를 구성했습니다.",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "영업 리소스 병목 — 자동화로 매출 구조 전환",
        TroubleLi: [
          {
            title: "문제점",
            ex: "브랜드 발굴 → 리포트 작성 → 담당자 컨택으로 이어지는 영업 프로세스가 사람 손에 의존해 리소스 병목이 컸고, 기술팀은 직접적인 매출 기여 경로가 없었습니다.",
          },
          {
            title: "해결",
            ex: "AI 개발 하네스를 활용해 트렌드 분석·브랜드 추출·리포트 생성·자동 발송을 하나로 잇는 자동 EM 시스템을 영업일 1.5일 만에 구축했습니다. 도입 약 2주 만에 영업자 1인 기준 5개월치 업무량을 소화하며, 기술팀 최초의 직접 매출 성과로 이어졌습니다.",
          },
        ],
      },
      {
        TroubleTitle: "빠른 개발 속도와 유지보수 안정성의 양립",
        TroubleLi: [
          {
            title: "문제점",
            ex: "AI를 단발성으로 사용하면 결과물이 프로젝트 맥락·코드 스타일과 어긋나 '한 번 쓰고 버리는 코드'가 되기 쉬웠고, 이후 유지보수 비용이 커졌습니다.",
          },
          {
            title: "해결",
            ex: "프로젝트 맥락·의사결정 기록·개발 원칙·작업 로그를 세컨드 브레인에 축적하고, 하네스가 이를 참조하도록 설계했습니다. AI가 제 코드 스타일과 컨텍스트 위에서 동작하게 되면서 개발 속도와 유지보수 안정성을 동시에 확보했으며, 현재 이 프로세스를 팀 표준으로 내재화·고도화하고 있습니다.",
          },
        ],
      },
    ],
    images: [
      { src: "/image/project8/image1.png", title: "랜딩 (Scan to Connect)" },
      { src: "/image/project8/image2.png", title: "통합 관제 (스캔 지도)" },
      { src: "/image/project8/image3.png", title: "소비자 제보 센터" },
      { src: "/image/project8/image4.png", title: "소비자 인사이트" },
      { src: "/image/project8/image5.png", title: "AI 리포트" },
    ],
  },
  {
    id: 9,
    coverImage: "/image/project9/Project9Cover.png",
    githubLink: null,
    link: null,
    mainColor: "#6C63FF",
    name: "우클",
    type: "single",
    tag: ["개인", "React-Native", "학창시절 커뮤니티", "AI 개발", "사이드 프로젝트"],
    date: "2026.07 ~ 2026.08 (약 2주 · 개발 완료, 배포 진행 중)",
    description:
      "‘그 시절 교실의 문이 다시 열립니다.’ 출신 학교(초·중·고)별로 옛 친구를 다시 찾고 소통하는 학창시절 커뮤니티 앱입니다.",
    subDescription:
      "학교·졸업연도 기반 커뮤니티, 친구 찾기, 프로필(다이어리·방명록·프로필 음악), 친구 초대 크레딧, 꾸미기 스토어까지 갖춘 소셜 앱으로, AI 개발 하네스와 세컨드 브레인을 활용해 약 2주 만에 기획~개발을 완성했습니다. (다국어 한/영/일 지원, 배포 진행 중)",
    skills: [
      "출신 학교(초·중·고)·졸업연도·반 기반 커뮤니티 및 옛 친구 소식 피드",
      "친구 찾기(추억 속 짝꿍 찾기), 친구 초대 이벤트 + 크레딧 리워드",
      "프로필: 커버·상태·관심사 태그, 다이어리·방명록, 프로필 음악(‘지금 흐르는 노래’), 피드/영상",
      "크레딧 충전, 선물하기/받은 선물함, 꾸미기 스토어 등 소셜·수익화 기능",
      "AI 개발 하네스 + 세컨드 브레인으로 약 2주 만에 기획~개발 완료, 다국어(한/영/일) 지원",
    ],
    language: [
      {
        name: "React Native (Expo)",
        languageDescription:
          "Expo 기반 React Native로 iOS/Android 양쪽에서 동일한 사용자 경험을 제공하며, 빠른 반복 개발과 배포 파이프라인을 구성했습니다.",
      },
      {
        name: "TypeScript",
        languageDescription:
          "정적 타입으로 런타임 오류를 줄이고, 다국어 리소스와 상태 관리에서 타입 안정성을 확보했습니다.",
      },
      {
        name: "Firebase",
        languageDescription:
          "인증·실시간 데이터·푸시 알림·저장소 등을 Firebase로 구성해 커뮤니티·피드·친구·선물하기 기능의 백엔드를 1인 개발에서도 빠르게 마련했습니다.",
      },
      {
        name: "AI 개발 하네스 (Cursor / Claude)",
        languageDescription:
          "세컨드 브레인을 접목한 AI 개발 하네스로 기획·개발·인프라를 단기간에 병행하여, 약 2주 만에 배포 직전 단계까지 완성했습니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "학교별 커뮤니티 & 친구 찾기",
        contributionLi: [
          {
            title: "출신 학교·졸업연도 기반 커뮤니티",
            ex: [
              "초·중·고 출신 학교와 졸업연도·반을 기반으로 커뮤니티를 구성하고, 옛 친구들의 새로운 소식을 모아보는 피드를 구현했습니다.",
              "‘추억 속의 짝꿍 찾기’ 등 옛 친구를 다시 찾는 흐름을 설계했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "프로필 & 소셜 기능",
        contributionLi: [
          {
            title: "미니홈피형 개인 프로필",
            ex: [
              "커버·상태·관심사 태그, 다이어리·방명록, 피드/영상 탭, 프로필 음악(‘지금 흐르는 노래’) 재생까지 개인 표현 공간을 구현했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "그로스 & 수익화",
        contributionLi: [
          {
            title: "초대 리워드 · 크레딧 · 스토어",
            ex: [
              "친구 초대 시 양쪽에 크레딧을 지급하는 리워드, 크레딧 충전, 선물하기/받은 선물함, 꾸미기 스토어 등 소셜·수익화 요소를 설계했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "1인 풀스택 & 다국어(한/영/일)",
        contributionLi: [
          {
            title: "AI 하네스로 2주 내 완성 + i18n",
            ex: [
              "AI 개발 하네스와 세컨드 브레인을 활용해 기획·프론트엔드·백엔드·인프라를 혼자 아우르며 약 2주 만에 개발을 완료했습니다.",
              "react-i18next 기반으로 한/영/일을 지원하고, 언어 전환이 즉시 반영되도록 구성했습니다.",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "다국어(i18n) 언어 전환이 즉시 반영되지 않는 문제",
        TroubleLi: [
          {
            title: "문제점",
            ex: "모듈 스코프에서 번역 함수를 한 번 호출해 상수로 저장하다 보니, 언어를 전환해도 이미 만들어진 문자열이 갱신되지 않아 화면 일부가 이전 언어로 남는 문제가 있었습니다.",
          },
          {
            title: "해결",
            ex: "번역 값을 모듈 로드 시점에 고정하지 않고, 렌더 시점(컴포넌트 내부/함수 호출 시)마다 t()를 호출하도록 변경해 언어 전환이 전 화면에 즉시 반영되도록 했습니다. 서버에서 내려오는 고정 값은 클라이언트 다국어 리소스로 매핑해 일관성을 유지했습니다.",
          },
        ],
      },
    ],
    images: [
      { src: "/image/project9/image1.png", title: "온보딩" },
      { src: "/image/project9/image2.png", title: "홈 / 내 학창시절" },
      { src: "/image/project9/image3.png", title: "프로필" },
      { src: "/image/project9/image4.png", title: "마이 / 크레딧" },
    ],
  },
  {
    id: 10,
    coverImage: "/image/project10/Project10Cover.png",
    githubLink: "https://github.com/lookpickmanager/LookPick",
    link: "https://lookpick.co.kr",
    mainColor: "#2563EB",
    name: "LookPick",
    type: "single",
    tag: ["개인", "AI 매칭", "B2B 플랫폼", "React", "사이드 프로젝트"],
    date: "2025.08 ~ 2026.03 (7개월, 1인 개발)",
    description:
      "AI가 요구사항을 정리하고 검증된 기업을 매칭해주는 B2B 서비스 마켓플레이스로, AI 매칭 상담·공개 RFQ 마켓·구독형 기업 운영 대시보드를 갖춘 풀스택 플랫폼입니다.",
    subDescription:
      "‘필요한 서비스, 딱 맞는 파트너를 빠르게.’ AI 매칭 상담부터 공개 RFQ 경쟁 제안, 통계·지표 기반 기업 운영 대시보드까지 기획·디자인·개발·인프라·운영 전 과정을 1인으로 완주했습니다.",
    skills: [
      "AI 매칭 상담: 카테고리·세부 분야를 단계별로 선택하면 AI가 요구사항을 정리하고 검증된 기업을 추천 + 견적서 생성",
      "공개 RFQ 마켓: AI 공고 등록 → 여러 기업의 경쟁 제안 (제안 수·예산·마감·진행중/마감/채택완료 상태 관리)",
      "구독형 기업 운영 대시보드: 노출·클릭·조회수 추이, 검색 유입 키워드 TOP10, 유입 채널 분석 등 통계·지표 제공",
      "팀원·게시물·구독 플랜·결제 수단 관리 및 서비스/기업 검색·카테고리 탐색",
      "게시물 소유권 귀속(Owner/Admin/User) 권한 제어, AWS 인프라 직접 구축·무중단 배포(PM2)·Cloudflare 연동",
    ],
    language: [
      {
        name: "React 18",
        languageDescription:
          "AI 매칭 마법사, 공개 RFQ 마켓, 구독형 기업 운영 대시보드 등 복잡한 화면과 권한별 뷰를 컴포넌트 기반으로 구현했습니다.",
      },
      {
        name: "Node.js (ESM)",
        languageDescription:
          "AI 매칭·견적, RFQ 공고·제안, 소유권 귀속 및 권한(Owner/Admin/User) 제어, 통계·지표 집계 API를 직접 설계·구현했습니다.",
      },
      {
        name: "PostgreSQL",
        languageDescription:
          "기업·서비스·공고·제안·구독 데이터를 관계형으로 모델링하고, 노출/클릭/유입 채널 등 통계 지표 집계를 안정적으로 처리했습니다.",
      },
      {
        name: "AI (LLM) 매칭·견적",
        languageDescription:
          "사용자가 단계별로 입력한 요구사항을 LLM으로 정리해 검증된 기업을 매칭하고, 견적서와 공개 공고(RFQ)를 자동 생성하는 AI 상담 플로우를 구현했습니다.",
      },
      {
        name: "AWS / Cloudflare",
        languageDescription:
          "AWS EC2·RDS·S3로 인프라를 직접 구축하고 PM2로 무중단 배포를 운영했으며, Cloudflare DNS/SSL 설정까지 서비스 운영 사이클 전체를 경험했습니다.",
      },
      {
        name: "AI 개발 하네스 (Cursor / Claude)",
        languageDescription:
          "세컨드 브레인을 접목한 AI 개발 하네스로 프론트엔드·백엔드·인프라를 병행하며 7개월간 1인 풀스택 개발을 지속 가능하게 운영했습니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "AI 매칭 상담 & 견적 자동화",
        contributionLi: [
          {
            title: "단계별 입력 → AI 기업 추천 + 견적",
            ex: [
              "대분류·세부 분야를 단계별로 선택하는 마법사 UI를 구현하고, 입력한 요구사항을 AI가 정리해 검증된 기업을 추천하고 견적서를 함께 제시하도록 설계했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "공개 RFQ 마켓 & 경쟁 제안",
        contributionLi: [
          {
            title: "AI 공고 등록 → 여러 기업 경쟁 제안",
            ex: [
              "AI 공고 등록으로 요구사항을 정리해 공개 마켓에 올리면 여러 기업이 경쟁 제안을 보내는 구조를 구현했습니다.",
              "제안 수·예산·마감·상태(진행중/마감/채택완료)와 검색·정렬을 제공해 요청자가 제안을 한눈에 비교·관리할 수 있게 했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "구독형 기업 운영 대시보드",
        contributionLi: [
          {
            title: "통계·지표 & 운영 관리",
            ex: [
              "노출(Impressions)·클릭(Clicks)·조회수 추이, 검색 유입 키워드 TOP10, 유입 경로(네이버/직접/구글/SNS) 등 통계·지표를 시각화했습니다.",
              "기업 정보·팀원·게시물·구독 플랜·결제 수단까지 소속 회사 범위로 제한된 운영 화면을 제공했습니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "인프라 구축 및 무중단 배포",
        contributionLi: [
          {
            title: "AWS 인프라 + PM2 + Cloudflare",
            ex: [
              "AWS EC2·RDS·S3로 인프라를 직접 구축하고 PM2 기반 무중단 배포를 운영했으며, Cloudflare DNS/SSL을 연동해 안정적인 서비스 환경을 구성했습니다.",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "Cloudflare/Nginx 리다이렉트 루프(301)와 CORS(Preflight) 장애 복구",
        TroubleLi: [
          {
            title: "문제점",
            ex: "Cloudflare와 Nginx를 연동하는 과정에서 리다이렉트 루프(301)가 발생하고, CORS Preflight(OPTIONS) 요청이 차단되어 API 통신이 실패했습니다.",
          },
          {
            title: "해결",
            ex: "브라우저 네트워크 탭과 서버 로그를 대조해 OPTIONS 요청에 대한 204 응답 누락을 원인으로 특정했습니다. Nginx 설정에서 Preflight 요청을 204로 정상 응답하도록 수정하여 통신 장애를 복구하고 서비스를 안정화했습니다.",
            code: `
# Nginx - CORS Preflight(OPTIONS) 처리
location /api/ {
  if ($request_method = OPTIONS) {
    add_header 'Access-Control-Allow-Origin' $http_origin always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;
    add_header 'Access-Control-Allow-Credentials' 'true' always;
    return 204;   # Preflight는 204로 즉시 응답
  }
  proxy_pass http://127.0.0.1:4000;
}`,
          },
        ],
      },
    ],
    images: [
      { src: "/image/project10/image1.png", title: "메인 / AI 견적·공고" },
      { src: "/image/project10/image2.png", title: "AI 매칭 상담" },
      { src: "/image/project10/image3.png", title: "공개 RFQ 마켓" },
      { src: "/image/project10/image4.png", title: "기업 운영 대시보드" },
    ],
  },
  {
    id: 4,
    coverImage: "/image/project4/Project4Cover.png",
    githubLink: "https://github.com/Hyeong-mai/hingom_photopress",
    link: null,
    mainColor: "#0081FF",
    name: "Photo Press",
    type: "team",
    tag: ["팀", "Next.js", "키오스크", "회사 프로젝트"],
    date: "HINGOM 입사 이후 첫 프로젝트",
    description:
      "HINGOM 입사 후 진행한 첫 번째 키오스크 연동 웹앱 프로젝트로, QR을 통해 접속한 사용자들이 사진을 꾸미고 포토카드나 인화지 형태로 출력할 수 있도록 구현한 웹 기반 디자인 플랫폼입니다.",
    subDescription:
      "직관적인 사용자 경험을 제공하기 위해 UI/UX에 중점을 두었으며, 프레임 선택부터 캔버스 편집, 최종 출력까지의 전 과정을 웹으로 구현하였습니다.",
    skills: [
      "QR 스캔 후 웹 앱 접속을 통한 사용자 인터페이스 제공",
      "프레임 및 출력 타입(포토카드, 인화지 등) 선택 기능",
      "Canvas 기반의 이미지 꾸미기 및 편집 기능",
      "최종 이미지 키오스크 전송 및 출력 처리 기능",
    ],
    language: [
      {
        name: "React",
        languageDescription:
          "React 18을 기반으로 한 컴포넌트 기반 개발로, 효율적인 상태 관리와 재사용 가능한 UI 컴포넌트를 구현했습니다.",
      },
      {
        name: "TypeScript",
        languageDescription:
          "정적 타입 지원으로 런타임 오류를 줄이고 코드의 신뢰성을 높였으며, 특히 복잡한 상태 관리와 API 통신에서 타입 안정성을 보장했습니다.",
      },
      {
        name: "Fabric.js",
        languageDescription:
          "Canvas 기반의 이미지 편집 기능을 구현하기 위해 Fabric.js를 활용하여 드래그, 크기 조절, 회전 등 다양한 이미지 조작 기능을 구현했습니다.",
      },
      {
        name: "Redux Toolkit",
        languageDescription:
          "전역 상태 관리를 위해 Redux Toolkit을 사용하여 복잡한 상태 로직을 효율적으로 관리하고, 비동기 작업을 처리했습니다.",
      },
      {
        name: "Tailwind CSS",
        languageDescription:
          "유틸리티 기반의 CSS 프레임워크를 활용하여 빠른 스타일링과 반응형 디자인을 구현했으며, 일관된 디자인 시스템을 적용했습니다.",
      },
      {
        name: "React Router",
        languageDescription:
          "클라이언트 사이드 라우팅을 구현하여 SPA(Single Page Application)의 특성을 활용한 부드러운 페이지 전환과 사용자 경험을 제공했습니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "Canvas 기반 사진 꾸미기 기능",
        contributionLi: [
          {
            title: "프레임 선택 및 이미지 드래그/크기 조절",
            ex: [
              "사용자가 업로드한 이미지를 캔버스 상에서 자유롭게 이동 및 크기 조절 가능",
              "프레임과 스티커, 텍스트 요소를 추가하여 사용자 맞춤 꾸미기 기능 제공",
            ],
          },
          {
            title: "최종 출력물 전송 처리",
            ex: [
              "캔버스에서 편집한 결과를 이미지로 렌더링한 후, 키오스크 서버로 전송하여 선택한 출력 방식(포토카드, 인화지 등)으로 결과물 출력 처리",
            ],
          },
        ],
      },
      {
        contributionTitle: "QR 접속 및 세션 관리",
        contributionLi: [
          {
            title: "QR 기반 접근 로직 구현",
            ex: [
              "키오스크에서 발급된 QR을 스캔하면 사용자는 해당 세션에 자동 연결되어 웹앱 접근",
              "각 세션은 고유한 식별자(ID)를 기반으로 상태를 유지하며, 사용자의 출력 진행을 추적",
            ],
          },
        ],
      },
      {
        contributionTitle: "UI/UX 설계 및 개선",
        contributionLi: [
          {
            title: "사용자 경험 최적화",
            ex: [
              "디자인 초안부터 사용자 피드백을 반영하여 캔버스 사용성 향상",
              "단계별 프로세스(프레임 선택 → 편집 → 출력)로 사용자 편의성 극대화",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "Fabric.js 캔버스 상태의 Redux 통합 및 상태 관리 최적화",
        TroubleLi: [
          {
            title: "문제점",
            ex: "Fabric.js 캔버스와 Redux를 연동하면서 발생한 주요 문제들:\n1. 캔버스의 복잡한 객체 구조(이미지, 텍스트, 스티커 등)를 Redux store에 저장할 때 직렬화 문제 발생\n2. 캔버스 객체의 순환 참조로 인한 JSON 직렬화 오류\n3. 상태 변경 시 전체 캔버스 객체를 다시 그려야 하는 성능 문제\n4. 이미지, 텍스트, 스티커 등 다양한 객체 타입의 상태 관리 복잡성\n5. 이벤트 발생 빈도가 높아 상태 업데이트가 과도하게 발생",
          },
          {
            title: "해결",
            ex: "캔버스 상태 관리 시스템을 효율적으로 재설계했습니다:\n1. 상태 직렬화 최적화\n   - 필요한 속성만 선택적으로 직렬화\n   - 순환 참조 문제 해결을 위한 객체 구조 재설계\n   - 이미지 데이터는 참조만 저장하고 실제 데이터는 별도 관리\n2. 상태 업데이트 최적화\n   - 이벤트 디바운싱/쓰로틀링 적용\n   - 배치 처리로 여러 상태 변경을 한 번에 처리\n   - 상태 변경 시 필요한 부분만 선택적으로 업데이트\n3. 객체 타입별 상태 관리 전략 수립\n   - 이미지, 텍스트, 스티커 등 각 객체 타입별 최적화된 상태 관리\n   - 객체 속성 변경 시 효율적인 상태 업데이트",
            code: `
    // Redux 상태 구조 최적화
    const canvasSlice = createSlice({
      name: 'canvas',
      initialState: {
        objects: {
          images: [],
          texts: [],
          stickers: []
        },
        canvas: {
          width: 0,
          height: 0,
          zoom: 1
        }
      },
      reducers: {
        updateCanvasState: (state, action) => {
          const { objects, canvas } = action.payload;
          // 필요한 속성만 선택적으로 업데이트
          state.objects = objects.map(obj => ({
            type: obj.type,
            id: obj.id,
            left: obj.left,
            top: obj.top,
            scaleX: obj.scaleX,
            scaleY: obj.scaleY,
            angle: obj.angle,
            // 이미지 데이터는 참조만 저장
            imageRef: obj.type === 'image' ? obj.imageRef : undefined
          }));
          state.canvas = canvas;
        }
      }
    });
    
    // 이벤트 처리 최적화
    const setupCanvasEvents = (canvas, store) => {
      let updateTimeout;
      
      const debouncedUpdate = (event) => {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
          // 필요한 속성만 직렬화
          const canvasState = canvas.toJSON([
            'selectable',
            'hasControls',
            'lockMovementX',
            'lockMovementY',
            'lockRotation',
            'lockScalingX',
            'lockScalingY'
          ]);
          store.dispatch(updateCanvasState(canvasState));
        }, 100);
      };
      
      // 이벤트 타입별 처리
      canvas.on('object:modified', debouncedUpdate);
      canvas.on('object:moving', throttle(debouncedUpdate, 50));
      canvas.on('object:scaling', throttle(debouncedUpdate, 50));
      canvas.on('object:rotating', throttle(debouncedUpdate, 50));
    };`,
          },
        ],
      },
      {
        TroubleTitle: "이미지 편집 undo/redo 시스템 구현 및 메모리 관리",
        TroubleLi: [
          {
            title: "문제점",
            ex: "undo/redo 기능 구현 시 발생한 주요 문제들:\n1. 모든 상태 변경을 저장하다 보니 메모리 사용량이 기하급수적으로 증가\n2. 대용량 이미지가 포함된 상태의 undo/redo 시 성능 저하\n3. 상태 히스토리 관리로 인한 브라우저 메모리 부족 현상\n4. 복잡한 편집 작업 시 undo/redo 동작이 불안정\n5. 상태 복원 시 이미지 데이터 손실 문제",
          },
          {
            title: "해결",
            ex: "undo/redo 시스템을 효율적으로 재설계했습니다:\n1. 상태 히스토리 관리 최적화\n   - 히스토리 크기 제한 (최대 20개)\n   - 오래된 상태 자동 삭제\n   - 메모리 사용량 모니터링 및 자동 정리\n2. 상태 저장 최적화\n   - 이미지 데이터는 참조만 저장\n   - 상태 변경 시 필요한 부분만 저장\n   - 상태 복원 시 이미지 데이터 보존\n3. 성능 개선\n   - 상태 변경 감지 최적화\n   - 상태 복원 시 렌더링 최적화\n   - 메모리 사용량 제어",
            code: `
    // undo/redo 시스템 구현
    const MAX_HISTORY = 20;
    
    const historyReducer = (state, action) => {
      switch (action.type) {
        case 'ADD_HISTORY':
          const newHistory = [...state.history];
          
          // 히스토리 크기 제한
          if (newHistory.length >= MAX_HISTORY) {
            // 가장 오래된 상태 제거 및 메모리 정리
            const removedState = newHistory.shift();
            cleanupState(removedState);
          }
          
          // 상태 최적화
          const optimizedState = optimizeState(action.payload);
          
          return {
            ...state,
            history: [...newHistory, optimizedState],
            currentIndex: newHistory.length
          };
          
        case 'UNDO':
          if (state.currentIndex > 0) {
            return {
              ...state,
              currentIndex: state.currentIndex - 1
            };
          }
          return state;
          
        case 'REDO':
          if (state.currentIndex < state.history.length - 1) {
            return {
              ...state,
              currentIndex: state.currentIndex + 1
            };
          }
          return state;
      }
    };
    
    // 상태 최적화
    const optimizeState = (state) => {
      return {
        ...state,
        objects: state.objects.map(obj => ({
          ...obj,
          // 이미지 데이터는 참조만 저장
          imageData: obj.type === 'image' ? obj.imageRef : obj.imageData,
          // 불필요한 속성 제거
          selectable: undefined,
          hasControls: undefined
        }))
      };
    };
    
    // 상태 복원
    const restoreState = (canvas, state) => {
      canvas.clear();
      
      // 객체 복원
      state.objects.forEach(obj => {
        if (obj.type === 'image') {
          // 이미지 객체 복원
          restoreImageObject(canvas, obj);
        } else {
          // 다른 객체 타입 복원
          canvas.add(obj);
        }
      });
      
      canvas.renderAll();
    };`,
          },
        ],
      },
    ],
    images: [
      { src: "/image/project4/image1.png", title: "로그인 화면" },
      { src: "/image/project4/image2.png", title: "프레임 선택 화면" },
      { src: "/image/project4/image3.png", title: "카드 디자인 화면" },
      { src: "/image/project4/image4.png", title: "결제 화면" },
      { src: "/image/project4/image5.png", title: "결제 완료 화면" },
    ],
  },
  {
    id: 5,
    coverImage: "/image/project5/Project5Cover.png",
    githubLink: "https://github.com/Hyeong-mai/hingom_prism_admin",
    link: null,
    mainColor: "#423B7F",
    name: "Photo Press Admin",
    type: "team",
    tag: ["팀", "Flutter", "관리자", "회사 프로젝트"],
    date: "HINGOM 입사 이후 두 번째 프로젝트",
    description:
      "포토프레스 키오스크의 관리자용 웹 애플리케이션으로, 키오스크 상태 모니터링, 매출 관리, 사용자 관리 등 포토프레스 키오스크의 전반적인 운영을 지원하는 관리자 플랫폼입니다.",
    subDescription:
      "실시간 데이터 모니터링과 효율적인 관리 기능을 제공하며, 직관적인 UI/UX를 통해 관리자가 쉽게 시스템을 운영할 수 있도록 구현했습니다.",
    skills: [
      "실시간 키오스크 상태 모니터링 및 관리",
      "매출 데이터 분석 및 리포트 생성",
      "사용자 관리 및 권한 설정",
      "시스템 설정 및 환경 구성 관리",
    ],
    language: [
      {
        name: "Flutter",
        languageDescription:
          "크로스 플랫폼 개발을 위해 Flutter를 사용하여 웹과 모바일 환경에서 모두 동작하는 관리자 앱을 구현했습니다.",
      },
      {
        name: "Dart",
        languageDescription:
          "Dart 언어를 활용하여 타입 안정성이 보장된 코드를 작성하고, 효율적인 상태 관리를 구현했습니다.",
      },
      {
        name: "GetX",
        languageDescription:
          "GetX 프레임워크를 사용하여 상태 관리, 라우팅, 의존성 주입을 효율적으로 처리했습니다.",
      },
      {
        name: "Dio",
        languageDescription:
          "Dio를 활용한 안정적인 API 통신 구현 및 에러 핸들링을 구현했습니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "실시간 모니터링 시스템 구현",
        contributionLi: [
          {
            title: "키오스크 상태 모니터링",
            ex: [
              "WebSocket을 활용한 실시간 키오스크 상태 업데이트",
              "장애 발생 시 즉각적인 알림 시스템 구현",
            ],
          },
        ],
      },
      {
        contributionTitle: "데이터 관리 및 분석 시스템",
        contributionLi: [
          {
            title: "매출 데이터 분석",
            ex: [
              "일별/월별 매출 데이터 시각화",
              "사용자 행동 패턴 분석 및 리포트 생성",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "GetX 컨트롤러 메모리 누수 및 생명주기 관리",
        TroubleLi: [
          {
            title: "문제점",
            ex: "컨트롤러가 적절히 dispose되지 않아 메모리 누수가 발생하고, 화면 전환 시 상태가 유지되지 않는 문제가 있었습니다.",
          },
          {
            title: "해결",
            ex: "GetX 컨트롤러의 생명주기를 체계적으로 관리하는 시스템을 구현했습니다:\n1. Binding을 통한 의존성 주입 체계화\n2. onClose() 메서드에서 리소스 정리\n3. Get.delete()를 통한 명시적 컨트롤러 제거",
            code: `
      class BaseController extends GetxController {
        @override
        void onClose() {
          // 리소스 정리
          super.onClose();
        }
        
        @override
        void dispose() {
          Get.delete<ControllerType>();
          super.dispose();
        }
      }
      
      class MainBinding extends Bindings {
        @override
        void dependencies() {
          Get.lazyPut<ControllerType>(() => ControllerType());
        }
      }`,
          },
        ],
      },
      {
        TroubleTitle: "캘린더 데이터 로딩 및 상태 관리",
        TroubleLi: [
          {
            title: "문제점",
            ex: "DailyCalendarController와 YearlyCalendarController에서 데이터 로딩이 중복되고, 상태 관리가 비효율적이었습니다.",
          },
          {
            title: "해결",
            ex: "캘린더 데이터 관리 시스템을 개선했습니다:\n1. 데이터 로딩 최적화\n2. 상태 관리 통합\n3. 캐시 시스템 구현",
            code: `
      class CalendarDataManager extends GetxController {
        final _cache = <String, List<SaleSeries>>{}.obs;
        final isLoading = true.obs;
        
        Future<List<SaleSeries>> fetchCalendarData({
          required String deviceId,
          required DateTime startDate,
          required DateTime endDate,
          bool forceRefresh = false
        }) async {
          final cacheKey = '{deviceId}_{startDate.toIso8601String()}_{endDate.toIso8601String()}';
          
          if (!forceRefresh && _cache.containsKey(cacheKey)) {
            return _cache[cacheKey]!;
          }
          
          try {
            isLoading.value = true;
            final data = await NewSalesRepository.fetchDeviceDailySales(
              DateFormat('yyyyMMdd').format(startDate),
              DateFormat('yyyyMMdd').format(endDate),
              deviceId
            );
            
            _cache[cacheKey] = data;
            return data;
          } finally {
            isLoading.value = false;
          }
        }
        
        void clearCache() {
          _cache.clear();
        }
        
        // 캐시 만료 시간 설정
        void _setupCacheExpiration() {
          Timer.periodic(const Duration(minutes: 30), (_) {
            clearCache();
          });
        }
      }`,
          },
        ],
      },
    ],
    images: [
      { src: "/image/project5/image1.png", title: "대시보드 화면" },
      { src: "/image/project5/image2.png", title: "키오스크 관리" },
      { src: "/image/project5/image3.png", title: "일 매출" },
      { src: "/image/project5/image4.png", title: "매출 그래프" },
      { src: "/image/project5/image5.png", title: "키오스크 상세" },
    ],
  },
  {
    id: 6,
    coverImage: "/image/project6/Project6Cover.png",
    githubLink: "https://github.com/Hyeong-mai/hingom_iris_user",
    link: null,
    mainColor: "#34C759",
    name: "IRIS User",
    type: "team",
    tag: ["팀", "Flutter", "모바일 앱", "회사 프로젝트"],
    date: "HINGOM 입사 이후 세 번째 프로젝트",
    description:
      "라오스 사업을 위한 데모 버전의 영수증 기반 가계부 앱으로, 영수증 QR코드 스캔을 통한 복권 추첨 기능을 포함한 혁신적인 가계부 서비스입니다.",
    subDescription:
      "사용자의 일상적인 소비 패턴을 영수증 기반으로 자동 기록하고, 복권 추첨 기능을 통해 재미요소를 더한 차별화된 가계부 서비스를 제공합니다.",
    skills: [
      "영수증 QR코드 스캔 및 데이터 추출 기능",
      "복권 추첨 시스템 연동",
      "소비 내역 자동 분류 및 통계 분석",
      "사용자 맞춤형 가계부 관리 기능",
    ],
    language: [
      {
        name: "Flutter",
        languageDescription:
          "크로스 플랫폼 개발을 위해 Flutter를 사용하여 iOS와 Android에서 동일한 사용자 경험을 제공했습니다.",
      },
      {
        name: "Dart",
        languageDescription:
          "Flutter의 기본 언어인 Dart를 사용하여 효율적인 상태 관리와 비동기 처리를 구현했습니다.",
      },
      {
        name: "GetX",
        languageDescription:
          "상태 관리, 라우팅, 의존성 주입을 위한 GetX를 활용하여 효율적인 앱 아키텍처를 구현했습니다.",
      },
      {
        name: "Hive",
        languageDescription:
          "로컬 데이터 저장을 위해 Hive를 사용하여 빠른 데이터 접근과 효율적인 캐싱을 구현했습니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "영수증 스캔 및 데이터 처리 시스템",
        contributionLi: [
          {
            title: "QR코드 스캔 및 데이터 추출",
            ex: [
              "카메라를 통한 영수증 QR코드 스캔 기능 구현",
              "스캔된 데이터의 자동 파싱 및 분류 처리",
            ],
          },
          {
            title: "데이터 저장 및 관리",
            ex: [
              "스캔된 영수증 데이터의 로컬 저장 및 관리",
              "데이터 백업 및 동기화 기능 구현",
            ],
          },
        ],
      },
      {
        contributionTitle: "복권 추첨 시스템",
        contributionLi: [
          {
            title: "복권 추첨 로직 구현",
            ex: [
              "영수증 기반 복권 추첨 알고리즘 개발",
              "당첨 결과 표시 및 히스토리 관리",
            ],
          },
        ],
      },
      {
        contributionTitle: "UI/UX 설계 및 구현",
        contributionLi: [
          {
            title: "사용자 인터페이스 개발",
            ex: [
              "직관적이고 사용하기 쉬운 UI/UX 설계",
              "애니메이션과 전환 효과를 통한 사용자 경험 개선",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "QR 스캔 성능 및 사용자 경험",
        TroubleLi: [
          {
            title: "문제점",
            ex: "1. QR 코드 스캔 시 성능이 저하되고 배터리 소모가 심했습니다.\n2. 스캔 UI가 직관적이지 않아 사용자가 스캔 영역을 정확히 인식하기 어려웠습니다.\n3. 스캔 성공/실패 시 피드백이 부족했습니다.",
          },
          {
            title: "해결",
            ex: "QR 스캔 기능을 전면 개선했습니다:\n1. 성능 최적화\n   - 카메라 해상도 및 프레임 레이트 최적화\n   - 불필요한 리소스 해제로 메모리 누수 방지\n2. UI/UX 개선\n   - 스캔 영역 시각적 가이드 추가\n   - 줌 기능 구현으로 다양한 거리에서 스캔 가능\n3. 피드백 시스템 강화\n   - 스캔 성공/실패 시 애니메이션 효과\n   - 명확한 상태 메시지 표시\n   - 스캔 결과에 따른 적절한 다음 단계 안내",
            code: `
      class QRScanPage extends StatefulWidget {
        @override
        _QRScanPageState createState() => _QRScanPageState();
      }
      
      class _QRScanPageState extends State<QRScanPage> {
        final _cameraController = MobileScannerController(
          facing: CameraFacing.back,
          torchEnabled: false,
        );
        
        // 줌 기능 구현
        final RxBool _isZoomed = false.obs;
        
        @override
        Widget build(BuildContext context) {
          return Stack(
            children: [
              MobileScanner(
                controller: _cameraController,
                onDetect: _onDetect,
                errorBuilder: (context, error, child) {
                  return _buildErrorWidget(error);
                },
              ),
              // 스캔 가이드 UI
              Center(
                child: Container(
                  width: MediaQuery.of(context).size.width * 0.7,
                  height: MediaQuery.of(context).size.width * 0.7,
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.white, width: 2),
                    borderRadius: BorderRadius.circular(16),
                  ),
                ),
              ),
              // 줌 컨트롤
              Positioned(
                bottom: 16,
                left: 16,
                child: Obx(() => IconButton(
                  icon: Icon(_isZoomed.value ? Icons.zoom_out : Icons.zoom_in),
                  onPressed: () {
                    _isZoomed.value = !_isZoomed.value;
                    _cameraController.setZoomScale(_isZoomed.value ? 2.0 : 1.0);
                  },
                )),
              ),
            ],
          );
        }
      }`,
          },
        ],
      },
      {
        TroubleTitle: "카메라 권한 관리 및 플랫폼 호환성",
        TroubleLi: [
          {
            title: "문제점",
            ex: "1. iOS와 Android에서 카메라 권한 요청 시점과 처리 방식이 달라 사용자 경험이 일관되지 않았습니다.\n2. 권한이 영구 거부된 경우에 대한 처리가 부족했습니다.\n3. 권한 요청 시 사용자에게 적절한 설명이 제공되지 않았습니다.\n4. 권한 상태 변경 시 앱의 동작이 불안정했습니다.",
          },
          {
            title: "해결",
            ex: "플랫폼별 권한 관리 시스템을 체계적으로 구현했습니다:\n1. 통합된 권한 관리 시스템 구현\n   - permission_handler 패키지를 활용한 크로스 플랫폼 권한 관리\n   - 권한 상태에 따른 적절한 UI 피드백\n2. 권한 요청 프로세스 개선\n   - 권한 요청 전 사용자 친화적인 설명 제공\n   - 권한 거부 시 대체 경로 안내\n3. 플랫폼별 최적화\n   - iOS: Info.plist에 상세한 권한 설명 추가\n   - Android: AndroidManifest.xml에 권한 설정 추가\n4. 권한 상태 관리 강화\n   - 권한 상태 변경 감지 및 적절한 대응\n   - 권한 거부 시 재시도 로직 구현",
            code: `
      // 권한 관리 시스템 구현
      class PermissionManager {
        static Future<bool> requestCameraPermission() async {
          final status = await Permission.camera.status;
          
          if (status.isGranted) {
            return true;
          }
          
          if (status.isDenied) {
            // 권한 요청 전 설명 다이얼로그 표시
            final shouldRequest = await showPermissionDialog();
            if (!shouldRequest) return false;
            
            final result = await Permission.camera.request();
            return result.isGranted;
          }
          
          if (status.isPermanentlyDenied) {
            // 설정으로 이동하는 다이얼로그 표시
            await showSettingsDialog();
            return false;
          }
          
          return false;
        }
        
        static Future<bool> showPermissionDialog() async {
          return await showDialog<bool>(
            context: Get.context!,
            builder: (context) => AlertDialog(
              title: Text('카메라 권한 필요'),
              content: Text('QR 코드를 스캔하기 위해 카메라 접근 권한이 필요합니다.'),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context, false),
                  child: Text('취소'),
                ),
                TextButton(
                  onPressed: () => Navigator.pop(context, true),
                  child: Text('권한 요청'),
                ),
              ],
            ),
          ) ?? false;
        }
        
        static Future<void> showSettingsDialog() async {
          await showDialog(
            context: Get.context!,
            builder: (context) => AlertDialog(
              title: Text('권한 필요'),
              content: Text('QR 코드 스캔을 위해 설정에서 카메라 권한을 허용해주세요.'),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text('취소'),
                ),
                TextButton(
                  onPressed: () {
                    openAppSettings();
                    Navigator.pop(context);
                  },
                  child: Text('설정으로 이동'),
                ),
              ],
            ),
          );
        }
      }
      
      // QR 스캔 화면에서의 권한 처리
      class QRScanPage extends StatefulWidget {
        @override
        _QRScanPageState createState() => _QRScanPageState();
      }
      
      class _QRScanPageState extends State<QRScanPage> {
        bool _hasPermission = false;
        
        @override
        void initState() {
          super.initState();
          _checkPermission();
        }
        
        Future<void> _checkPermission() async {
          final hasPermission = await PermissionManager.requestCameraPermission();
          setState(() {
            _hasPermission = hasPermission;
          });
        }
        
        @override
        Widget build(BuildContext context) {
          if (!_hasPermission) {
            return Scaffold(
              body: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('카메라 권한이 필요합니다.'),
                    SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: _checkPermission,
                      child: Text('권한 요청'),
                    ),
                  ],
                ),
              ),
            );
          }
          
          return CameraView();
        }
      }`,
          },
        ],
      },
    ],
    images: [
      { src: "/image/project6/image1.png", title: "메인 화면" },
      { src: "/image/project6/image2.png", title: "추첨 페이지" },
      { src: "/image/project6/image3.png", title: "영수증 스캔" },
      { src: "/image/project6/image4.png", title: "당첨 여부" },
      { src: "/image/project6/image5.png", title: "가계부 통계" },
    ],
  },
  {
    id: 7,
    coverImage: "/image/project7/Project7Cover.png",
    githubLink: "https://github.com/Hyeong-mai/finf_project",
    link: null,
    mainColor: "#00B4D8",
    name: "Finf",
    type: "single",
    tag: ["개인", "Flutter", "프리다이빙", "사이드 프로젝트"],
    date: "2025년 1월 ~ 진행 중",
    description:
      "프리다이빙 대표강사의 요청으로 제작한 프리다이빙 전용 앱으로, 프리다이버들의 일정 관리, 타이머 기능, 기록 관리 등을 통합적으로 제공하는 모바일 애플리케이션입니다.",
    subDescription:
      "프리다이버들의 실제 니즈를 반영하여 직관적인 UI/UX를 제공하며, 특히 타이머 기능과 기록 관리에 중점을 두어 개발하고 있습니다.",
    skills: [
      "프리다이빙 세션 타이머 및 기록 관리",
      "사용자 인증 및 프로필 관리",
      "다이빙 기록 저장 및 통계 분석",
      "커스텀 타이머 설정 및 라운드 관리",
    ],
    language: [
      {
        name: "Flutter",
        languageDescription:
          "크로스 플랫폼 개발을 위해 Flutter를 선택하여 iOS와 Android에서 동일한 사용자 경험을 제공하며, 특히 네이티브 성능이 중요한 타이머 기능을 효율적으로 구현했습니다.",
      },
      {
        name: "Dart",
        languageDescription:
          "Flutter의 기본 언어인 Dart를 사용하여 타입 안정성과 효율적인 비동기 처리를 구현했으며, 특히 타이머와 상태 관리에서 안정적인 코드를 작성했습니다.",
      },
      {
        name: "GetX",
        languageDescription:
          "상태 관리, 라우팅, 의존성 주입을 위해 GetX를 활용하여 효율적인 코드 구조를 구현했으며, 특히 타이머 상태 관리에서 실시간 업데이트를 안정적으로 처리합니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "프리다이빙 타이머 시스템 구현",
        contributionLi: [
          {
            title: "커스텀 타이머 기능",
            ex: [
              "프리다이빙 세션에 최적화된 타이머 구현",
              "라운드별 시간 설정 및 관리 기능",
              "실시간 타이머 상태 업데이트 및 기록 저장",
            ],
          },
          {
            title: "타이머 기록 관리",
            ex: [
              "세션별 타이머 기록 저장 및 조회",
              "통계 데이터 시각화",
              "기록 내보내기 및 공유 기능",
            ],
          },
        ],
      },
      {
        contributionTitle: "사용자 인증 및 프로필 관리",
        contributionLi: [
          {
            title: "소셜 로그인 구현",
            ex: [
              "카카오 로그인 연동",
              "애플 로그인 연동",
              "사용자 프로필 관리",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "타이머 상태 관리 및 백그라운드 처리",
        TroubleLi: [
          {
            title: "문제점",
            ex: "타이머 구현 시 발생한 주요 문제들:\n1. 앱이 백그라운드로 전환될 때 타이머 정확성 유지\n2. 여러 라운드의 상태 관리 및 동기화\n3. 배터리 최적화로 인한 타이머 지연\n4. 실시간 상태 업데이트와 UI 렌더링 최적화\n5. 타이머 기록의 정확한 저장 및 복원",
          },
          {
            title: "해결",
            ex: "타이머 시스템을 효율적으로 재설계했습니다:\n1. 백그라운드 처리 최적화\n   - Foreground Service 활용\n   - 시스템 시간 기반 정확한 타이밍\n   - 배터리 최적화 예외 처리\n2. 상태 관리 개선\n   - GetX를 활용한 효율적인 상태 관리\n   - 라운드별 상태 분리 및 관리\n   - 실시간 동기화 구현\n3. 데이터 저장 최적화\n   - 로컬 저장소와 서버 동기화\n   - 효율적인 데이터 구조 설계\n   - 오프라인 지원",
            code: `
    // 타이머 컨트롤러 구현
    class TimerController extends GetxController {
      final _timer = Rx<Timer?>(null);
      final _currentTime = 0.obs;
      final _currentRound = 0.obs;
      final _isRunning = false.obs;
      
      // 백그라운드 처리
      @override
      void onInit() {
        super.onInit();
        _setupBackgroundHandler();
      }
      
      void _setupBackgroundHandler() {
        // 백그라운드 서비스 설정
        final service = FlutterBackgroundService();
        service.on('timer').listen((event) {
          if (event?['action'] == 'updateTimer') {
            _updateTimerInBackground();
          }
        });
      }
      
      // 타이머 상태 관리
      void startTimer() {
        if (_isRunning.value) return;
        
        _isRunning.value = true;
        _timer.value = Timer.periodic(
          const Duration(seconds: 1),
          (timer) => _updateTimer(),
        );
        
        // 백그라운드 서비스 시작
        _startBackgroundService();
      }
      
      // 상태 저장
      Future<void> saveTimerState() async {
        final state = {
          'currentTime': _currentTime.value,
          'currentRound': _currentRound.value,
          'isRunning': _isRunning.value,
          'timestamp': DateTime.now().millisecondsSinceEpoch,
        };
        
        await _localStorage.saveTimerState(state);
        await _syncWithServer(state);
      }
    }`,
          },
        ],
      },
    ],
    images: [
      { src: "/image/project7/image1.png", title: "타이머 화면" },
      { src: "/image/project7/image2.png", title: "기록 관리" },
      { src: "/image/project7/image3.png", title: "대시보드" },
      { src: "/image/project7/image4.png", title: "통계 분석" },
    ],
  },
  {
    id: 1,
    coverImage: "/image/project1/Project1Cover.png",
    githubLink: "https://github.com/Hyeong-mai/again-store",
    link: "https://again-shop-git-main-hyeongmins-projects-ca960665.vercel.app/home",
    mainColor: "#37475E",
    name: "Again Market",
    type: "single",
    tag: ["솔로", "Next", "클론코딩"],
    date: "2024년 6월 10일 → 2024년 6월 17일",
    description:
      "Next.js의 장점을 최대한 활용하여 kosta에서 진행한 프로젝트를 토대로 만든 풀스택 웹 애플리케이션을 제작.",
    subDescription:
      "현재는 완성도 높은 프로젝트를 구현하기 위해 꾸준히 개선하고 있습니다.",
    skills: [
      "중고 상품을 등록하고 경매를 진행할 수 있는 기능 구현",
      "실시간 입찰 시스템으로 사용자 간 경쟁 유도",
      "사용자간 채팅 기능 제공",
      "사용자 프로필 및 거래 내역 관리 시스템 구축",
    ],
    language: [
      {
        name: "Next.js",
        languageDescription:
          "폴더 구조 기반의 자동 페이지 생성, 유연한 데이터 패칭, 서버리스 함수로 풀스택 기능을 쉽게 구현할 수 있습니다..",
      },
      {
        name: "TypeScript",
        languageDescription:
          "TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.",
      },
      {
        name: "Tailwind",
        languageDescription:
          "Tailwind CSS는 유틸리티 클래스와 설정 파일을 통해 빠르고 일관된 스타일링과 손쉬운 디자인 시스템 커스터마이징을 지원합니다.",
      },
      {
        name: "Prisma",
        languageDescription:
          "Prisma는 직관적인 스키마 정의와 쿼리 작성, TypeScript 통합을 통한 타입 안정성, 그리고 쉬운 데이터베이스 마이그레이션 관리를 지원합니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "Supabase를 활용한 실시간 채팅 기능",
        contributionLi: [
          {
            title: "실시간 메시지 전송 및 수신",
            ex: [
              "Supabase의 실시간 채널을 활용하여 사용자들이 실시간으로 메시지를 주고받을 수 있도록 구현. on('broadcast', { event: 'message' }, ...) 메서드를 통해 새로운 메시지를 수신하여 즉시 상태에 반영.",
            ],
          },
          {
            title: "자동 스크롤 기능",
            ex: [
              "새로운 메시지가 도착할 때마다 scrollToBottom()을 호출하여 채팅창이 자동으로 최신 메시지를 보여주는 기능. 이를 통해 사용자 경험을 개선.",
            ],
          },
        ],
      },
      {
        contributionTitle: "Next.js의 미들웨어를 사용한 접근 제어",
        contributionLi: [
          {
            title: "로그인 상태에 따른 페이지 접근 제한",
            ex: [
              "Next.js의 middleware를 활용하여 세션 정보를 확인하고, 로그인하지 않은 사용자가 보호된 페이지에 접근하려고 하면 로그인 페이지로 리디렉션",
            ],
          },
          {
            title: "공개 페이지에 대한 예외 처리",
            ex: [
              "publicOnlyUrls 객체에 정의된 특정 공개 페이지들(/, /login, /create-account 등)에 대해서는 로그인 여부와 상관없이 누구나 접근할 수 있도록 설정. 로그인 여부를 확인하지 않고 바로 접근이 허용",
            ],
          },
        ],
      },
      {
        contributionTitle: "경매 낙찰 기능",
        contributionLi: [
          {
            title: "제품 판매 완료 처리",
            ex: [
              "특정 제품의 productId를 기반으로, 해당 제품의 가장 최근 입찰 기록을 조회하고, 입찰 기록이 있는 경우 제품의 상태를 '판매 완료'로 업데이트합니다.",
              "db.product.update를 사용하여 제품의 sell 필드를 true로 설정함으로써 판매 완료 상태로 표시합니다.",
            ],
          },
          {
            title: "판매 완료 내역 저장",
            ex: [
              "판매된 제품의 내역을 soldOut 테이블에 기록하여, 최근 입찰자와 판매된 제품을 추적 및 관리.",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle:
          "메시지 추가 시 스크롤이 마지막 메시지로 자동 이동하지 않는 문제 해결",
        TroubleLi: [
          {
            title: "문제점",
            ex: "메시지를 주고받을 때마다 스크롤이 마지막 메시지까지 내려가지 않는 문제를 발견했습니다. 새로운 메시지가 추가되었을 때 scrollToBottom()을 호출해도 스크롤이 제대로 작동하지 않았습니다.",
          },
          {
            title: "해결",
            ex: "문제의 원인은 메시지가 아직 렌더링되기 전에 스크롤을 시도하면서 발생한 것이었습니다. 이를 해결하기 위해 메시지가 실제로 화면에 그려진 후에 스크롤이 작동하도록 수정했습니다. useEffect를 활용해 메시지가 추가될 때마다 스크롤이 정확히 동작하도록 변경했습니다.",
            code: `
useEffect(() => {
  if (messages.length > 0) {
    scrollToBottom();
  }
}, [messages]);
    `,
          },
        ],
      },
      {
        TroubleTitle: "Intersection Observer 성능 최적화: 리렌더링 문제 해결",
        TroubleLi: [
          {
            title: "문제점",
            ex: "리스트 페이지에서 성능이 느려짐을 감지했습니다. Intersection Observer가 useEffect 훅 내에서 의존성 배열 없이 생성되고 있어, 컴포넌트가 리렌더링될 때마다 새로운 observer 인스턴스가 생성되고 있음을 확인했습니다.",
          },
          {
            title: "해결",
            ex: "useEffect의 의존성 배열에 필요한 변수를 추가하고, IntersectionObserver가 실제로 필요할 때만 초기화되도록 수정했습니다. 또한 컴포넌트가 처음 마운트될 때 한 번만 observer를 생성하도록 변경했습니다.",
            code: `
useEffect(() => {
  const observer = new IntersectionObserver(
    async (entries) => {
      const element = entries[0];
      if (element.isIntersecting && trigger.current) {
        // 상품 로딩 로직
      }
    },
    { threshold: 1.0 }
  );

  if (trigger.current) {
    observer.observe(trigger.current);
  }

  return () => observer.disconnect();
}, [trigger, page]); // 의존성 배열 추가

`,
          },
        ],
      },
    ],
    images: [
      { src: "/image/project1/image1.png", title: "메인 화면" },
      { src: "/image/project1/image2.png", title: "게시물 상세" },
      { src: "/image/project1/image3.png", title: "경매 화면" },
      { src: "/image/project1/image4.png", title: "채팅 화면" },
      { src: "/image/project1/image5.png", title: "프로필" },
    ],
  },
  {
    id: 2,
    name: "먹 DAM map",
    mainColor: "#D19060",
    githubLink: "https://github.com/Hyeong-mai/DAM-MAP",
    coverImage: "/image/project2/Project2Cover.png",
    type: "single",
    tag: ["솔로", "React-Native", "클론코딩"],
    date: "2022년 11월 30일 → 2023년 5월 24일",
    description:
      "주변에 있는 맛있는 식당 및 카페를 이용자들이 직접 추천하고 소통 하는 어플",
    subDescription:
      "푸딘코 앱의 벤치마킹 형태로 Google Maps API를 활용하여 사용자가 현재 위치에서 추천된 맛집을 지도상에서 확인할 수 있는 앱을 개발했습니다 ",
    skills: [
      "Google Maps API를 활용해 장소 표시 및 검색",
      "사용자간 채팅 기능 제공",
      "카메라를 통해 앱내에서 사진 촬열 및 업로드 기능 제공",
      "사용자간의 실시간 채팅 기능 제공",
    ],
    language: [
      {
        name: "React-Native",
        languageDescription:
          "React-Native는 컴포넌트 기반으로 하며, JavaScript를 사용해 iOS와 Android 애플리케이션을 동시에 개발할 수 있는 크로스 플랫폼 프레임워크입니다.",
      },
      {
        name: "Styled Components",
        languageDescription:
          "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.",
      },
      {
        name: "Expo",
        languageDescription:
          "React Native 애플리케이션 개발을 간소화하고, 기본 설정 없이 다양한 네이티브 기능을 쉽게 사용할 수 있게 해주는 플랫폼입니다.",
      },
      {
        name: "Prisma",
        languageDescription:
          "Prisma는 직관적인 스키마 정의와 쿼리 작성, TypeScript 통합을 통한 타입 안정성, 그리고 쉬운 데이터베이스 마이그레이션 관리를 지원합니다.",
      },
    ],
    contribution: [
      {
        contributionTitle:
          "실시간 위치 기반 서비스 및 동적 주소 검색 기능 구현",
        contributionLi: [
          {
            title: "실시간 위치 기반 서비스 및 지도 연동",
            ex: [
              "사용자의 현재 위치를 자동으로 감지하고, 그에 따라 지도 상의 마커를 업데이트하는 기능을 제공합니다. 이 기능은 react-native-geolocation-service와 react-native-maps를 사용하여 구현되었으며, 사용자에게 지도에서 자신의 위치를 시각적으로 확인할 수 있는 경험을 제공합니다.",
              "사용자가 검색한 주소를 기반으로 지도를 업데이트하고, 검색된 마커를 지도에 표시하여 사용자가 원하는 위치를 쉽게 찾을 수 있도록 돕습니다.",
            ],
          },
          {
            title: "주소 기반 위치 검색 기능",
            ex: [
              "사용자가 입력한 주소를 기반으로 GPS 좌표(위도 및 경도)를 검색하는 기능을 제공합니다. react-geocode 라이브러리를 사용하여 Google Geocoding API를 통해 주소를 좌표로 변환합니다. 이 기능은 사용자가 특정 장소를 쉽게 찾고, 그 위치를 지도에서 시각화할 수 있도록 도와줍니다.",
              "사용자가 입력한 주소나 키워드를 기반으로 실시간으로 검색하고, 해당 위치에 마커를 표시하는 기능을 제공합니다. 이 과정에서 GraphQL을 사용하여 서버에서 데이터를 가져오고, useLazyQuery를 통해 쿼리를 실행합니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "사진 촬영 및 업로드 기능",
        contributionLi: [
          {
            title: "사진 촬영 및 미리보기",
            ex: [
              "사용자가 카메라 인터페이스를 통해 사진을 쉽게 촬영할 수 있는 기능을 제공합니다. 사용자는 TakePhotoButton을 눌러 사진을 찍을 수 있으며, 찍은 사진은 즉시 미리보기로 표시됩니다. 이는 Image 컴포넌트를 통해 구현되며, 사용자가 촬영한 사진을 바로 확인할 수 있는 직관적인 사용자 경험을 제공합니다.",
              "또한, 사용자가 사진 촬영 후 `Dismiss` 버튼을 눌러 사진을 취소하거나, `Upload` 버튼을 통해 사진을 업로드할 수 있는 선택권을 제공합니다. 이러한 흐름은 사용자가 편리하게 사진을 관리하고, 필요에 따라 작업을 진행할 수 있도록 돕습니다.",
            ],
          },
          {
            title: "줌 및 플래시 기능 조절",
            ex: [
              "사용자는 슬라이더를 통해 카메라의 줌을 조절할 수 있는 기능을 제공합니다. 이 기능은 사용자가 원하는 만큼 줌을 조절할 수 있도록 하여, 다양한 촬영 조건에서 최적의 구도를 잡을 수 있게 해줍니다.",
              "플래시 모드를 변경할 수 있는 버튼을 통해 사용자는 다양한 조명 상황에서 촬영할 때 유용하게 활용할 수 있습니다. 플래시 모드는 꺼짐, 켜짐, 자동으로 설정할 수 있으며, 각 모드에 맞춰 아이콘이 변경되어 사용자가 현재 상태를 쉽게 파악할 수 있도록 도와줍니다.",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "카메라 자동 활성화 문제 해결",
        TroubleLi: [
          {
            title: "문제점",
            ex: "사용자가 카메라 화면으로 전환하자마자 카메라가 자동으로 활성화되었고, 화면을 떠나도 계속 켜져 있는 버그를 발견했습니다",
          },
          {
            title: "해결",
            ex: "useIsFocused를 사용하여 사용자가 카메라 화면에 있을 때만 카메라가 활성화되도록 했습니다.카메라가 사용 중일 때만 활성화되고, 사용자가 해당 화면을 떠나면 자동으로 비활성화되면서 더 나은 사용자 경험을 제공할 수 있었습니다. ",
            code: `
const TakePhoto = ({ navigation }) => {
  const focused = useIsFocused(); // 현재 화면에 포커스 확인
          focused ? ( // 포커스가 있을 때만 카메라 활성화
            <Wrap>
              <Camera
                type={cameraType}
                style={{ flex: 1 }}
                ref={camera}
              >
                {/* 카메라 UI 요소들 */}
              </Camera>
            </Wrap>
          ) : null // 포커스가 없으면 null 반환
};
    `,
          },
        ],
      },
      {
        TroubleTitle: "무한 루프 문제 해결: 지도 마커 업데이트 최적화",
        TroubleLi: [
          {
            title: "문제점",
            ex: "사용자가 지도를 이동할 때마다 마커가 업데이트되면서, markers가 변경되어 useEffect가 다시 실행되고, 이 과정이 반복되어 무한 루프가 발생했습니다.",
          },

          {
            title: "해결",
            ex: "useEffect의 의존성 배열에 markers를 추가한 것이 문제라는 것을 확인했습니다. 이를 수정하여 markers 대신 특정 지역이나 위치 정보를 의존성으로 추가하여 무한 루프를 방지했습니다.",
            code: `문제가 발생하는 코드:
useEffect(() => {
  // 지도 이동 시 마커 업데이트
  setMarkers(newMarkers);
}, [markers]); // 무한 루프 발생!

수정된 코드:
useEffect(() => {
  // 지도 이동 시 마커 업데이트
  setMarkers(newMarkers);
}, [currentLocation]); // 현재 위치만 의존성으로 추가
    `,
          },
          {
            title: "회고",
            ex: "의존성 배열의 역할의 이해를 통해 useEffect 훅이 어떻게 작동하는지, 그리고 어떻게 의존성이 설정되면 다시 호출되는지를 깊이 있게 이해할 수 있었습니다. 또한, 실제로 어떤 변화가 필요할 때마다 코드를 어떻게 수정해야 할지에 대한 실질적인 경험을 쌓았습니다.",
          },
        ],
      },
    ],
    images: [
      { src: "/image/project2/image1.png", title: "메인 화면" },
      { src: "/image/project2/image2.png", title: "사진 선택" },
      { src: "/image/project2/image3.png", title: "뉴스 화면" },
      { src: "/image/project2/image4.png", title: "지도 화면" },
      { src: "/image/project2/image5.png", title: "게시물 댓글" },
    ],
  },
  {
    id: 3,
    name: "카페담 스마트 오더",
    mainColor: "#333",
    githubLink: "https://github.com/Hyeong-mai/CafeDam-native",
    coverImage: "/image/project3/Project3Cover.png",
    type: "single",
    tag: ["솔로", "React-Native"],
    date: "2023년 6월 16일 → 2023년 6월 18일",
    description:
      "스마트 오더 앱 개발: 컴포즈 커피 벤치마킹을 통한 편리한 주문 시스템",
    skills: [
      "4일이라는 짧은 기간내에 구현",
      "주문 회전율 향상을 위한 스마트 오더 시스템",
      "장바구니 기능과 결제 내역 제공으로 고객 편의성 강화",
    ],
    language: [
      {
        name: "React-Native",
        languageDescription:
          "React-Native는 컴포넌트 기반으로 하며, JavaScript를 사용해 iOS와 Android 애플리케이션을 동시에 개발할 수 있는 크로스 플랫폼 프레임워크입니다.",
      },
      {
        name: "Styled Components",
        languageDescription:
          "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.",
      },
      {
        name: "Expo",
        languageDescription:
          "React Native 애플리케이션 개발을 간소화하고, 기본 설정 없이 다양한 네이티브 기능을 쉽게 사용할 수 있게 해주는 플랫폼입니다.",
      },
      {
        name: "Firebase",
        languageDescription:
          "Firebase는 실시간 데이터베이스, 인증, 호스팅 등 다양한 백엔드 서비스를 제공하는 클라우드 기반 애플리케이션 개발 플랫폼입니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "장바구니 및 주문 과정",
        contributionLi: [
          {
            title: "메뉴 항목 필터링 및 표시",
            ex: [
              "사용자가 다양한 카테고리 버튼(커피, 논-커피, 티, 디저트 등)을 클릭하면, 해당 카테고리에 맞는 메뉴 항목을 Firestore에서 가져와 화면에 표시합니다. 이를 통해 사용자는 원하는 메뉴를 쉽게 탐색하고 선택할 수 있습니다.",
            ],
          },

          {
            title: "로그인 유도",
            ex: [
              "사용자가 수량을 입력한 후 바로 주문 또는 장바구니 담기 버튼을 클릭하여 선택한 메뉴를 장바구니에 추가하거나 바로 결제할 수 있습니다. 또한, 사용자가 로그인을 하지 않은 경우 오류 메시지를 표시하여 로그인하도록 유도합니다.",
            ],
          },
        ],
      },
      {
        contributionTitle: "주문 및 수량 선택 기능",
        contributionLi: [
          {
            title: "주문 상세 및 수량 선택",
            ex: [
              "사용자가 메뉴 항목을 선택하면 모달이 열리며, 해당 메뉴의 상세 정보를 보여줍니다. 사용자는 음료를 아이스 또는 핫으로 선택하고 수량을 입력할 수 있습니다. 이를 통해 원하는 음료를 선택할 수 있습니다.",
            ],
          },
          {
            title: "주문 및 결제 기능",
            ex: [
              "사용자가 메뉴 항목을 클릭하면 모달을 통해 선택한 메뉴의 상세 정보를 확인할 수 있으며, 이를 카트에 추가하여 결제할 수 있습니다. 카트에 담긴 항목 수를 시각적으로 표시하여 사용자가 결제 화면으로 쉽게 이동할 수 있도록 도와줍니다.",
            ],
          },
        ],
      },
    ],
    images: [
      { src: "/image/project3/image1.png", title: "메인 화면" },
      { src: "/image/project3/image2.png", title: "상품 리스트" },
      { src: "/image/project3/image3.png", title: "상품 주문" },
      { src: "/image/project3/image4.png", title: "영수증" },
    ],
  },
  {
    id: 11,
    name: "중고 경매 사이트",
    mainColor: "#333",
    type: "team",
    tag: ["팀", "JAVA", "Spring Framework"],
    date: "2017년 11월 27일 → 2017년 12월 20일",
    description: "kobay를 벤치마킹 하여 중고 경매 사이트 개발",
    skills: [
      "6주간 교육 후 최종 프로젝트",
      "API를 활용한 배송 시스템 구축",
      "실시간 경매 기능 구현",
      "판매자와 구매자간 채팅기능 구현",
    ],
    language: [
      {
        name: "JAVA",
        languageDescription:
          "Java는 객체 지향 프로그래밍 언어로, 플랫폼에 독립적이며 강력한 메모리 관리와 풍부한 라이브러리를 제공하여 다양한 애플리케이션 개발에 사용됩니다.",
      },
      {
        name: "JavaScript",
        languageDescription:
          "JavaScript는 웹 페이지의 동적 콘텐츠를 제어하기 위해 사용되는 스크립트 언어로, 클라이언트 및 서버 측에서 실행 가능한 프로토타입 기반 언어입니다.",
      },
      {
        name: "Spring FrameWork",
        languageDescription:
          "Spring Framework는 자바 기반의 오픈 소스 애플리케이션 프레임워크로, 엔터프라이즈 애플리케이션 개발을 간소화하고 다양한 모듈을 제공하여 개발자에게 유연성과 효율성을 제공합니다.",
      },
      {
        name: "SQL Developer",
        languageDescription:
          "SQL Developer는 Oracle에서 제공하는 통합 개발 환경(IDE)으로, SQL 쿼리 작성, 데이터베이스 관리, PL/SQL 개발 등을 편리하게 수행할 수 있도록 도와주는 도구입니다.",
      },
    ],
    contribution: [
      {
        contributionTitle: "실시간 소통 및 안전한 인증 시스템",
        contributionLi: [
          {
            title: "1대 1 채팅 기능",
            ex: [
              "사이트를 이용하는 판매자 와 구매자간의 실시간 소통을 위한 1대 1 채팅 구현",
            ],
          },
          {
            title: "Gmail SMTP 기반 알림 서비스",
            ex: [
              "낙찰, 판매등록, 승인거절, 결제관련 등 사용자에게 제공하는 알림을 G-mail의 SMTP 이용하여 알림 서비스 구현",
            ],
          },
          {
            title: "안전한 본인 인증 시스템",
            ex: [
              "회원가입 시 안전한 본인 인증처리를 위해 Gmail의 SMTP를 이용하여 사용자 인증처리 구현",
            ],
          },
        ],
      },
      {
        contributionTitle: "주소 검색 및 배송 조회 기능",
        contributionLi: [
          {
            title: "도로명 주소 검색",
            ex: ["Juso.go.kr API를 활용 하여 도로명 주소 검색 구현"],
          },
          {
            title: "배송 조회 기능",
            ex: ["운송정보를 입력 받아 검색을 통해 팝업으로 조회 결과 출력"],
          },
        ],
      },
      {
        contributionTitle: "보안 및 스케줄 관리 기능",
        contributionLi: [
          {
            title: "인증 및 권한 관리",
            ex: [
              "Spring Security를 이용하여 인증과 권한을 구현",
              "Spring Security에서 제공하는 BCryptPasswordEncoder를 이용하여 패스워드 암호화",
            ],
          },
          {
            title: "스케줄 관리",
            ex: ["Spring Scheduling를 이용한 스케쥴 관리"],
          },
          {
            title: "트랜잭션 처리",
            ex: [
              "Spring AOP기반의 Transaction 을 이용하여 여러 개의 DML작업을 일괄처리 할 수 있도록 구현",
            ],
          },
        ],
      },
    ],
    Trouble: [
      {
        TroubleTitle: "의견 충돌 및 소통 문제",
        TroubleLi: [
          {
            title: "문제점",
            ex: "팀원들 간의 의견 차이로 인해 개발 방향성에 대한 갈등이 발생했습니다.",
          },
          {
            title: "해결",
            ex: "팀원들과의 정기적인 회의를 통해 서로의 의견을 공유하고, 충돌이 발생했을 때는 중재하여 합의점을 찾았습니다. 또한, 서로의 지식을 공유하는 시간을 가짐으로써 팀워크를 강화했습니다.",
          },
          {
            title: "회고",
            ex: "프로젝트를 성공적으로 마무리하기 위해서는 팀원 간의 원활한 소통이 필수적이라는 것을 깨달았습니다. 의견 차이를 극복하고 조율하는 과정이 팀워크를 더욱 강화하는 데 기여했습니다.",
          },
        ],
      },
      {
        TroubleTitle: "기한 내 기능 구현의 어려움",
        TroubleLi: [
          {
            title: "문제점",
            ex: "프로젝트 막바지에 추가 기능 구현을 맡게 되어 기한 내에 완성하기 어려울 것 같은 압박을 느꼈습니다.",
          },
          {
            title: "해결",
            ex: "팀원들과 함께 문제를 나누고, 역할을 조정하여 효율적으로 작업할 수 있도록 하였습니다. 각자 맡은 부분에 대해 책임감을 가지고 임함으로써 기한 내에 모든 기능을 구현할 수 있었습니다.",
          },
          {
            title: "회고",
            ex: "여러 어려움을 겪으며 협업의 힘과, 절대 포기하지 않는 자세가 중요하다는 것을 배우게 되었습니다. 이를 통해 앞으로의 개발 과정에서도 끈기와 협업을 기반으로 한 문제 해결 능력을 키우게 되었습니다.",
          },
        ],
      },
    ],
  },
];

// 프로젝트 타입 정의
export const ProjectType = {
  SINGLE: "single",
  TEAM: "team",
};

// 프로젝트 태그 정의
export const ProjectTags = {
  SOLO: "솔로",
  TEAM: "팀",
  NEXT: "Next.js",
  REACT_NATIVE: "React-Native",
  JAVA: "JAVA",
  SPRING: "Spring Framework",
  FLUTTER: "Flutter",
  ADMIN: "관리자",
  COMPANY: "회사 프로젝트",
  CLONE: "클론코딩",
  MOBILE: "모바일 앱",
};
