ffunction slugify(title) {
  // Перетворення на нижній регістр та розділення на слова
  const words = title.toLowerCase().split(" ");
  
  // Об'єднання слів тире
  const slug = words.join("-");
  
  return slug;
}

// Перевірка роботи функції
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"