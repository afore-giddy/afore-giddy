'use strict'

const db = require('../server/db')
const {User, Product, Collection} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const collection = await Promise.all([
    Collection.bulkCreate([
      {
        id: 1,
        name: 'Lambo',
        description: 'Nulla facilisi.'
      },
      {
        id: 2,
        name: 'Lotus',
        description: 'Aenean fermentum.'
      },
      {
        id: 3,
        name: 'Bugoti',
        description:
          'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
      },
      {
        id: 4,
        name: 'Masserati',
        description:
          'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.'
      }
    ])
  ])

  const car = await Promise.all([
    Product.bulkCreate([
      {
        id: 1,
        make: 'Grand Caravan',
        price: 78356.15,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
        onSale: true,
        isFeatured: false,
        description:
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        collectionId: 2,
        maxSpeed: 152,
        engineType: 'V12',
        transmission: 'Automatic',
        acceleration: 3.3,
        colors: 'Red'
      },
      {
        id: 2,
        make: 'Insight',
        price: 80642.28,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 88072.53,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 71797.87,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 79480.01,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 80764.33,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 78233.43,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 96057.71,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 97148.1,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
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
        price: 98163.93,
        imageArray: ['http://dummyimage.com/400x400.png/dddddd/000000'],
        onSale: false,
        isFeatured: true,
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        collectionId: 1,
        maxSpeed: 217,
        engineType: 'V8',
        transmission: 'Standard',
        acceleration: 3.4,
        colors: 'Blue'
      }
    ])
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${car.length} car`)
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
