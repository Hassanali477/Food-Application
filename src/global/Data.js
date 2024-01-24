export const filterData = [
  {name: 'Fast food', image: require('../Assets/fastFood.jpg'), id: '0'},
  {name: 'Burger', image: require('../Assets/Burger.jpg'), id: '1'},
  {name: 'Salad', image: require('../Assets/Salad.jpg'), id: '2'},
  {name: 'Coffee', image: require('../Assets/Coffee.jpg'), id: '3'},
  {name: 'Pizza', image: require('../Assets/Pizza.jpg'), id: '4'},
  {name: 'Sea', image: require('../Assets/Sea.jpg'), id: '5'},
  {name: 'Maxican', image: require('../Assets/Maxican.jpg'), id: '6'},
  {name: 'Chinese', image: require('../Assets/Chinese.jpg'), id: '7'},
];

export const restaurantsData = [
  {
    restaurantName: 'McDonalds',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../Assets/Card.jpg'),
    averageReview: 4.9,
    numberofReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325}, // Added colon after coordinates
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps, Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 0,
  },
  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../Assets/Card2.jpg'),
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: 26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 18,
    foodType: 'Chicken, Chicken wings',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 1,
  },
  {
    restaurantName: 'Steers',
    farAway: '5',
    businessAddress: '17 Olivia Rd, Johannesburg',
    images: require('../Assets/Card3.jpg'),
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 2,
  },
  {
    restaurantName: 'Roman Pizza',
    farAway: '7',
    businessAddress: '15 Atlas Rd, Kempton Park',
    images: require('../Assets/Card4.jpg'),
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    averageReview: 4.3,
    numberOfReview: 700,
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 3,
  },
];

export const restaurantsData1 = [
  {
    restaurantName: 'Sea',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../Assets/Sea.jpg'),
    averageReview: 4.9,
    numberofReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325}, // Added colon after coordinates
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps, Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 0,
  },
  {
    restaurantName: 'Chinese',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../Assets/Chinese.jpg'),
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: 26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 18,
    foodType: 'Chicken, Chicken wings',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 1,
  },
  {
    restaurantName: 'Pizza',
    farAway: '5',
    businessAddress: '17 Olivia Rd, Johannesburg',
    images: require('../Assets/Pizza.jpg'),
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 2,
  },
  {
    restaurantName: 'Maxican',
    farAway: '7',
    businessAddress: '15 Atlas Rd, Kempton Park',
    images: require('../Assets/Maxican.jpg'),
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    averageReview: 4.3,
    numberOfReview: 700,
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 3,
  },
];

export const restaurantsData2 = [
  {
    restaurantName: 'Fast food',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../Assets/fastFood.jpg'),
    averageReview: 4.9,
    numberofReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325}, // Added colon after coordinates
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps, Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 0,
  },
  {
    restaurantName: 'Burger',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../Assets/Burger.jpg'),
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: 26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 18,
    foodType: 'Chicken, Chicken wings',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 1,
  },
  {
    restaurantName: 'Salad',
    farAway: '5',
    businessAddress: '17 Olivia Rd, Johannesburg',
    images: require('../Assets/Salad.jpg'),
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 2,
  },
  {
    restaurantName: 'Coffee',
    farAway: '7',
    businessAddress: '15 Atlas Rd, Kempton Park',
    images: require('../Assets/Coffee.jpg'),
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    averageReview: 4.3,
    numberOfReview: 700,
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
    id: 3,
  },
];

export const productData = [
  {
    name: 'Fast Food',
    price: 29.3,
    image: require('../Assets/fastFood.jpg'),
    details: 'Two 100% fresh fast food that are hot,deliciously',
    id: 0,
  },
  {
    name: 'Burger',
    price: 50.8,
    image: require('../Assets/Burger.jpg'),
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 1,
  },
  {
    name: 'Pizza',
    price: 70,
    image: require('../Assets/Pizza.jpg'),
    details: 'Two 100% fresh Pizza that are hot,deliciously',
    id: 2,
  },

  {
    name: 'Fast Food',
    price: 29.3,
    image: require('../Assets/fastFood.jpg'),
    details: 'Two 100% fresh fast food that are hot,deliciously',
    id: 3,
  },
  {
    name: 'Burger',
    price: 70.2,
    image: require('../Assets/Burger.jpg'),

    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 4,
  },
  {
    name: 'Pizza',
    price: 70,
    image: require('../Assets/Pizza.jpg'),
    details: 'Two 100% fresh Pizza that are hot,deliciously',
    id: 5,
  },
];

export const menuData = [
  {title: 'BEEF', special: false, key: 0},
  {title: 'CHICKEN', special: false, key: 1},
  {title: 'VEGGIE BURGER', special: false, key: 2},
  {title: 'FRIES& CORN', special: false, key: 3},
  {title: 'SALADS', special: false, key: 4},
  {title: 'HAPPY MEALS', special: false, key: 5},
  {title: 'SAHRE BOX', special: false, key: 6},
  {title: 'MILKSHAKES', special: false, key: 7},
  {title: 'COLD DRINKS', special: false, key: 8},
  {title: 'DESSERTS', special: false, key: 9},
  {title: 'HOT DRINKS', special: false, key: 10},
];

export const specialData = [
  {title: 'LIMITED OFFER', key: 0},
  {title: 'GO CHILLI', key: 1},
  {title: 'GO CHEESE', key: 2},
  {title: 'MCCHICKEN DELUXE PROMO', key: 3},
];

export const menu = [
  {key: 1, title: 'BEEF'},
  {key: 2, title: 'CHICKEN'},
  {key: 3, title: 'VEGGIE BURGER'},
  {key: 4, title: 'SHARE BOX'},
  {key: 5, title: 'Happy Meals'},
  {key: 6, title: 'Fries'},
  {key: 7, title: 'Sides'},
  {key: 8, title: 'Milkshakes'},
];

export const menuDetailedData = [
  {
    meal: 'Big Mac',
    price: 70.2,
    image:
      'https://t3.ftcdn.net/jpg/01/00/01/98/240_F_100019883_JiV1c06nylljO3VEESkNvihShSzkqC50.jpg',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'Chicken Cheese Burger',
    price: 99.3,
    image:
      'https://media.istockphoto.com/id/172449461/photo/chicken-burger.jpg?s=612x612&w=0&k=20&c=hxb7Yr7ZtGbfJGeHWMMBFl-VdiDoZdKd7TeZHj3wFEs=',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Chicken Burger',
    price: 45.7,
    image:
      'https://images.pexels.com/photos/5474836/pexels-photo-5474836.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },
  {
    meal: 'Pizza',
    price: 45.7,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIat_LJFZS6Lsf-OCtm0A_UiIrmPO-AzTiJdbK2LoOBBcMJJvnvBJwbtFxII1EF64m220&usqp=CAU',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },
  {
    meal: 'Roman Pizza',
    price: 50.8,
    image:
      'https://tastecooking.com/wp-content/uploads/2023/03/Roman-Pizza.jpeg',
    details: 'McFeast features two 100% pizza that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Hand cut chips',
    price: 29.3,
    image:
      'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg',
    details: 'Two 100% fresh fries that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'Club Sandwich',
    price: 70.2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEeiPWGmV6ZFMDH4YZU6u2Pm7Ipx6q5343ug&usqp=CAU',
    details: 'McFeast features two 100% fresh club sandwich that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5,
  },
];
