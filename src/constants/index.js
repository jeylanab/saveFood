import family from '../assets/family.png'
import kitchen from '../assets/kitchen.png'
import restaurant from '../assets/rest.png'
import school from '../assets/school.png'
import elders from '../assets/elder.png'
import home from '../assets/home.png'


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

 export const services = [
  {
    id: 1,
    title: "Food distribution to homeless shelters",
    description: "Providing nutritious meals to homeless individuals through partnerships with shelters and community organizations.",
    imageUrl: home
  },
  {
    id: 2,
    title: "Meal delivery for elderly individuals",
    description: "Delivering freshly prepared meals to elderly individuals who may have difficulty accessing or preparing food on their own.",
    imageUrl: elders
  },
  {
    id: 3,
    title: "Grocery assistance for low-income families",
    description: "Providing vouchers or assistance programs to help low-income families purchase essential groceries and household items.",
    imageUrl: family
  },
  {
    id: 4,
    title: "Community kitchen programs",
    description: "Establishing community kitchens where individuals and families can access free or low-cost meals, cooking classes, and food resources.",
    imageUrl: kitchen
  },
  {
    id: 5,
    title: "Food rescue from restaurants and supermarkets",
    description: "Rescuing surplus food from restaurants, supermarkets, and other businesses to redistribute, reducing food waste and addressing hunger.",
    imageUrl: restaurant
  },
  {
    id: 6,
    title: "School meal programs",
    description: "Providing nutritious meals to students during the school day to support their health, well-being, and academic success.",
    imageUrl: school
  }
];
