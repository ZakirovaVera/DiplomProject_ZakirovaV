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
        url: './'
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
        name: "Эскимо",
        tag: 'Эскимо / Капкейк / Кейк-попс',
        img: require('@/assets/img/cake4.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "",
        tag: 'Чизкейк',
        img: require('@/assets/img/berry_strawberry-raspberry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
    ],
    imgAboutMe: require('@/assets/img/aboutMe.jpg'),
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
