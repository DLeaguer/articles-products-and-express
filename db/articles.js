class Articles {
  constructor() {
    this._count = 1;
    this._storage = [];
    this.add({
      title: "The Elements - Hydrogen",
      body: "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass. Non-remnant stars are mainly composed of hydrogen in its plasma state. The most common isotope of hydrogen, termed protium (name rarely used, symbol 1H), has a single proton and zero neutrons.",
      author: 'Rogers, H. C. (1999). "Hydrogen Embrittlement of Metals"',
      // id: 1
    });
  }
  all() {
    // console.log('class Articles all() ...this._storage =', this._storage);
    return [...this._storage];
  }
  getItemById(id) {
    // console.log('getItemById =', id);
    return this._storage.filter(article => id == article.id)[0];
  }
  add(article) {
    // console.log('add article =', article);
    article.id = this._count;
    this._storage.push(article);
    this._count++;
    return article.id;
  }
  updateItemById(id) {}
  deleteItemById(id) {}
}

module.exports = Articles;