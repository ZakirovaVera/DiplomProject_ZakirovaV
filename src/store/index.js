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
    fillingOptions: [
      {
        name: "НАЧИНКИ 1500 ₽ за 1 кг",
        text:
          ["1 Сникерс классический", "2 Красный бархат классический",
            "3 Банан карамель",
            "4 Молочная девочка" ,
            "5 Лаванда черника лимон", 
            "6 Классический медовик",
            "7 Шоколадный медовик" ,
            "8 Варенная сгущенка с грецким орехом в белом шоколаде (бисквит на выбор)",
            "9 Сливочно ягодный"]
      },
      {
        name: "НАЧИНКИ 1600 ₽ за 1 кг",
        text:
          ["1 Шоколад малина с малиновым кремю на белом шоколаде",
            "2 Шоколадно лимонный мусс (лаймовый)",
            "3 Морковный с карамелью и вишней",
            "4 Сникерс шоколадный",
            "5 Марс",
            "6 Вишня в шоколаде",
            "7 Банан карамель шоколад",
            "8 Ферреро нутелла со  сливками и хрустящий слой",
            "9 Красный бархат с ягодным с кремю на белом шоколаде",
            "10 Клубничный торт"]
      },
      {
        name: "НАЧИНКИ 1700 ₽ за 1 кг",
        text:
          ["1 Клубника молочный шоколад (бисквит белый или шоколадный) крем маскарпоне",
            "2 Тирамису крем маскарпоне",
            "3 Ванильное облако с малиной крем с маскарпоне",
            "5 Фисташка малина с малиновым муссом",
            "6 Шоколад манго маракуйя с кремом маскарпоне",
            "7 Сливочный бисквит малина манго маракуйя с кремом маскарпоне",
            "8 Малиново-манговый шоколад с маскарпоне",
            "9 Ягодный (малина, клубника)",
            "10 Очень ягодный торт (смесь ягод)",
            "11 Черносмородиновый торт",
            "12 Абрикосово-миндальный",
            "13 Вишнево-шоколадный-кофейный",
            "14 Апельсиновый торт"],
      },
      {
        name: "НАЧИНКИ 1800 ₽ за 1 кг",
        text: ["1 Грушевый с сыром долблю и кедровым орехом",
          "2 Фисташка абрикос",
          "3 Фисташка малина",
          "4 Баунти",
          "5 Ферреро шоколадный",
          "6 Рафаэлло",
          "7 Лимон черника с черничным мармеладом",
          "8 Малина белый шоколад",
          "9 Три шоколада  муссовый ",
          "10  шоколадный торт малина фисташка муссовый",
          "ТОРТ С ЧИЗКЕЙКОМ ВНУТРИ:",
          "1 Кофейный хлопок с чизкейком",
          "2 Черничный с чизкейком",
          "3 Орео кейк с чизкейком",
          "4 Морковный карамельный с чизкейком",
          "5 Вишнево кокосовый",
          "6 Клубничный пломбир",
          "7 Бамбук с хлопковым чизкейком",
          "8 Шоколадно вишневый с чизкейком на темном шоколаде ",
          "9 Шоколадный торт со сливочным ликером и чизкейком"],
      }
    ],
    imgAboutMe: require('@/assets/img/aboutMe.jpg'),
    imgAboutMeTwo: require('@/assets/img/history.png'),
    reviewsSwiper: [
      require('@/assets/img/reviews1.jpg'), require('@/assets/img/reviews2.jpg'), require('@/assets/img/reviews3.jpg'), require('@/assets/img/reviews4.jpg'), require('@/assets/img/reviews5.jpg'), require('@/assets/img/reviews6.jpg'), require('@/assets/img/reviews7.jpg'), require('@/assets/img/reviews8.jpg'), require('@/assets/img/reviews9.jpg'), require('@/assets/img/reviews10.jpg'), require('@/assets/img/reviews11.jpg'), require('@/assets/img/reviews12.jpg'), require('@/assets/img/reviews13.jpg'), require('@/assets/img/reviews14.jpg'), require('@/assets/img/reviews15.jpg'), require('@/assets/img/reviews16.jpg'), require('@/assets/img/reviews17.jpg'), require('@/assets/img/reviews18.jpg'), require('@/assets/img/reviews19.jpg'), require('@/assets/img/reviews20.jpg'), require('@/assets/img/reviews21.jpg'), require('@/assets/img/reviews22.jpg'), require('@/assets/img/reviews23.jpg'), require('@/assets/img/reviews24.jpg'), require('@/assets/img/reviews25.jpg'), require('@/assets/img/reviews26.jpg'), require('@/assets/img/reviews27.jpg'), require('@/assets/img/reviews28.jpg'), require('@/assets/img/reviews29.jpg'), require('@/assets/img/reviews30.jpg'), require('@/assets/img/reviews31.jpg'), require('@/assets/img/reviews32.jpg'), require('@/assets/img/reviews33.jpg'), require('@/assets/img/reviews34.jpg'), require('@/assets/img/reviews35.jpg'), require('@/assets/img/reviews36.jpg'), require('@/assets/img/reviews37.jpg'), require('@/assets/img/reviews38.jpg'), require('@/assets/img/reviews39.jpg'), require('@/assets/img/reviews40.jpg'), require('@/assets/img/reviews41.jpg'), require('@/assets/img/reviews42.jpg'), require('@/assets/img/reviews43.jpg')
    ],
    textAboutMe: [
      'Меня зовут Юлия, и вот уже более 4 лет пеку торты для Вас. Постоянно совершенствую свое мастерство: посещаю мастер-классы, перенимаю опыт у коллег, расширяю ассортимент. Готова воплотить любые Ваши идеи.', 'Спасибо Вам, что выбрали меня и остаетесь со мной.', 'Ваш кондитер, Юлия.'
    ],
    historyAboutMe: [
      'Хочу немного рассказать о себе и ближе познакомиться с Вами.', 'В начале своего пути у меня были страхи и сомнения, как я буду печь на заказ, как я буду предлагать Вам свои тортики и десерты. И на сегодняшний день какие стали мои изделия судить Вам, но я постоянно совершенствую свое мастерство.', 'Еще обучаясь в школе я получила корочки кондитера, а инициатором были мои школьные подружки с одной из них мы дружим до сих пор. Пока я болела, записали меня вместе с собой на кондитерские курсы, а я грезила быть секретарем.', 'И так мои корочки были не востребованы много лет...', 'Судьба распорядилась по другому, я получила два высших образования по квалификации педагог-психолог, экономист и третье бухгалтер. Искала себя.', 'Я благодарна, что я попробовала себя в разных направлениях. Это мне дало опыт, новые знакомства и возможности.', 'Находясь в отпуске по уходу за младшим сыном я начала печь, но не для продажи, а чтобы порадовать своих близких.', 'Мои близкие стали оценивать мои кулинарные способности и хвалить меня, что заставило меня развиваться больше и дальше. И мое хобби переросло в основной вид деятельности. В это время произошло сокращение сотрудников на моем постоянном рабочем месте и судьба заставила меня вспомнить о моем свидетельстве кондитера 3 разряда. И понеслось...', 'Хочу отметить то что эта сфера деятельности мне более интересна чем возня с бумагами в офисе. Потому что здесь можно проявлять себя: творчество, креативность, воплощать идеи в реальность, развивать себя и не стоять на месте, а самое главное видеть результат своей работы. Мои предыдущие дипломы мне тоже пригодились: бухгалтерия - в расчетах, психолог - в общение с клиентами. А старший сын глядя на меня определил для себя профессию Кондитер.', 'Я чувствую себя счастливой потому, что нашла себя.'
    ],
  },
  getters: {
    getTop3(state) {
      return state.listFillings
        .sort((x, y) => y.popularity - x.popularity)
        .slice(0, 3);
    },
    getTags(state) {
      return state.listFillings
        .map((item) => item.tag).filter((value, index, array) => array.indexOf(value) === index);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
