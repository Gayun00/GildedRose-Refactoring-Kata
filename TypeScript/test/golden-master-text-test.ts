import { AgedBrie, DefaultItem, Passes, Surfras } from "@/itemClasses";
import { GildedRose } from "../app/gilded-rose";

const items = [
  new DefaultItem("+5 Dexterity Vest", 10, 20),
  new AgedBrie(2, 0),
  new DefaultItem("Elixir of the Mongoose", 5, 7),
  new Surfras(0, 80),
  new Surfras(-1, 80),
  new Passes(15, 20),
  new Passes(10, 49),
  new Passes(5, 49),
  new DefaultItem("Conjured Mana Cake", 3, 6),
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach((element) => {
    console.log(element.name + " " + element.sellIn + " " + element.quality);
  });
  console.log();
  gildedRose.updateQuality();
}
