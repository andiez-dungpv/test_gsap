import { useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap';

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com'
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com'
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com'
  },
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com'
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com'
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com'
  },
]

function App() {

  useEffect(() => {
    const tweent = gsap.to(".box", {rotation: 27, x: 100, duration: 1});
    tweent.iteration(0);
    gsap.registerEffect({
      name: "fade",
      effect: (targets, config) => {
          return gsap.to(targets, {duration: config.duration, opacity: 0});
      },
      defaults: {duration: 1}, //defaults get applied to any "config" object passed to the effect
      extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });
    document.querySelectorAll(".box").forEach(function(box) {
      box.addEventListener("mouseenter", function() {
        gsap.effects.fade(this)
      });
    });
  }, []);

  return (
    <div id="demo">
      <h2>GSAP 3 Effects Simple Demo</h2>
      <div class="box green"></div>
      <div class="box grey"></div>
      <div class="box orange"></div>
      <div class="box green"></div>
      <div class="box grey"></div>
      <div class="box orange"></div>
      <div class="box green"></div>
      <div class="box grey"></div>
    </div>
  );
}

export default App;
