import './header.css';
import Toggle from '../toggle/Toggle';

function Header(props) {    
    
    const spanTheme = `span-theme-${props.theme}`;

    return (
        <div class="header">
            <span className={spanTheme}>calc</span>
            <div class="theme-choice">
                <span className={spanTheme}>theme</span>
                <div class="toggle-container">
                    <div class="options">
                        <span className={spanTheme}>1</span>
                        <span className={spanTheme}>2</span>
                        <span className={spanTheme}>3</span>
                    </div>                    
                    <Toggle
                        theme={props.theme}
                        onChange={props.onChange}
                    />
                </div>                
            </div>
        </div>        
    );

}

export default Header;