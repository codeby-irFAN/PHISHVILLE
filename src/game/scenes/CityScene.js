
import Phaser from "phaser";

export default class CityScene extends Phaser.Scene {
  constructor() {
    super("CityScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#a8c9a0");

    this.add.text(40, 40, "WELCOME TO PHISHVILLE", {
      fontSize: "28px",
      color: "#18352d",
      fontStyle: "bold"
    });

    this.add.text(40, 85, "Our city is coming to life!", {
      fontSize: "17px",
      color: "#18352d"
    });
  }
}
