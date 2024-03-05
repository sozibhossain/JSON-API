// const user = {id: 1, name: 'sozib', job: 'mentor', address: 'singair'};

// console.log(user);
// const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  name: "Atiya Store",
  address: "singair boad",
  products: ["Leptop", "mobile", "monitor"],
  owner: {
    name: "Hiro",
    profetion: "Web developer",
  },
};

console.log(shop);
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);
