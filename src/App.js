import { useEffect, useState } from 'react';
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
  const [ tweent, setTweent ] = useState(null);

  useEffect(() => {
    let gsapWheel = document.querySelector('.gsap .wheel'),
    numLines = 10,
    radius = numLines * 40,
    angle = 360 / numLines,
    origin = `50% 50% -${radius}px`;

    function cloneTxt(wheel) {
    let txt = wheel.querySelector(".txt");
    for (let i=0; i<numLines-1; i++) {
      let clone = txt.cloneNode(true);
      wheel.appendChild(clone);
    }
    }

    // GSAP code
    cloneTxt(gsapWheel);
    // gsap.set(gsapWheel, {transformOrigin: "50% 50%"});
    gsap.set(gsapWheel.querySelectorAll('.txt'), {
      z: radius,
      rotationX: index => angle * index,
      transformOrigin: origin
      }
    );

    gsap.to(gsapWheel, {
      rotationX: -360,
      duration: 8,
      ease: 'none',
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  }, []);

  const startAni = () => {
    tweent.play();
  }
  const stopAni = () => {
    tweent.pause();
  }
  const resumeAni = () => {
    tweent.resume();
  }
  const reverseAni = () => {
  }

  return (
    <div id="demo">
     <div class="container gsap">
        <div class="wheel">
          <div className='txt'>
            <div>S</div>
            <div>T</div>
            <div>E</div>
            <div>P</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
