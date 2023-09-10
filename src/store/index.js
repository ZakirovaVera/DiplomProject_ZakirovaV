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
      linkVk: 'https://vk.com/public211288485'
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
    ],
    burgerMenu: [
      {
        id: 1,
        name: 'Торты',
        link: '/cake',
        li: [
          {
            nameLi: 'Начинки',
            urlLi: '/cake',
          },
          {
            nameLi: 'Свабедные торты',
            urlLi: '/cake',
          },
          {
            nameLi: 'Оформление',
            urlLi: '/cake',
          },
        ]
      },
      {
        id: 2,
        name: 'Капкейки',
        link: '/cupcake',
      },
      {
        id: 3,
        name: 'Трайфлы',
        link: '/trifles',
      },
      {
        id: 3,
        name: 'Эскимо / кейк-попс',
        link: '/popsicle',
      },
    ],
    promoPhoto: require('@/assets/img/promo_photo.jpg'),
    listFillings: [
      {
        name: "Красный бархат",
        img: require('@/assets/img/red_velvet2.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 10,
      },
      {
        name: "Сникерс",
        img: require('@/assets/img/snickers.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 8,
      },
      {
        name: "Малина-манго",
        img: require('@/assets/img/description-raspberries_mango.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 8,
      },
      {
        name: "Шоколад манго-маракуйя",
        img: require('@/assets/img/chocolate_mango_passion_fruit.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Три шоколада",
        img: require('@/assets/img/three_chocolate.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 6,
      },
      {
        name: "Молочная девочка",
        img: require('@/assets/img/milky_girl.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 5,
      },
      {
        name: "Фисташка-малина",
        img: require('@/assets/img/pistachio_raspberry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Феррейро",
        img: require('@/assets/img/ferreiro.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 9,
      },
      {
        name: "Шоколадно-ягодный",
        img: require('@/assets/img/chocolate_berry.jpg'),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat ipsa dolores nesciunt magni. Veritatis libero minus ex ducimus hic.',
        price: 1000,
        popularity: 10,
      },
      {
        name: "Ягодный клубника-малина",
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

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
