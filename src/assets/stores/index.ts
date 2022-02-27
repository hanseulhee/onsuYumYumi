interface IStore {
  name: string;
  summary: string;
  category: string[];
}

const stores: IStore[] = [
  {
    name: "돈돈",
    summary: "착한 가격의 생삼겹살집",
    category: ["가성비좋은곳", "회식하기좋은곳"],
  },
  {
    name: "토마토",
    summary: "성공회대생 혼밥성지",
    category: ["혼밥하기좋은곳", "가성비좋은곳"],
  },
  {
    name: "썬더치킨",
    summary: "저렴하고 맛있는 치킨집",
    category: ["회식하기좋은곳"],
  },
];

interface IObjectedStores {
  [categoryName: string]: IStore[];
}

const objectedStores: IObjectedStores = {
  가성비좋은곳: [],
  혼밥하기좋은곳: [],
  회식하기좋은곳: [],
};

stores.forEach((store) => {
  store.category.forEach((category) => {
    objectedStores[category].push(store);
  });
});

export default objectedStores;
