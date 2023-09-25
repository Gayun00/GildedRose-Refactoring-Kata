interface ItemClasses {
  sellIn: number;
  quality: number;
  name: string;
  handleQuality: () => void;
  handleSellIn: () => void;
}

export class GildedRose {
  items: ItemClasses[];
  constructor(items = [] as ItemClasses[]) {
    this.items = items;
  }

  updateQuality() {
    const updatedItems = this.items.map((item) => {
      item.handleSellIn();
      item.handleQuality();
      return item;
    });
    return updatedItems as ItemClasses[];
  }
}
