import { useState } from 'react'
import './css/main.css'
import { Navbar, Hero, Cards, Footer, Description, PricesContent } from './Parts/Parts'
import { useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const dummyData = [
  ['A', 'dengan membayar sebesar 35jt mendapatkan pelayanan maskapai terbaik,bus ac executive ,free nasi mandi alaromanis,free kereta cepat haramian,kajian di Makkah dan Madinah,menjamin mendaptkan tout guide terbaiik, dan juga mendapatkan makanan gratis pada pagi hari dan malam hari'], 
  ['B', 'dengan membayar sebesar 30jt mendapatkan pelayanan maskapai terbaik, free nasi mandi alaromanis, menjamin mendaptkan tout guide terbaiik. dan juga mendapatkan makanan gratis pada pagi hari dan malam hari'], 
  ['C', 'dengan membayar sebesar 20jt mendapatkan pesawat class Economy,dapat tempat tinggal,tawaf']
];

export const AppContext = createContext();

function App() {
  document.title = 'Nabil Travel';
  const navigate = useNavigate();
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if(path !== '/' && path !== '/prices/a' && path !=='/prices/b' && path !== '/prices/c') navigate('/');
  }, [])
  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prices/*' element={<Prices />} />
      </Routes>
    </AppProvider>
  )
}

const AppProvider = ({children}) => {
  const theme = localStorage.getItem('theme');
  const [sizes, setSizes] = useState({
    cardBody: '1em',
    card: '10rem',
    title: '1rem',
    button: '.5rem',
    slideX: 257
  });
  const [margin, setMargin] = useState([[0, 1], [0, 1.25], [0, 1]]);
  const [mode, setMode] = useState(theme !== 'undefined' && theme ? theme : 'light');
  const [modeBtn, setModeBtn] = useState({
    circle: {},
    backgroundCirlce: {}
  });
  const [cardStyle, setCardStyle] = useState({
    color: `var(--${mode}ModeColor)`,
    backgroundColor: `var(--${mode}ModeColor)`
  })
  useEffect(() => {
    const interval = setInterval(() => {
      setMargin(prev => {
        const val1 = [prev[0][0] > 0 ? prev[0][0] - sizes.slideX : sizes.slideX * 2, prev[0][0] === sizes.slideX * 2 ? 1.25 : 1];
        const val2 = [prev[1][0] > -sizes.slideX ? prev[1][0] - sizes.slideX : sizes.slideX, prev[1][0] === sizes.slideX ? 1.25 : 1];
        const val3 = [prev[2][0] > -sizes.slideX * 2 ? prev[2][0] - sizes.slideX : 0, prev[2][0] === 0 ? 1.25 : 1];
        return [val1, val2, val3];
      });
  }, 7000)
    return () => clearInterval(interval);

  }, [margin, sizes])
  const changeBtn = () => {
    setModeBtn(prev => ({
      ...prev,
      circle: {
        left: mode === 'dark' ? 38 : 5,
        border: mode === 'dark' ? 'rgb(35, 40, 45)' : 'rgb(54, 54, 54)',
        bg: mode === 'dark' ? 'rgb(46, 52, 58)' : 'rgb(78, 78, 78)'
      },
      backgroundCirlce: {
        bg: mode === 'dark' ? 'rgb(15, 17, 20)' : 'rgb(202, 202, 202)',
        border: mode === 'dark' ? 'rgb(24, 27, 31)' : 'rgb(128, 128, 128)'
      }
    }));
  }
  const changeMode = () => {
    changeBtn();
    let themes;
    setMode(prev => {
      themes = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', themes);
      return themes;
    })
  }
  useEffect(() => {
    document.body.style.backgroundColor = `var(--${mode}Mode)`;
    setCardStyle({
      color: `var(--${mode}ModeColor)`,
      backgroundColor: `var(--${mode}CardMode)`
    });
    changeBtn();
  }, [mode])
  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      if(width < 1024) {
        const nextSize = {
          cardBody: '1em',
          card: '10rem',
          title: '1rem',
          button: '.5rem',
          slideX: 160
        };
        if(width >= 490) {
          nextSize.slideX = 160;
        } else if (width >= 470) {
          nextSize.slideX = 150;
        } else if (width >= 450) {
          nextSize.slideX = 140;
        }  else if (width >= 430) {
          nextSize.slideX = 135;
        } else if (width >= 400) {
          nextSize.slideX = 130;
        } else if (width >= 321) {
          nextSize.slideX = 119;
        } else {
          nextSize.slideX = 98;
        }
        setSizes(nextSize);
      } else {
        setSizes({
          cardBody: '1.5em',
          card: '16rem',
          title: '1.25rem',
          button: '16px',
          slideX: 257
        })
      }
      setMargin([[0, 1], [0, 1.25], [0, 1]])
    }
    window.addEventListener('resize', resize);
    window.addEventListener('load', resize);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('load', resize);
    }
  }, []);  
  return (
    <AppContext.Provider value={{ changeMode, modeBtn, mode, dummyData, margin, cardStyle, sizes }}>
      {children}
    </AppContext.Provider>
  )
}

const Home = () => {
  return (
    <div className='pt-5 px-0 d-flex flex-column gap-4'>
      <Navbar/>
      <Hero />
      <Cards />
      <Description />
      <Footer />   
    </div>
  )
}

const Prices = () => {
  return (
    <>
      <Navbar />
      <PricesContent />
      <Footer />
    </>
  )
}

export default App