const burgers = [
   {
      name: 'Мясная бомба',
      img: './images/burger/photo.png',
      price: '689₽',
      weight: '520г',
      calories: 'ккал 430',
      components: [
         'Пшеничная булочка',
         'Котлета из говядины',
         'Красный лук',
         'Листья салата',
         'Соус горчичный'
      ],
      characteristic: 'Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.'
   },
   {
      name: 'Супер сырный',
      img: './images/burger/photo1.png',
      price: '550₽',
      weight: '512г',
      calories: 'ккал 480',
      components: [
         'Пшеничная булочка',
         '2 котлеты из говядины',
         'Маринованые огурчики',
         'Сырный соус',
         'Сыр'
      ],
      characteristic: 'Сразу два бифштекса под сырным соусом и сырная лава тающего Камамбера — на мягкой булочке с мариноваными огурчиками.'
   },
   {
      name: 'Сытный',
      img: './images/burger/photo2.png',
      price: '639₽',
      weight: '580г',
      calories: 'ккал 560',
      components: [
         'Пшеничная булочка',
         '2 котлеты из свинины',
         'Жаренный лук',
         'Маринованые огурчики',
         'Соус Пармеджано',
         'Сыр',
         'Вяленый томат'
      ],
      characteristic: 'Нежный мраморный бифштекс, пикантный Пармезан, щедрая порция соуса Пармеджано! А ещё внутри жаренный лучок и вяленные томаты на мягкой булочке. Восторг уместен!'
   },
   {
      name: 'Тяжелый удар',
      img: './images/burger/photo3.png',
      price: '480₽',
      weight: '470г',
      calories: 'ккал 510',
      components: [
         'Пшеничная булочка',
         '2 котлеты из свинины',
         'Маринованный лук',
         'Маринованые огурчики',
         'Соус острый томатный',
         'Сыр',
         'Свежий томат'
      ],
      characteristic: 'Приготовленный на огне бифштекс из 100%-й свинины под острым томатным соусом, два нежных ломтика сыра, сочные томаты, свеженарезанный салат Айсберг, густой майонез, маринованные огурчики и лук на нежной булочке с кунжутом'
   },
   {
      name: 'Вечная классика',
      img: './images/burger/photo4.png',
      price: '450₽',
      weight: '450г',
      calories: 'ккал 480',
      components: [
         'Пшеничная булочка',
         'Котлета из говядины',
         'Маринованный лук',
         'Маринованые огурчики',
         'Майонез',
         'Сыр',
         'Свежий томат',
         'Кетчуп томатный',
         'Салат Айсберг'
      ],
      characteristic: 'Это вкуснейшая приготовленная на огне 100% говядина с сочными помидорами, свежим нарезанным листовым салатом, густым майонезом, хрустящими маринованными огурчиками и свежим луком на нежной булочке с кунжутом.'
   },
   {
      name: 'Итальянский',
      img: './images/burger/photo5.png',
      price: '560₽',
      weight: '510г',
      calories: 'ккал 520',
      components: [
         'Чиабатта',
         'Котлета из лося',
         'Руккола',
         'Горичичный соус',
         'Сыр'
      ],
      characteristic: 'Нежый приготовленый на огне рубленая котлета из лося под горчичным сосус,  а также листья сочной руколлы не оставят вас равнодушными! '
   }
];

const snacks = [
   {
      name: 'Начос',
      img: './images/snacks/photo.png',
      price: '250₽',
      weight: '220г',
      calories: 'ккал 334',
      components:[
         'Помидоры',
         'Репчатый лук',
         'Чеснок',
         'Красный жгучий перец',
         'Кинза',
         'Сок лимона',
         'Начос кукурузные'         
      ]
   },
   {
      name: 'Картошка фри',
      img: './images/snacks/photo1.png',
      price: '245₽',
      weight: '180г',
      calories: 'ккал 496',
      components:[
         'Картофель',
         'Соль'       
      ]
   },
   {
      name: 'Луковые кольца',
      img: './images/snacks/photo2.png',
      price: '230₽',
      weight: '160г',
      calories: 'ккал 284',
      components:[
         'Репчатый лук',
         'Соль',
         'Кляр'      
      ]
   }
];

const hotDogs = [
   {
      name: 'Домашний хот-дог',
      img: './images/hot-dogs/photo.png',
      price: '290₽',
      weight: '250г',
      calories: 'ккал 336',
      components:[
         'Говяжья сосиска',
         'Репчатый лук',
         'Чеснок',
         'Болгарский перец',
         'Пшеничная булочка'         
      ]
   },
   {
      name: 'Жгучий хот-дог',
      img: './images/hot-dogs/photo1.png',
      price: '239₽',
      weight: '245г',
      calories: 'ккал 345',
      components:[
         'Говяжья сосиска',
         'Репчатый лук',
         'Чеснок',
         'Жгучий перец',
         'Пшеничная булочка',
         'Острый соус'         
      ]
   },
   {
      name: 'Классический хот-дог',
      img: './images/hot-dogs/photo3.png',
      price: '220₽',
      weight: '215г',
      calories: 'ккал 290',
      components:[
         'Говяжья сосиска',
         'Кетчуп',
         'Горчица',
         'Пшеничная булочка'         
      ]
   }
];

const combo = [
   {
      name: 'Combo-Bombo',
      img: './images/combo/combo1.jpg',
      price: '990₽',
      weight: '1200г',
      calories: 'ккал 1500',
      components:[
         'Бургер',
         'Бургер',
         'Картофель фри',
         'Соус на выбор'
      ]
   },
   {
      name: 'Combo-Wokbo',
      img: 'images/combo/Combo-Wokbo.png',
      price: '699₽',
      weight: '800г',
      calories: 'ккал 800',
      components:[
         'Wok Классический (2 шт)'    
      ]
   },
   {
      name: 'Год Дракона',
      img: './images/combo/drago-years.png',
      price: '999₽',
      weight: '1070г',
      calories: 'ккал 823',
      components:[
         'Дракон 30 см',
         'Пиццбург 30 см'
      ]
   },
];

const wok = [
   {
      name: 'Том Ям с креветкой',
      img: 'images/wok/tom-yam.png',
      price: '399₽',
      weight: '200г',
      calories: 'ккал 420',
      components:[
         'лапша удон',
         'креветка тигровая',
         'паприка',
         'шампиньоны',
         'томаты черри',
         'кинза',
         'Том Ям соус'        
      ]
   },
   {
      name: 'Карри',
      img: 'images/wok/karri.png',
      price: '339₽',
      weight: '230г',
      calories: 'ккал 386',
      components:[
         'цыпленок',
         ' лапша удон',
         'фасоль стручковая',
         'шампиньоны',
         'овощи микс',
         'перец болгарский',
         'лук репчатый',
         'Соус Карри'        
      ]
   },
   {
      name: 'Классический',
      img: 'images/wok/Klassik.png',
      price: '299₽',
      weight: '225г',
      calories: 'ккал 428',
      components:[
         'лапша удон',
         'цыпленок',
         'овощи микс',
         'шампиньоны',
         'перец болгарский',
         'огурец',
         'соус терияки',
         'кунжут'        
      ]
   },
   {
      name: 'Сытный',
      img: 'images/wok/sitno.png',
      price: '339₽',
      weight: '200г',
      calories: 'ккал 453',
      components:[
         'лапша удон',
         'цыпленок',
         'бекон',
         'шампиньоны',
         'чеснок',
         'сливочный соус',
         'кунжут'        
      ]
   },
   {
      name: 'По-китайски',
      img: 'images/wok/China.png',
      price: '319₽',
      weight: '190г',
      calories: 'ккал 396',
      components:[
         'лапша удон',
         'цыпленок',
         'паприка',
         'лук репчатый',
         'кинза',
         'чеснок',
         'соус шрирачи',
         'соус Амой',
         'пикантный соус'      
      ]
   },
   {
      name: 'Вегетарианский',
      img: 'images/wok/vegan.png',
      price: '269₽',
      weight: '225г',
      calories: 'ккал 346',
      components:[
         'лапша удон',
         'лук репчатый',
         'паприка',
         'огурец',
         'овощи микс',
         'соус терияки',
         'шампиньоны',
         'томаты черри',
         'кунжут',
         'масло растительное'
      ]
   },
];

const pizza = [
   {
      name: 'Посейдон 25 см',
      img: 'images/pizza/poseidon.png',
      price: '539₽',
      weight: '480г',
      calories: 'ккал 485',
      components:[
         'окунь',
         'креветка салатная',
         'томаты',
         'моцарелла',
         'пармезан',
         'сливочно-чесночный соус',
         'сыр пармезан (сырный борт)'    
      ]
   },
   {
      name: 'Пиццбург 25 см',
      img: 'images/pizza/pizzaburg.png',
      price: '499₽',
      weight: '430г',
      calories: 'ккал 500',
      components:[
         'говядина',
         'бекон жареный',
         'халапеньо',
         'томаты',
         'моцарелла',
         'пармезан',
         'лук красный',
         'сырный соус',
         'соус барбекю',
         'сыр пармезан (сырный борт)'        
      ]
   },
   {
      name: 'Грибная с цыплёнком  25 см',
      img: 'images/pizza/gribnaya-chiken.png',
      price: '539₽',
      weight: '460г',
      calories: 'ккал 486',
      components:[
         'цыпленок',
         'сыр сулугуни',
         'моцарелла',
         'вешенки жареные',
         'жареный лук',
         'грибной соус Жюльен',
         'сливочно-чесночный соус'        
      ]
   },
   {
      name: 'Дракон 25 см',
      img: 'images/pizza/dragon.png',
      price: '449₽',
      weight: '330г',
      calories: 'ккал 456',
      components:[
         'пепперони',
         'шампиньоны',
         'ветчина',
         'паприка',
         'лук красный',
         'халапеньо',
         'моцарелла',
         'пармезан',
         'соус-пицца'     
      ]
   },
   {
      name: 'Посейдон 30 см',
      img: 'images/pizza/poseidon.png',
      price: '789₽',
      weight: '680г',
      calories: 'ккал 585',
      components:[
         'окунь',
         'креветка салатная',
         'томаты',
         'моцарелла',
         'пармезан',
         'сливочно-чесночный соус',
         'сыр пармезан (сырный борт)'    
      ]
   },
   {
      name: 'Пиццбург 30 см',
      img: 'images/pizza/pizzaburg.png',
      price: '749₽',
      weight: '650г',
      calories: 'ккал 620',
      components:[
         'говядина',
         'бекон жареный',
         'халапеньо',
         'томаты',
         'моцарелла',
         'пармезан',
         'лук красный',
         'сырный соус',
         'соус барбекю',
         'сыр пармезан (сырный борт)'        
      ]
   },
   {
      name: 'Грибная с цыплёнком 30 см',
      img: 'images/pizza/gribnaya-chiken.png',
      price: '789₽',
      weight: '590г',
      calories: 'ккал 586',
      components:[
         'цыпленок',
         'сыр сулугуни',
         'моцарелла',
         'вешенки жареные',
         'жареный лук',
         'грибной соус Жюльен',
         'сливочно-чесночный соус'        
      ]
   },
   {
      name: 'Дракон 30 см',
      img: 'images/pizza/dragon.png',
      price: '699₽',
      weight: '460г',
      calories: 'ккал 556',
      components:[
         'пепперони',
         'шампиньоны',
         'ветчина',
         'паприка',
         'лук красный',
         'халапеньо',
         'моцарелла',
         'пармезан',
         'соус-пицца'     
      ]
   }
];
 const dessert =[
   {
      name: 'Чизкейк классический',
      img: './images/dessert/cheesecake.png',
      price: '189₽',
      weight: '120г',
      calories: 'ккал 230',
      components:[
         'Чизкейк классический',
         'топпинг клубничный',
         'топпинг шоколадный'  
      ]
   },
   {
      name: 'Сметанник',
      img: './images/dessert/smetannik.png',
      price: '199₽',
      weight: '166г',
      calories: 'ккал 268',
      components:[
         'сметана',
         'молоко сгущённое',
         'яйцо',
         'грецкий орех',
         'мука',
         'маргарин',
         'сахарная пудра',
         'какао-порошок',
         'сливки'        
      ]
   },

];

const sauces = [
   {
      name: 'Кетчуп',
      img: './images/Sauces/ketchup.png',
      price: '49₽',
      weight: '25г',
      calories: 'ккал 53',
      components:[
         'Кетчуп'      
      ]
   },
   {
      name: 'Сырный соус ',
      img: './images/Sauces/cheese.png',
      price: '49₽',
      weight: '25г',
      calories: 'ккал 66',
      components:[
         'Сырный соус '     
      ]
   },
   {
      name: 'Шашлычный соус',
      img: './images/Sauces/shashlik.png',
      price: '49₽',
      weight: '50г',
      calories: 'ккал 65',
      components:[
         'Шашлычный соус'       
      ]
   },
   {
      name: 'Соус Нежный ',
      img: './images/Sauces/nezhni.png',
      price: '40₽',
      weight: '30г',
      calories: 'ккал 43',
      components:[
         'Соус Нежный '   
      ]
   },
];

const shaurma = [
   {
      name: 'Шаверма куриная',
      img: './images/shaurma/chiken-sh.png',
      price: '380₽',
      weight: '311г',
      calories: 'ккал 663',
      components:[
         'Пшеничная тортилья',
         'жареная маринованная курочка',
         'помидоры',
         'огурцы',
         'пекинская капуста',
         'сметанно-базиликовый соус',
         'соус песто(содержит орехи кешью, кедровые орехи, сыр Пармеджано Реджано!)'
      ]
   },
   {
      name: 'ШАВЕРМА С ГОВЯДИНОЙ',
      img: './images/shaurma/cow-sh.png',
      price: '390₽',
      weight: '325г',
      calories: 'ккал 900',
      components:[
         'Пшеничная тортилья',
         'рубленая говядина',
         'помидоры',
         'огурцы',
         'пекинская капуста',
         'сметанно-базиликовый соус'      
      ]
   },
   {
      name: 'ГАВАЙСКАЯ',
      img: './images/shaurma/havai.png',
      price: '380₽',
      weight: '327г',
      calories: 'ккал 685',
      components:[
         'Пшеничная тортилья',
         'жареная маринованная курочка',
         'ананасы',
         'огурцы',
         'пекинская капуста',
         'сметанно-базиликовый соус',
         'орегано',
         'соус песто(содержит орехи кешью, кедровые орехи, сыр Пармеджано Реджано!)'
      ]
   },
   {
      name: 'ФИЛАДЕЛЬФИЯ',
      img: './images/shaurma/filodelfia.png',
      price: '460₽',
      weight: '276г',
      calories: 'ккал 566',
      components:[
         'Пшеничная тортилья',
         'лосось',
         'огурцы',
         'нори',
         'кунжут',
         'имбирь',
         'сыр "Филадельфия"',
         'соус "Васаби"',
         'соус "Терияки"'        
      ]
   },
]

const menuBurgers = document.querySelector('#burgers');
const menuSnacks = document.querySelector('#snacks');
const menuHotDogs = document.querySelector('#hotDogs');
const menuCombo = document.querySelector('.menu__combo');
const menuShawarma = document.querySelector('.menu__shawarma');
const menuPizza = document.querySelector('.menu__pizza');
const menuWok = document.querySelector('.menu__wok');
const menuDessert = document.querySelector('.menu__dessert');
const menuSauces = document.querySelector('.menu__sauces');

const cardConteiner = document.querySelector('.conteiner');
const hiddenCard = document.querySelector('.card-blank').content;
const menuList = document.querySelector('.menu__list');
const menuListItems = document.querySelectorAll('.menu__item');
const mainTitle = document.querySelector('.main__title');
//BTN
const btnBasketSubmit = document.querySelector('.basket__btn-submit');
const btnPopupCloseDelivery = document.querySelector('#btn-close-delivery');
const btnPopupCloseAboutProduct = document.querySelector('#btn-close-about');

//POPUP
const popupDelivery = document.querySelector('#delivery');
const popupAboutProduct = document.querySelector('#about-product');
//открытие попап
function openPopup(popup){
   popup.classList.add('popup__opened');
}
//закрытие попап
function closePopup(popup){
   popup.classList.remove('popup__opened');
}
//открытие попап доставки
btnBasketSubmit.addEventListener('click', function(){
   openPopup(popupDelivery);
});
//закрытие попап доставки
btnPopupCloseDelivery.addEventListener('click', function(){
   closePopup(popupDelivery);
});

//открытие попап продукта
const onClickOpenCard = evt => {
   const clickCard = evt.currentTargert;
   const clickedCard = clickCard.closest('.card');
   popupAboutProduct.querySelector('.popup__img').src = clickedCard.querySelector('.card__img').src;
   popupAboutProduct.querySelector('.popup__title').textContent = clickedCard.querySelector('.card__name').textContent;
   popupAboutProduct.querySelector('.popup__img').alt = clickedCard.querySelector('.card__name').textContent;
  // popupAboutProduct.querySelector('.popup__text').textContent = clickedCard.querySelector('.');
  openPopup(popupAboutProduct);
}

//закрытие попап продукта
btnPopupCloseAboutProduct.addEventListener('click', function(){
   closePopup(popupAboutProduct);
});

//создание карт из массива 
function createCard(name, img, price, weight){
   const clonedCard = hiddenCard.cloneNode(true);
   const nameCardElement = clonedCard.querySelector('.card__name');
   nameCardElement.textContent = name;
   const imgCardElement = clonedCard.querySelector('.card__img');
   imgCardElement.src = img;
   imgCardElement.alt = name;
   const priceCardElement = clonedCard.querySelector('.card__price');
   priceCardElement.textContent = price;
   const weightCardElement = clonedCard.querySelector('.card__weight');
   weightCardElement.textContent = weight;
   clonedCard.querySelector('.card').addEventListener('click', onClickOpenCard);
   return clonedCard;
};

//добавление карт в контейнер
function renderCard(card){
   const newCard = createCard(card.name, card.img, card.price, card.weight);
   cardConteiner.append(newCard);
};

//переключение меню
const menuListControler = () => {
   menuList.addEventListener('click', (e) => {
      const categoryItem = e.target.closest('.menu__item');
      if(!categoryItem) return;
      menuListItems.forEach((item)=> {
         if (item === categoryItem) {
            item.classList.add('menu__item_active');
            mainTitle.textContent = item.textContent;
         }else{
            item.classList.remove('menu__item_active');
         }
         });
   });
};

menuListControler();
burgers.forEach(card => {
   renderCard(card);
});

menuBurgers.addEventListener('click', function(){
   cardConteiner.textContent='';
   burgers.forEach(card => {
      renderCard(card);
   });
});

menuSnacks.addEventListener('click', function(){
   cardConteiner.textContent='';
   snacks.forEach(card => {
      renderCard(card);
   })
});

menuHotDogs.addEventListener('click', function(){
   cardConteiner.textContent='';
   hotDogs.forEach(card => {
      renderCard(card);
   })
});

menuCombo.addEventListener('click', function(){
   cardConteiner.textContent='';
   combo.forEach(card => {
      renderCard(card);
   })
});

menuWok.addEventListener('click', function(){
   cardConteiner.textContent='';
   wok.forEach(card => {
      renderCard(card);
   })
});

menuPizza.addEventListener('click', function(){
   cardConteiner.textContent='';
   pizza.forEach(card => {
      renderCard(card);
   })
});

menuDessert.addEventListener('click', function(){
   cardConteiner.textContent='';
   dessert.forEach(card => {
      renderCard(card);
   })
});

menuSauces.addEventListener('click', function(){
   cardConteiner.textContent='';
   sauces.forEach(card => {
      renderCard(card);
   })
});

menuShawarma.addEventListener('click', function(){
   cardConteiner.textContent='';
   shaurma.forEach(card => {
      renderCard(card);
   })
});