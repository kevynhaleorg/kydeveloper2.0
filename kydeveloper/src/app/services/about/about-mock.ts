import {IReadingItem} from './about.service'

var item1: IReadingItem = {
    id: "id1",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vissides",
    promoUrl: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_3?ie=UTF8&qid=1532879329&sr=8-3&keywords=design+patterns&dpID=51szD9HC9pL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch",
    summary: "This book is great",
    dateAdded: "10/22/2012",
    rating: 4,
    category: "development"
  }

var item2: IReadingItem = {
    id: "id2",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51JF95r45vL._SX379_BO1,204,203,200_.jpg",
    title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    author: "Robert C. Martin",
    promoUrl: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/ref=pd_sim_351_5?_encoding=UTF8&psc=1&refRID=F288CFD53WNJXT5RFK2G",
    summary: "This book is great",
    dateAdded: "10/23/2012",
    rating: 5,
    category: "development"
  }

  var item3: IReadingItem = {
    id: "id3",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51wl8cINKYL._SX382_BO1,204,203,200_.jpg",
    title: "Effective Java",
    author: "Joshua Bloch",
    promoUrl: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/ref=pd_sim_351_5?_encoding=UTF8&psc=1&refRID=F288CFD53WNJXT5RFK2G",
    summary: "This book is great",
    dateAdded: "10/1/2012",
    rating: 2,
    category: "development"
  }

export {
    item1,
    item2,
    item3
}