// extends ForagerBee superclass

// age set to 40
// job set to 'gamble'
// canFly set to false
// color set to 'grey'
// treasureChest (inherited from ForagerBee, set to [])
// food (inherited from Grub)
// eat (inherited from Grub)

// forage method, returns 'I am too old, let me play cards instead'
// gamble method, adds input (treasure) to treasureChest


class RetiredForagerBee extends ForagerBee {

  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  forage () {
    return 'I am too old, let me play cards instead';
  }

  gamble(treasure) {
    this.treasureChest.push(treasure);
  }

};
