// Подключение к базе данных
use('mongodbVSCodePlaygroundDB');
  
use('sample_mflix');

// Получения списка идентификаторов фильмов
db.movies.find({}, {_id: 1}).limit(10)

// Найти все комментарии к определенному фильму:
db.comments.find({
  movie_id: ObjectId("573a1390f29313caabcd4135")
})

// Найти все фильмы, выпущенные в определенном году:
db.movies.find({
  released: {$gte: ISODate("2000-01-01T00:00:00Z"), 
  $lt: ISODate("2023-01-01T00:00:00Z")}
})

// Запрос получения списка идентификаторов пользователей
db.users.find({}, {_id: 1})

// Найти все сеансы для определенного пользователя:
db.sessions.find({
  user_id: ObjectId("573a1390f29313caabcd4135")
})

// Найти пользователя по электронной почте:


db.users.find(
  {email: ""
})

// Добавление 10 разных пользователей:
db.users.insertMany([
  {email: "ilja.astasev@ivkhk.ee", name: "Ilja Astasev", password: "password1"},
  {email: "user2@example.com", name: "Ivan Niukanen", password: "password2"},
  {email: "user3@example.com", name: "Petr Tolstov", password: "password3"},
  {email: "user4@example.com", name: "Sander Rubebkov", password: "password4"},
  {email: "user5@example.com", name: "Ivan Ivanov", password: "password5"},
  {email: "user6@example.com", name: "Robert John", password: "password6"},
  {email: "user7@example.com", name: "Maria Paun", password: "password7"},
  {email: "user8@example.com", name: "Kristian Ulav", password: "password8"},
  {email: "user9@example.com", name: "Martin Kuttis", password: "password9"},
  {email: "user10@example.com", name: "Alexei Gamburger", password: "password10"}
])

// Добавление 2 фильмов:
db.movies.insertMany([
  {
    title: "Movie One", award: {}, cast: ["Actor 1", "Actor 2"], countries: ["USA"], directors: ["Director 1"],
    fullplot: "Full plot of movie one", genres: ["Action", "Adventure"], imdb: {rating: 7.0, votes: 5000, id: 1},
    languages: ["English"], lastupdated: new Date(), num_mflix_comments: 0, plot: "Plot of movie one",
    rated: "PG-13", released: new Date("2000-01-01")
  },
  {
    title: "Movie Two", award: {}, cast: ["Actor 1", "Actor 3"], countries: ["USA"], directors: ["Director 2"],
    fullplot: "Full plot of movie two", genres: ["Action", "Sci-Fi"], imdb: {rating: 6.0, votes: 4000, id: 2},
    languages: ["English"], lastupdated: new Date(), num_mflix_comments: 0, plot: "Plot of movie two",
    rated: "PG-13", released: new Date("2001-01-01")
  }
])

use('sample_guides');

// Найти все планеты с кольцами:
db.planets.find({
  hasRings: true
})

// Найти все планеты с основной атмосферой азота:
db.planets.find({
  mainAtmosphere: "Nitrogen"
})

// Найти планеты с поверхностной температурой выше 100 градусов Цельсия:
db.planets.find({
  surfaceTemperatureC: {$gt: 100}
})

// Найти планету по имени:
db.planets.find({
  name: "Planet1"
})

// Найти все планеты, удаленные от Солнца на расстоянии от 1-го до 15-го места (включительно):
db.planets.find({
  orderFromSun: {$gte: 1, $lte: 15}
})

// Добавление 10 планет
db.planets.insertMany([
  {name: "Planet1", hasRings: false, mainAtmosphere: "Nitrogen", orderFromSun: 11, surfaceTemperatureC: -50},
  {name: "Planet2", hasRings: true, mainAtmosphere: "Oxygen", orderFromSun: 12, surfaceTemperatureC: 100},
  {name: "Planet3", hasRings: true, mainAtmosphere: "Methane", orderFromSun: 13, surfaceTemperatureC: -130},
  {name: "Planet4", hasRings: false, mainAtmosphere: "Carbon Dioxide", orderFromSun: 14, surfaceTemperatureC: 80},
  {name: "Planet5", hasRings: true, mainAtmosphere: "Helium", orderFromSun: 15, surfaceTemperatureC: -200},
  {name: "Planet6", hasRings: false, mainAtmosphere: "Hydrogen", orderFromSun: 16, surfaceTemperatureC: -120},
  {name: "Planet7", hasRings: true, mainAtmosphere: "Nitrogen", orderFromSun: 17, surfaceTemperatureC: -90},
  {name: "Planet8", hasRings: false, mainAtmosphere: "Oxygen", orderFromSun: 18, surfaceTemperatureC: 40},
  {name: "Planet9", hasRings: true, mainAtmosphere: "Carbon Dioxide", orderFromSun: 19, surfaceTemperatureC: 300},
  {name: "Planet10", hasRings: false, mainAtmosphere: "Methane", orderFromSun: 20, surfaceTemperatureC: -170}
])

use('sample_supplies');

// Добавление покупателя
db.sales.insertMany([
  {
    _id: ObjectId(),
    couponUsed: true,
    customer: {
      age: 25,
      email: "customer1@example.com",
      name: "John Smith",
      satisfaction: 5
    },
    items: [
      { name: "item1", price: 50, quantity: 2 },
      { name: "item2", price: 100, quantity: 1 }
    ],
    purchaseMethod: "In store",
    saleDate: ISODate("2023-01-01T00:00:00Z"),
    storeLocation: "New York"
  }
])

// Найти все продажи, где был использован купон:
db.sales.find({
  couponUsed: true
})

// Найти все продажи с определенным методом покупки:
db.sales.find({
  purchaseMethod: "Online"
})

// Найти все продажи в определенном магазине
db.sales.find({
  storeLocation: "New York"
})

// Найти все продажи определенного товара:
db.sales.find({"items.name": "item1"})





