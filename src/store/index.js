import { createStore } from 'vuex'

export default createStore({
  state: {
    infoLogo: {
      logotype: require('@/assets/img/logo_cupcake.svg'),
      nameFirma: "Glaze.tmn",
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
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
