import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import CityScene from "./scenes/CityScene";

export default function Game() {
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) return;

    const config = {
      type: Phaser.AUTO,
      parent: "phishville-game",
      width: 1000,
      height: 650,
      backgroundColor: "#a8c9a0",
      scene: [CityScene],
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      game.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="phishville-game" />;
}