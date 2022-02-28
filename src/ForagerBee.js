// extend Bee superclass

// age set to 10
// job set to 'find pollen'
// canFly set to true
// treasureChest set to []
// color (inherited from Bee) set to 'yellow'
// food (inherited from Grub)
// eat (inherited from Grub)

// forage method, add input (treasure) to treasureChest

class ForagerBee extends Bee {

  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    this.color = 'yellow';
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }

}
