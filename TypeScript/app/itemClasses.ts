export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super("Aged Brie", sellIn, quality);
  }

  handleQuality() {
    if (this.quality >= 50 || this.quality === 0) return;
    if (this.sellIn === 0) {
      this.quality = this.quality / 2;
      return;
    }
    this.quality++;
  }

  handleSellIn() {
    if (this.sellIn <= 0) return;
    this.sellIn--;
  }
}

export class Passes extends Item {
  constructor(sellIn, quality) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }

  handleQuality() {
    if (this.quality >= 50 || this.quality === 0) return;

    if (this.sellIn === 0) {
      this.quality = 0;
      return;
    }

    if (6 <= this.sellIn && this.sellIn < 11) {
      this.quality += 2;
      return;
    }

    if (this.sellIn < 6) {
      this.quality += 3;
    }
  }

  handleSellIn() {
    if (this.sellIn <= 0) return;
    this.sellIn--;
  }
}

export class Surfras extends Item {
  constructor(sellIn, quality) {
    const QUALITY = 80;
    super("Sulfuras, Hand of Ragnaros", sellIn, QUALITY);
  }

  handleQuality() {}

  handleSellIn() {}
}

export class Conjured extends Item {
  constructor(sellIn, quality) {
    super("Conjured Mana Cake", sellIn, quality);
  }

  handleQuality() {
    if (this.quality >= 50 || this.quality === 0) return;
    if (this.sellIn === 0) {
      this.quality = this.quality / 4;
      return;
    }
    this.quality -= 2;
  }

  handleSellIn() {
    if (this.sellIn <= 0) return;
    this.sellIn--;
  }
}

export class DefaultItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  handleQuality() {
    if (this.quality === 0) return;
    if (this.sellIn === 0) {
      this.quality = this.quality / 2;
      return;
    }
    this.quality -= 2;
  }

  handleSellIn() {
    if (this.sellIn <= 0) return;
    this.sellIn--;
  }
}
