'use strict'

const db = require('../server/db')
const {
  User,
  Product,
  Collection,
  Review,
  Order
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.bulkCreate([
      {
        firstName: 'Jeanine',
        lastName: 'Cossentine',
        phoneNumber: '400-187-9525',
        address: '440 Merchant Court',
        billingAddress: '65478 Beilfuss Center',
        isAdmin: false,
        email: 'cody@email.com',
        password: '123'
      },
      {
        firstName: 'Glen',
        lastName: 'Grute',
        phoneNumber: '361-664-2445',
        address: '5006 Ramsey Junction',
        billingAddress: '714 Nova Terrace',
        isAdmin: true,
        email: 'murphy@email.com',
        password: '123'
      },
      {
        id: 3,
        firstName: 'Casper',
        lastName: 'Farny',
        phoneNumber: '183-755-5261',
        address: '1 Aberg Place',
        billingAddress: '6368 Meadow Ridge Point',
        isAdmin: false,
        email: 'casper@email.com',
        password: '123'
      }
    ])
  ])

  const collections = await Promise.all([
    Collection.bulkCreate([
      {
        id: 1,
        name: 'Lambo',
        description: 'Nulla facilisi fermentum. Curabitur gravida nisi at nibh.',
        image: 'http://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png'
      },
      {
        id: 2,
        name: 'Lotus',
        description: 'Aenean fermentum. Curabitur gravida nisi at nibh.',
        image: 'http://www.carlogos.org/logo/Lotus-logo-3000x3000.png'
      },
      {
        id: 3,
        name: 'Bugoti',
        description:
          'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
        image:
          'https://banner2.kisspng.com/20171220/exq/bugatti-logo-png-5a3a261e5991e9.87829451151376028636699311.jpg'
      },
      {
        id: 4,
        name: 'Masserati',
        description:
          'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
        image:
          'https://banner2.kisspng.com/20180406/rew/kisspng-maserati-granturismo-car-logo-wall-decal-5ac71f7ae63143.7450419915229991629429.jpg'
      }
    ])
  ])

  const products = await Promise.all([
    Product.bulkCreate([
      {
        id: 1,
        make: 'Aventador',
        price: 7835615,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: true,
        isFeatured: false,
        description:
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        collectionId: 2,
        maxSpeed: 152,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 3.3,
        colors: 'Silver'
      },
      {
        id: 2,
        make: 'Insight',
        price: 8064228,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: true,
        isFeatured: false,
        description:
          'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        collectionId: 2,
        maxSpeed: 278,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 4.7,
        colors: 'Silver'
      },
      {
        id: 3,
        make: 'Rio',
        price: 8807253,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: false,
        isFeatured: true,
        description:
          'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        collectionId: 1,
        maxSpeed: 207,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 3.2,
        colors: 'Red'
      },
      {
        id: 4,
        make: 'Bonneville',
        price: 7179787,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: false,
        isFeatured: false,
        description:
          'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        collectionId: 2,
        maxSpeed: 191,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 3.1,
        colors: 'Red'
      },
      {
        id: 5,
        make: 'Grand Caravan',
        price: 7948001,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: true,
        isFeatured: false,
        description:
          'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        collectionId: 2,
        maxSpeed: 231,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 5.0,
        colors: 'White'
      },
      {
        id: 6,
        make: 'C-Class',
        price: 8076433,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: false,
        isFeatured: false,
        description:
          'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
        collectionId: 1,
        maxSpeed: 123,
        engineType: 'Electric',
        transmission: 'Standard',
        acceleration: 4.3,
        colors: 'Silver'
      },
      {
        id: 7,
        make: 'Town & Country',
        price: 7823343,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: true,
        isFeatured: true,
        description:
          'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        collectionId: 1,
        maxSpeed: 101,
        engineType: 'Electric',
        transmission: 'Standard',
        acceleration: 4.9,
        colors: 'Black'
      },
      {
        id: 8,
        make: 'Elantra',
        price: 9605771,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: false,
        isFeatured: false,
        description:
          'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        collectionId: 2,
        maxSpeed: 109,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 2.1,
        colors: 'White'
      },
      {
        id: 9,
        make: 'Excel',
        price: 971481,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: true,
        isFeatured: false,
        description:
          'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        collectionId: 2,
        maxSpeed: 169,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 4.6,
        colors: 'Green'
      },
      {
        id: 10,
        make: 'Passat',
        price: 9816393,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://upload.wikimedia.org/wikipedia/commons/c/cc/Red_Lamborghini.svg',
            Yellow:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Yellow_Lamborghini_Gallardo.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Black_Lamborghini_Aventador_%287560011520%29.jpg'
          }
        ],
        onSale: false,
        isFeatured: false,
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        collectionId: 1,
        maxSpeed: 217,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 3.4,
        colors: 'Blue'
      },
      {
        id: 11,
        make: 'Veyron',
        price: 11116393,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/2s/v6/p02sv6qt.jpg',
            Gold:
              'https://arvandplak.ir/wp-content/uploads/2015/04/Black-and-Gold-Bugatti-Veyron-0.jpg',
            Black:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
          }
        ],
        onSale: false,
        isFeatured: false,
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        collectionId: 3,
        maxSpeed: 200,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 3.7,
        colors: 'Blue'
      },
      {
        id: 12,
        make: 'Chiron',
        price: 13116400,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-a530be779d19ef35bba0bc4302629317.jpg',
            Gold:
              'https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4d7e0aefef47f54a3b7f7c4c8d619141.jpg',
            Blue:
              'https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-e6678a2b1c56c59044f81a3742c784d4.jpg'
          }
        ],
        onSale: false,
        isFeatured: false,
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        collectionId: 3,
        maxSpeed: 187,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 3.3,
        colors: 'Blue'
      },
      {
        id: 13,
        make: 'Levante',
        price: 11119000,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://auto.ndtvimg.com/car-images/big/maserati/levante/maserati-levante.jpg?v=14',
            White:
              'https://di-uploads-pod11.dealerinspire.com/reevesimportmotorcars/uploads/2017/11/2019-cayenne-turbo-_4_.jpg',
            Blue:
              'https://www.fckerbeck.com/galleria_images/2560/2560_main_l.jpg'
          }
        ],
        onSale: false,
        isFeatured: false,
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        collectionId: 4,
        maxSpeed: 165,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 3.0,
        colors: 'Blue'
      },
      {
        id: 14,
        make: 'GranTurismo',
        price: 14019000,
        imageArray: [
          {
            default:
              'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
            Red:
              'https://autoweik.com/wp-content/uploads/2018/06/2019-maserati-granturismo-front-picture.jpg',
            White:
              'https://i.pinimg.com/originals/45/d4/b8/45d4b847e04725e177e6b8f6e907dc71.jpg',
            Blue:
              'https://mastercarreview.com/wp-content/uploads/2018/07/2019-maserati-granturismo-interior-hd-images.jpgg'
          }
        ],
        onSale: false,
        isFeatured: true,
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        collectionId: 4,
        maxSpeed: 210,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 3.8,
        colors: 'Blue'
      }
    ])
  ])

  const reviews = await Promise.all([
    Review.bulkCreate([
      {
        id: 1,
        rating: 2,
        title: 'leading edge',
        text:
          'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
        productId: 3,
        userId: 1,
        isFeatured: false
      },
      {
        id: 2,
        rating: 4,
        title: 'migration',
        text: 'Morbi non quam nec dui luctus rutrum.',
        productId: 10,
        userId: 2,
        isFeatured: true
      },
      {
        id: 3,
        rating: 1,
        title: 'Vision-oriented',
        text: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
        productId: 5,
        userId: 2,
        isFeatured: false
      },
      {
        id: 4,
        rating: 3,
        title: 'cohesive',
        text: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        productId: 10,
        userId: 1,
        isFeatured: false
      },
      {
        id: 5,
        rating: 5,
        title: 'Business-focused',
        text:
          'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        productId: 1,
        userId: 1,
        isFeatured: true
      },
      {
        id: 6,
        rating: 1,
        title: 'Business-focused',
        text:
          'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        productId: 1,
        userId: 1,
        isFeatured: false
      },
      {
        id: 7,
        rating: 4,
        title: 'Business-focused',
        text:
          'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        productId: 1,
        userId: 1,
        isFeatured: true
      }
    ])
  ])

  // const orders = await Promise.all([
  //   Order.bulkCreate([
  //     {
  //       id: 1,
  //       userId: 1,
  //       total: 3029.91,
  //       status: 'Processing',
  //       items: [
  //         {
  //           id: 1,
  //           make: 'Grand Caravan',
  //           price: 78356.15,
  //           imageArray: [
  //             {red: 'http://dummyimage.com/400x400.png/dddddd/000000'}
  //           ],
  //           onSale: true,
  //           isFeatured: false,
  //           description:
  //             'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  //           collectionId: 2,
  //           maxSpeed: 152,
  //           engineType: 'V12',
  //           transmission: 'Automatic',
  //           acceleration: 3.3,
  //           colors: 'Red'
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       userId: 2,
  //       total: 4488.12,
  //       status: 'Processing',
  //       items: [
  //         {
  //           id: 9,
  //           make: 'Excel',
  //           price: 97148.1,
  //           imageArray: [
  //             {red: 'http://dummyimage.com/400x400.png/dddddd/000000'}
  //           ],
  //           onSale: true,
  //           isFeatured: false,
  //           description:
  //             'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  //           collectionId: 2,
  //           maxSpeed: 169,
  //           engineType: 'V8',
  //           transmission: 'Standard',
  //           acceleration: 4.6,
  //           colors: 'Green'
  //         }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       userId: 1,
  //       total: 9126.87,
  //       status: 'Processing',
  //       items: [
  //         {
  //           id: 6,
  //           make: 'C-Class',
  //           price: 80764.33,
  //           imageArray: [
  //             {red: 'http://dummyimage.com/400x400.png/dddddd/000000'}
  //           ],
  //           onSale: false,
  //           isFeatured: false,
  //           description:
  //             'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
  //           collectionId: 1,
  //           maxSpeed: 123,
  //           engineType: 'Electric',
  //           transmission: 'Standard',
  //           acceleration: 4.3,
  //           colors: 'Silver'
  //         },
  //         {
  //           id: 4,
  //           make: 'Bonneville',
  //           price: 71797.87,
  //           imageArray: [
  //             {red: 'http://dummyimage.com/400x400.png/dddddd/000000'}
  //           ],
  //           onSale: false,
  //           isFeatured: false,
  //           description:
  //             'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
  //           collectionId: 2,
  //           maxSpeed: 191,
  //           engineType: 'V8',
  //           transmission: 'Standard',
  //           acceleration: 3.1,
  //           colors: 'Red'
  //         }
  //       ]
  //     }
  //   ])
  // ])

  console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${orders.length} users`)
  console.log(`seeded ${products.length} car`)
  console.log(`seeded ${reviews.length} car`)
  console.log(`seeded ${collections.length} car`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
