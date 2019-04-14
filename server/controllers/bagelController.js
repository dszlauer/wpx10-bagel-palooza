const bagels = [
  {
    name: "Onion Bagel",
    imageUrl:
      "http://cdn.shopify.com/s/files/1/1749/6693/products/onion-bagel_1024x1024.png?v=1531755332",
    rating: 4
  },
  {
    name: "Blueberry Bagel",
    imageUrl:
      "http://cdn.shopify.com/s/files/1/1749/6693/products/blueberry_1024x1024.jpg?v=1531755323",
    rating: 5
  },
  {
    name: "Wheat Bagel",
    imageUrl:
      "https://bagelbiz.com/wp-content/uploads/2017/11/Bagel-Biz-Whole-Wheat-Bagel.png",
    rating: 2
  },
  {
    name: "Bantam Bagles",
    imageUrl:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/16/41/1476297779-delish-bantam-bagels-2.jpg",
    rating: 6
  }
];

module.exports = {
  getBagels: (req, res) => {
    res.status(200).json(bagels);
  },

  // adding bagles to the app, bagles.push
  addBagel: (req, res) => {
    const { name, imageUrl, rating } = req.body;
    bagels.push({
      name,
      imageUrl,
      rating
    });
    res.json(bagels);
  }
};
