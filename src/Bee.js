// extend Grub superclass

// age set to 5
// color set to 'yellow'
// job set to 'Keep on growing'
// food (inherited from Grub)
// eat (inherited from Grub)

class Bee extends Grub {

  constructor() {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }

}
