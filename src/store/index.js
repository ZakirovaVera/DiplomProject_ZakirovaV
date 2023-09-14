import { createStore } from 'vuex'

export default createStore({
  state: {
    infoLogo: {
      logotype: require('@/assets/img/logo_cupcake.svg'),
      nameFirma: "Glaze.tmn",
      confectionersPhone: "+7-929-265-44-96",
      confectionersName: "Иванова Юлия",
      confectionersEmail: "mail@mail.com",
      linkInstagram: 'https://www.instagram.com/p/CvrXmMrrCPj/?igshid=MzRlODBiNWFlZA==',
      linkVk: 'https://vk.com/public211288485',
      diplom: [require('@/assets/img/diplom3.jpg'), require('@/assets/img/diplom1.jpg'), require('@/assets/img/diplom2.jpg')]
    },
    menulinks: [
      {
        id: 1,
        title: 'Главная',
        url: '/'
      },
      {
        id: 2,
        title: 'Обо мне',
        url: '/about'
      },
      {
        id: 3,
        title: 'Видео',
        url: '/video'
      },
      {
        id: 4,
        title: 'Контакты',
        url: '/contact'
      },
      {
        id: 5,
        title: 'Доставка и оплата',
        url: '/delivery'
      },
      {
        id: 6,
        title: 'Каталог',
        url: '/catalog'
      }
    ],
    promoPhoto: require('@/assets/img/promo_photo.jpg'),
    listFillings: [
      //начинки/торты
      {
        name: "Красный бархат",
        tag: 'Начинки',
        img: require('@/assets/img/red_velvet2.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 10,
      },
      {
        name: "Сникерс",
        tag: 'Начинки',
        img: require('@/assets/img/snickers.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 8,
      },
      {
        name: "Малина-манго",
        tag: 'Начинки',
        img: require('@/assets/img/description-raspberries_mango.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 8,
      },
      {
        name: "Шоколад манго-маракуйя",
        tag: 'Начинки',
        img: require('@/assets/img/chocolate_mango_passion_fruit.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Три шоколада",
        tag: 'Начинки',
        img: require('@/assets/img/three_chocolate.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 6,
      },
      {
        name: "Молочная девочка",
        tag: 'Начинки',
        img: require('@/assets/img/milky_girl.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 5,
      },
      {
        name: "Фисташка-малина",
        tag: 'Начинки',
        img: require('@/assets/img/pistachio_raspberry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Феррейро",
        tag: 'Начинки',
        img: require('@/assets/img/ferreiro.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Шоколадно-ягодный",
        tag: 'Начинки',
        img: require('@/assets/img/chocolate_berry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 10,
      },
      {
        name: "Ягодный клубника-малина",
        tag: 'Начинки',
        img: require('@/assets/img/berry_strawberry-raspberry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Свадебный торт",
        tag: 'Торты',
        img: require('@/assets/img/cake1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Свадебный торт",
        tag: 'Торты',
        img: require('@/assets/img/cake2.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Свадебный торт",
        tag: 'Торты',
        img: require('@/assets/img/cake3.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Свадебный торт",
        tag: 'Торты',
        img: require('@/assets/img/cake4.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Свадебный торт",
        tag: 'Торты',
        img: require('@/assets/img/cake5.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Свадебный торт",
        tag: 'Торты',
        img: require('@/assets/img/cake6.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Торт",
        tag: 'Торты',
        img: require('@/assets/img/cake7.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Бомба",
        tag: 'Торты',
        img: require('@/assets/img/cake8.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Бомба",
        tag: 'Торты',
        img: require('@/assets/img/cake9.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Бомба",
        tag: 'Торты',
        img: require('@/assets/img/cake10.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Медовая цифра",
        tag: 'Торты',
        img: require('@/assets/img/honey_figure1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      {
        name: "Медовая цифра",
        tag: 'Торты',
        img: require('@/assets/img/honey_figure2.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 9,
      },
      //капкейк
      {
        name: "Капкейк",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/cupcake1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Капкейк",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/cupcake2.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Капкейк",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/cupcake3.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Капкейк",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/cupcake4.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Капкейк",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/cupcake5.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Капкейк",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/cupcake6.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      //эскимо
      {
        name: "Эскимо",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/popsicle1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Эскимо",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/popsicle2.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Эскимо",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/popsicle3.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Эскимо",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/popsicle4.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      //чизкейк
      {
        name: "Чизкейк Лайм-Кокос",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_lime_coconut.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Лимонный",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_lemon.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Малина-Миндаль",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_raspberry_almond.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Манго-Фисташка",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_mango_pistachio.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Тотально-ягодный",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_total-berry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Лаванда-Смородина",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_lavender-currant.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Малина-пармезан",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_raspberry_parmesan.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Сникерс",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_snickers.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк Черничный",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese_blueberry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Чизкейк",
        tag: 'Чизкейк',
        img: require('@/assets/img/cheese.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      //Другое
      {
        name: "Фигурки",
        tag: 'Другое',
        img: require('@/assets/img/other1.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 7,
      },
      {
        name: "Трубочки",
        tag: 'Другое',
        img: require('@/assets/img/other2.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: null,
        popularity: 6,
      },
    ],
    imgAboutMe: require('@/assets/img/aboutMe.jpg'),
    reviewsSwiper: [
      require('@/assets/img/reviews1.jpg'), require('@/assets/img/reviews2.jpg'), require('@/assets/img/reviews3.jpg'), require('@/assets/img/reviews4.jpg'), require('@/assets/img/reviews5.jpg'), require('@/assets/img/reviews6.jpg'), require('@/assets/img/reviews7.jpg'), require('@/assets/img/reviews8.jpg'), require('@/assets/img/reviews9.jpg'), require('@/assets/img/reviews10.jpg'), require('@/assets/img/reviews11.jpg'), require('@/assets/img/reviews12.jpg'), require('@/assets/img/reviews13.jpg'), require('@/assets/img/reviews14.jpg'), require('@/assets/img/reviews15.jpg'), require('@/assets/img/reviews16.jpg'), require('@/assets/img/reviews17.jpg'), require('@/assets/img/reviews18.jpg'), require('@/assets/img/reviews19.jpg'), require('@/assets/img/reviews20.jpg'), require('@/assets/img/reviews21.jpg'), require('@/assets/img/reviews22.jpg'), require('@/assets/img/reviews23.jpg'), require('@/assets/img/reviews24.jpg'), require('@/assets/img/reviews25.jpg'), require('@/assets/img/reviews26.jpg'), require('@/assets/img/reviews27.jpg'), require('@/assets/img/reviews28.jpg'), require('@/assets/img/reviews29.jpg'), require('@/assets/img/reviews30.jpg'), require('@/assets/img/reviews31.jpg'), require('@/assets/img/reviews32.jpg'), require('@/assets/img/reviews33.jpg'), require('@/assets/img/reviews34.jpg'), require('@/assets/img/reviews35.jpg'), require('@/assets/img/reviews36.jpg'), require('@/assets/img/reviews37.jpg'), require('@/assets/img/reviews38.jpg'), require('@/assets/img/reviews39.jpg'), require('@/assets/img/reviews40.jpg'), require('@/assets/img/reviews41.jpg'), require('@/assets/img/reviews42.jpg'), require('@/assets/img/reviews43.jpg')
    ]
  },
  getters: {
    getTop3(state) {
      return state.listFillings
        .sort((x, y) => y.popularity - x.popularity)
        .slice(0, 3);
    },
    getTags(state) {
      return state.listFillings
        .map(function (item) {
          return item.tag;
        }).filter((value, index, array) => array.indexOf(value) === index);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
