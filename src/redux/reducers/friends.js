const initialState = [
  {
    id: 1,
    name: "Lilya",
    avatar:
      "https://sun7-8.userapi.com/impg/wW1hjmJFVNFEZpLYwcwiKcGLpHB9tCF0wn2Fmw/-0FZtDc20MI.jpg?size=100x0&quality=96&crop=0,399,1439,1439&sign=426301f8ede0a53b9146b68e45a9ce78&ava=1",
  },
  {
    id: 2,
    name: "Andrey",
    avatar:
      "https://sun7-7.userapi.com/impf/c845216/v845216482/20d52f/CIuASXBUMRI.jpg?size=100x0&quality=96&crop=213,419,433,433&sign=bed62e3c9dc729f88589dc1334e59dd8&ava=1",
  },
  {
    id: 3,
    name: "Dimych",
    avatar:
      "https://sun7-9.userapi.com/impf/c638820/v638820576/5eacd/-amRnb2TPCc.jpg?size=100x0&quality=96&crop=144,144,1152,1152&sign=afa75f409958fe9a011fd6e31eaeefab&ava=1",
  },
  {
    id: 4,
    name: "Adel",
    avatar:
      "https://sun7-9.userapi.com/impg/c857216/v857216561/1e86ac/Sv74Lpl4hLQ.jpg?size=100x0&quality=96&crop=236,667,1366,1366&sign=0e010f65bba467c28c71cb77fd41f315&ava=1",
  },
  {
    id: 5,
    name: "Felix",
    avatar:
      "https://sun7-6.userapi.com/impf/c858416/v858416258/3f72f/siBznRf04eU.jpg?size=100x0&quality=96&crop=87,1,579,579&sign=f797a8dcb9ff9e150c88ee45c276a1b0&ava=1",
  },
  {
    id: 6,
    name: "Angelina",
    avatar:
      "https://sun7-6.userapi.com/impf/c846218/v846218977/737d4/55bdSrtV-cc.jpg?size=100x0&quality=96&crop=115,372,1173,1173&sign=91e6761cc17b62d04b1f1e506cc90e46&ava=1",
  },
];

const friendsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default friendsReducer;
