interface IStore {
  name: string;
  summary: string;
  category: string[];
  img: string;
  phone: string;
}

const stores: IStore[] = [
  {
    name: "돈돈",
    summary: "착한 가격의 생삼겹살집",
    category: ["가성비좋은곳", "회식하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108615-6587c307-5820-45db-ad76-78b7c9fd6d19.png",
    phone: "02-2616-5997",
  },
  {
    name: "토마토",
    summary: "성공회대생 혼밥성지",
    category: ["혼밥하기좋은곳", "가성비좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108708-2a4af6be-e0f0-46aa-b5ec-75ca5e26a158.png",
    phone: "02-2060-0029",
  },
  {
    name: "썬더치킨",
    summary: "저렴하고 맛있는 치킨집",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108895-73b05b46-8724-4455-bfa3-9d13b79c811c.png",
    phone: "02-2616-3319",
  },
  {
    name: "맷돌손두부",
    summary: "직접 맷돌로 간 국산콩 순두부 전문점",
    category: ["해장하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108739-80cd382f-ac08-41c5-8b19-64ba640a0dab.png",
    phone: "02-2689-2031",
  },
  {
    name: "쎼쎼",
    summary: "진정한 중화요리전문점",
    category: ["가성비좋은곳", "혼밥하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108730-c9e88e1f-b15d-457d-b3a1-8f2e7ebead89.png",
    phone: "010-2615-9962",
  },
  {
    name: "미스터동",
    summary: "독특함이 묻어나는 중식당",
    category: ["가성비좋은곳", "혼밥하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156117199-54d093bc-56da-46e3-863c-8738ccb94826.jpg",
    phone: "02-2687-9872",
  },
  {
    name: "오구쌀피자",
    summary: "맛있어서 오구 배불러서 오구",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108987-e35abb68-cb0b-402c-810f-d318d0df7627.png",
    phone: "02-2060-5980",
  },
  {
    name: "터프네이모",
    summary: "추억 회상하며 한 잔하기 좋은 포차",
    category: ["회식하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156109078-5226556b-48a0-48b7-8897-36a64bfecadf.png",
    phone: "02-2688-3123",
  },
  {
    name: "모메존 칼국수",
    summary: "칼국수 하나로 유명세를 탄 맛집",
    category: ["해장하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108906-e412fb2b-0101-4d54-8668-bd539437cee1.png",
    phone: "02-2625-4821",
  },
  {
    name: "조마루뼈다귀전문점",
    summary: "고기 가득 얼큰한 해장국 뚝딱",
    category: ["해장하기좋은곳", "혼밥하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108985-c3b8da2a-1489-489c-aac3-52d9ec2e8833.png",
    phone: "0226843519",
  },
  {
    name: "꼼사모꼼장어숯불구이",
    summary: "직화삼겹 쭈꾸미, 꼼장어 숯불구이",
    category: ["가성비좋은곳", "회식하기좋은곳"],
    img: "data:image/jpeg;base64,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",
    phone: "010-8964-7026",
  },
  {
    name: "봉구비어",
    summary: "맛있는 크림맥주",
    category: ["회식하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108725-edc606d4-d1a9-4bad-a613-fc34031d8465.png",
    phone: "02-2066-0387",
  },
  {
    name: "착한쌈싸",
    summary: "건강한 쌈밥 정식이 유명한 맛집",
    category: ["회식하기좋은곳", "혼밥하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108903-5eb61d94-6dde-41f7-b65a-ea092e9f9553.png",
    phone: "번호모름",
  },
  {
    name: "냉삼집",
    summary: "엔틱한 분위기의 냉동 삼겹살 맛집",
    category: ["회식하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156108733-46002def-bd1e-47b2-9e83-db9ed0fb43d2.png",
    phone: "02-2066-0080",
  },
  {
    name: "뚜레쥬르",
    summary: "간단한 한끼, 생일케잌 바로 여기서!",
    category: ["가성비좋은곳", "혼밥하기좋은곳"],
    img: "data:image/png;base64,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",
    phone: "02-2066-9966",
  },
  {
    name: "신마포갈매기",
    summary: "갈매기 끼룩끼룩",
    category: ["회식하기좋은곳"],
    img: "https://mblogthumb-phinf.pstatic.net/MjAxODAxMDJfMjQ5/MDAxNTE0ODY2MTM1MDUy.CszTJia_MwiGQdRyUZ_BArt52uXdSLRfEubySh_UZWYg.qWugr6n89wa_iZOGxejn0Co8POqLq4K3pG1ygt_b1LUg.JPEG.ssongs_d/KakaoTalk_20180102_123905651.jpg?type=w800",
    phone: "02-2625-6092",
  },
  {
    name: "다원국수",
    summary: "깊은 산속 옹달샘 같은 맛집",
    category: ["가성비좋은곳", "해장하기좋은곳", "혼밥하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156355733-b10631ea-ed64-468a-b7d7-ae24f31697cd.png",
    phone: "02-2060-0090",
  },
  {
    name: "153닭불덮밥",
    summary: "한식의 감칠맛을 담은 퓨전요리",
    category: ["가성비좋은곳", "혼밥하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156374230-e624f8c7-434f-4469-b9f3-7636a8f1beb6.jpg",
    phone: "02-2617-0153",
  },
  {
    name: "의정부부대찌개",
    summary: "육수 맛이 일품인 부대찌개 전문점",
    category: ["가성비좋은곳", "해장하기좋은곳", "회식하기좋은곳"],
    img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190115_174%2F1547540183545AQQRD_JPEG%2Fo6-lFX61nNqkNjA2aOgA-zlZ.jpeg.jpg",
    phone: "02-2618-3685",
  },
  {
    name: "고바우",
    summary: "그때 그 시절에 먹던 덩어리 생고기",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://t1.daumcdn.net/cfile/tistory/227A183558CF06EB28",
    phone: "02-2611-5586",
  },
  {
    name: "이삭토스트",
    summary: "가성비 갑! 한끼 뚝딱!",
    category: ["혼밥하기좋은곳", "가성비좋은곳"],
    img: "https://post-phinf.pstatic.net/MjAxODA0MjdfMjUw/MDAxNTI0Nzk4NDE0NTQx.jTzOaLH03EX3W9p-7C3SF7wRhef36HnLrpPdGdlyz-Eg.M3lKaeOMkTxUASDMTidNeUfuHUkb89QOeGMDMAS2I7Ag.JPEG/1.jpg?type=w1200",
    phone: "02-2686-5408",
  },
  {
    name: "친구야호프",
    summary: "치킨같은 닭강정",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjRfMTE5/MDAxNjE5MjY5NTM0MDY0.2ijYtVGpNZdywBwyuWHc5szwIGcUB_YOJxC3PCkUOaMg.3lsw9m2IXu5DSVmWVj8aKq109i4mYgO2P-OJl7Ficz0g.JPEG.dasol3331/1.JPG?type=w800",
    phone: "02-2685-2434",
  },
  {
    name: "우방정육식당",
    summary: "이게 육회야 빙수야, 눈꽃 빙수 맛집",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156375410-51f07c9c-40cd-47b7-80a2-a093105811b0.png",
    phone: "02-2615-4651",
  },
  {
    name: "약초마을",
    summary: "약초 백숙 삼계탕 맛집",
    category: [
      "회식하기좋은곳",
      "가성비좋은곳",
      "혼밥하기좋은곳",
      "해장하기좋은곳",
    ],
    img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MjFfMTIw%2FMDAxNTkyNzI2NTkyOTc1.HV9HApO93yn3wPSA8LTwYnYGjQ-NCl_M9yBFVMaT5Dog.HfrEubmc0s1bhUfTTvnCKi1-UT4MYeLW2AbUpsU5RoAg.JPEG.remember1742%2Foutput_1163094988.jpg",
    phone: "02-2617-3939",
  },
  {
    name: "꼬꼬랑 호프랑",
    summary: "친절하고 맛있는 온수 술집",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200407_70%2F158622876826128rSq_JPEG%2F2zLwlOZ-L6aE656dvAyuTpD1.jpg",
    phone: "02-2617-3939",
  },
  {
    name: "바베큐보스치킨",
    summary: "숯불바베큐전문점",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156121171-b0f3882f-313e-4e77-946e-5601f33e4ed1.png",
    phone: "02-2686-9199",
  },
  {
    name: "피자마루",
    summary: "건강한 맛! 착한 가격!",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156121372-4c1efb8b-4822-47e5-9c99-38235e28a9c4.png",
    phone: "02-2060-1082",
  },
  {
    name: "개성진순대",
    summary: "온수역 순댓국 맛집",
    category: ["해장하기좋은곳", "혼밥하기좋은곳", "가성비좋은곳"],
    img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDVfOTEg%2FMDAxNjA0NTM0Njc0MjM1.OeLN8fYL911jEXWgZGT1NllbEcdEEoaT7V315pAFMiQg.BxD5CPllNTG9jyiYP1Sb-BACCHcgQ7RGYrW_r9ugEYUg.JPEG.tkacjsvh3273%2FKakaoTalk_20201105_012045780.jpg",
    phone: "02-2611-1116",
  },
  {
    name: "파리바게뜨",
    summary: "스위뜨, 디저뜨, 파리바게뜨!",
    category: ["가성비좋은곳", "혼밥하기좋은곳"],
    img: "https://user-images.githubusercontent.com/63100352/156379510-4221ced2-fb24-42f7-949a-0cfa1618922a.png",
    phone: "02-2060-0332",
  },
  {
    name: "세모네모",
    summary: "집나간 동그라미도 온다는 맛집",
    category: ["혼밥하기좋은곳", "가성비좋은곳"],
    img: "data:image/jpeg;base64,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",
    phone: "02-2613-5453",
  },
  {
    name: "본가칡냉면",
    summary: "여름의 더위는 여기서 달래자!",
    category: ["혼밥하기좋은곳", "가성비좋은곳"],
    img: "https://skhu-likelion-9th.github.io/LikeFoodLion/css/nang.jpg",
    phone: "02-2615-1331",
  },
  {
    name: "중화요리함지박",
    summary: "알 사람들은 안다는 중식 맛집",
    category: ["혼밥하기좋은곳", "가성비좋은곳"],
    img: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMzBfNjgg/MDAxNTcyMzk4NzQ1MjA3.UQiIyHGUNFwoCh5JwZiOLKdiUUg9kfTcdmUtNXfnGoAg.d9W8CDgnbCJN2TZGAEY-PLYdS7SRzt0e8owKZYNBJgAg.JPEG.ohs526/IMG_7915.jpg?type=w800",
    phone: "010-2625-7920",
  },
  {
    name: "하루",
    summary: "오늘 '하루'에서 술 한잔 어때?",
    category: ["회식하기좋은곳", "가성비좋은곳"],
    img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201214_256%2F1607915267226Vc1g2_JPEG%2FkRqNEa5YiivR4JZ8MiOinnjH.jpg",
    phone: "02-2688-2256",
  },
];

interface IObjectedStores {
  [categoryName: string]: IStore[];
}

const objectedStores: IObjectedStores = {
  가성비좋은곳: [],
  혼밥하기좋은곳: [],
  회식하기좋은곳: [],
  해장하기좋은곳: [],
  개발자추천찐맛집: [],
};

stores.forEach((store) => {
  store.category.forEach((category) => {
    objectedStores[category].push(store);
  });
});

export default objectedStores;
