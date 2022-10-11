import React, { useState} from 'react';
import './App.css';
import Settings from './components/settings/Settings';
import Header from './components/header/Header';
import Screen from './components/screen/Screen';
import Keypad from './components/keypad/Keypad';

function App() {  

  const [theme, setTheme] = useState( !localStorage.getItem('theme') ? '01' : localStorage.getItem('theme') );
  const [displayedValue, setDisplayedValue] = useState('0');

  const handleThemeChange = () => {

    const toggle = document.getElementById('toggle');   
    setTheme('0' + toggle.value);

  };

  const handleSettingTheme = (theme) => {

    localStorage.setItem('theme', theme);
    setTheme(theme);
    
  };
  
  const handleButtonClick = (symbol) => {

    if ( (displayedValue === '0')  && (!isNaN(parseInt(symbol))) ) {
      setDisplayedValue(symbol);      
      return;     
    }

    setDisplayedValue(displayedValue + symbol);    

  };

  const handleDeleteClick = () => {    

    if ( displayedValue.length === 1 ) {

      if ( displayedValue === '0' ) {
        return;
      }

      setDisplayedValue('0');
      return;

    } 

    if ( displayedValue.charAt(displayedValue.length - 1) === ' ' )    {
      setDisplayedValue(displayedValue.slice(0, -3));
      return;  
    }

    setDisplayedValue(displayedValue.slice(0, -1));

  };

  const handleResetClick = () => {

    setDisplayedValue('0');

  };

  const handleResultClick = () => {

    const mathExpression = displayedValue.replace(' x ', '*');           
    const result = eval(mathExpression).toString()
    setDisplayedValue(result); 

  };
  
  const handleSettingsClick = () => {

    let defaultTheme = localStorage.getItem('theme');
    
    if ( !defaultTheme ) {
      defaultTheme = '01';
    }
    
    const indexOfDefaultTheme =  parseInt(defaultTheme) - 1;

    const themeButtons = document.querySelectorAll(`#settings-screen > .id-01-theme-${theme}`);
    const themeButtonsArray = Array.from(themeButtons);
    
    const activeButtonClassName = `active-button-theme-${theme}`;
    const activeButton = document.getElementsByClassName(activeButtonClassName)[0];

    if ( !activeButton ) {

      themeButtonsArray[indexOfDefaultTheme].classList.add(activeButtonClassName);      

    } else {

      if ( themeButtonsArray.indexOf( activeButton ) !== indexOfDefaultTheme) {
        activeButton.classList.remove(activeButtonClassName);
        themeButtonsArray[indexOfDefaultTheme].classList.add(activeButtonClassName);
      }     

    }    

    const settingsScreen = document.getElementById('settings-screen-container');

    settingsScreen.style.zIndex = '1';
    settingsScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    setTimeout( () => {
      settingsScreen.firstElementChild.style.opacity = '1';
      settingsScreen.firstElementChild.style.top = '0';
    }, 200);   

  };  
       
  return (    
    <div className={`container background-theme-${theme}`}> 
      <Settings
        theme={theme}
        onSettingTheme={handleSettingTheme}
      />     
      <div className={'calculator'}>        
        <Header
          theme={theme}
          onChange={handleThemeChange}
        />        
        <Screen
          theme={theme}
          value={displayedValue}
        />        
        <Keypad 
          theme={theme}
          onClickFunctions={{
            handleButtonClick,
            handleDeleteClick,
            handleResetClick,
            handleResultClick,
            handleSettingsClick
          }}                 
        />
      </div>        
    </div>    
  );
  
}

export default App;