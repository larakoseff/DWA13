const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

names.forEach((name) => {
  new Array().fill(name).forEach((item) => {
    console.log(item);
  });
});

names.forEach((name, index) => {
  if (provinces[index]) {
    console.log(`${name} (${provinces[index]})`);
  }
});

const uppercaseProvinces = provinces.map((province) => province.toUpperCase());

console.log(uppercaseProvinces);

const characterCounts = names.map((name) => name.length);

console.log(characterCounts);

provinces.sort();

console.log(provinces);

const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);

const remainingCount = filteredProvinces.length;

console.log(remainingCount);

const containsSArray = names.map((name) => name.toLowerCase().includes("s"));

console.log(containsSArray);

const provinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(provinceMap);

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(products.map((product) => product.product));

console.log(products.filter((product) => product.product.length <= 5));

console.log(
  products
    .filter((product) => product.price !== "" && !isNaN(Number(product.price)))
    .map((product) => ({ ...product, price: Number(product.price) }))
    .reduce((acc, product) => acc + product.price, 0)
);

console.log(
  products.reduce((acc, product, index) => {
    if (index === 0) {
      return product.product;
    } else if (index === products.length - 1) {
      return `${acc} and ${product.product}`;
    } else {
      return `${acc}, ${product.product}`;
    }
  }, "")
);

// Couldn't figure out how to do this in console log

const result = products.reduce(
  (acc, product) => {
    if (!product.price) return acc;

    const price = parseFloat(product.price);
    if (isNaN(price)) return acc;

    if (acc.highest === null || price > acc.highest.price) {
      acc.highest = { product: product.product, price };
    }

    if (acc.lowest === null || price < acc.lowest.price) {
      acc.lowest = { product: product.product, price };
    }

    return acc;
  },
  { highest: null, lowest: null }
);

console.log(
  `Highest: ${result.highest.product}. Lowest: ${result.lowest.product}.`
);

console.log(
  products.reduce((acc, product) => {
    const modifiedProduct = Object.entries(product).reduce(
      (acc, [key, value]) => {
        if (key === "product") {
          acc.name = value;
        } else if (key === "price") {
          acc.cost = value;
        } else {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
    acc.push(modifiedProduct);
    return acc;
  }, [])
);
