// extends Bee superclass

// age set to 10
// job set to 'make honey'
// honeyPot set to 0;
// color (inherited from Bee) set to 'yellow'
// food (inherited from Grub)
// eat method (inherited from Grub)

// makeHoney method, adds 1 to honeyPot
// giveHoney method, subtracts 1 from honeyPot (edge case if honeyPot is empty)


class HoneyMakerBee extends Bee {

  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    this.color = 'yellow';
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    if (this.honeyPot > 0) {
      this.honeyPot--;
    } else {
      alert('This Bee has no honey to give!');
    }
  }

}
