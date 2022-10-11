import './settings.css';
import Button from '../button/Button';

function Settings(props) { 
    
    const handleCancelClick = () => {

        const settingsScreen = document.getElementById('settings-screen-container');
        
        settingsScreen.firstElementChild.style.top = '-800px';
        settingsScreen.firstElementChild.style.opacity = '0';

        setTimeout( () => {
            settingsScreen.style.backgroundColor = 'transparent';        
        }, 300);

        setTimeout( () => settingsScreen.style.zIndex = '-1', 600 );        

    };

    const handleSelectClick = () => {     
                
        const activeThemeButton = document.getElementsByClassName(`active-button-theme-${props.theme}`)[0];        
        const activeThemeButtonText = activeThemeButton.innerText;
        let theme = '';

        switch(activeThemeButtonText) {

            case 'THEME 1':
                theme = '01';                
                break;

            case 'THEME 2':
                theme = '02';                
                break;

            case 'THEME 3':
                theme = '03';                
                break;

            default:                
                theme = props.theme;

        }

        props.onSettingTheme(theme);
        handleCancelClick();

    };

    const handleClick = (event) => {
        
        const activeButtonClassName = `active-button-theme-${props.theme}`;        
        const activeThemeButton = document.getElementsByClassName(activeButtonClassName)[0];

        if ( event.tagert !== activeThemeButton ) {
            activeThemeButton.classList.remove(activeButtonClassName);
        }
        
        event.target.classList.add(activeButtonClassName);      

    };

    return (    

        <div id="settings-screen-container">
            <div id="settings-screen" className={`keypad-theme-${props.theme}`}>
                                
                <h2 className={`color-theme-${props.theme} two-columns-width`}>
                    SET A THEME AS DEFAULT
                </h2>

                <Button                                       
                    className={`two-columns-width id-01-theme-${props.theme}`}
                    symbol={'THEME 1'}                    
                    onClick={(e) => handleClick(e)}                    
                />

                <Button
                    className={`two-columns-width id-01-theme-${props.theme}`}
                    symbol={'THEME 2'}
                    onClick={(e) => handleClick(e)}                    
                />

                <Button
                    className={`two-columns-width id-01-theme-${props.theme}`}
                    symbol={'THEME 3'}
                    onClick={(e) => handleClick(e)}                    
                />

                <Button
                    className={`id-02-theme-${props.theme}`}
                    symbol={'CANCEL'}
                    onClick={() => handleCancelClick()}                  
                />

                <Button
                    className={`id-03-theme-${props.theme}`}
                    symbol={'SELECT'}
                    onClick={() => handleSelectClick()}                  
                />
                
            </div>
        </div>
        
    );

}

export default Settings;