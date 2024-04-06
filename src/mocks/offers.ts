import { OfferType } from "../const";
import { Offers } from "../types/offers";

export const offers: Offers = [
  {
    id: 1,
    name: 'Beautiful & luxurious studio at great location',
    description: 'Beautiful & luxurious studio at great location',
    isPremium: true,
    type: OfferType.Apartment,
    rating: 4.8,
    bedrooms: 3,
    maxGuests: 4,
    price: 120,
    content: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    photos: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
    ],
    isFavourite: true,
    reviews: [
      {
      date: 'April 2019',
        text: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        user: {
          name: 'Max',
          photo: 'img/avatar-max.jpg',
        }
      }
    ]
  },

  {
    id: 2,
    name: 'Wood and stone place',
    description: 'Wood and stone place',
    isPremium: false,
    type: OfferType.Room,
    rating: 4.1,
    bedrooms: 1,
    maxGuests: 2,
    price: 80,
    content: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    photos: [
      'img/room.jpg',
      'img/room-small.jpg',
    ],
    isFavourite: true,
    reviews: [
      {
      date: 'April 2019',
        text: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        user: {
          name: 'Max',
          photo: 'img/avatar-max.jpg',
        }
      }
    ]
  },

  {
    id: 3,
    name: 'Canal View Prinsengracht',
    description: 'Canal View Prinsengracht',
    isPremium: false,
    type: OfferType.Apartment,
    rating: 4.2,
    bedrooms: 2,
    maxGuests: 3,
    price: 132,
    content: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    photos: [
      'img/apartment-03.jpg',
    ],
    isFavourite: false,
    reviews: [
      {
      date: 'April 2019',
        text: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        user: {
          name: 'Max',
          photo: 'img/avatar-max.jpg',
        }
      }
    ]
  },

  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    description: 'Nice, cozy, warm big bed apartment',
    isPremium: true,
    type: OfferType.Apartment,
    rating: 5,
    bedrooms: 2,
    maxGuests: 3,
    price: 180,
    content: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
    ],
    photos: [
      'img/apartment-small-03.jpg',
      'img/apartment-small-04.jpg',
    ],
    isFavourite: false,
    reviews: [
      {
      date: 'April 2019',
        text: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        rating: 4,
        user: {
          name: 'Max',
          photo: 'img/avatar-max.jpg',
        }
      }
    ]
  },
]
