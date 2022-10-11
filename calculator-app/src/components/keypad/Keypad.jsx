import React from 'react';
import './keypad.css';
import Button from '../button/Button';

function Keypad(props) {    
        
    return(
        <div className={`keypad keypad-theme-${props.theme}`}>
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'7'}
                onClick={() => props.onClickFunctions.handleButtonClick('7')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'8'}
                onClick={() => props.onClickFunctions.handleButtonClick('8')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'9'}
                onClick={() => props.onClickFunctions.handleButtonClick('9')}
            />
            <Button
                className={`id-02-theme-${props.theme}`}
                symbol={'DEL'}
                onClick={() => props.onClickFunctions.handleDeleteClick()}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'4'} 
                onClick={() => props.onClickFunctions.handleButtonClick('4')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'5'} 
                onClick={() => props.onClickFunctions.handleButtonClick('5')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'6'} 
                onClick={() => props.onClickFunctions.handleButtonClick('6')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={' + '} 
                onClick={() => props.onClickFunctions.handleButtonClick(' + ')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'1'} 
                onClick={() => props.onClickFunctions.handleButtonClick('1')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'2'} 
                onClick={() => props.onClickFunctions.handleButtonClick('2')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'3'} 
                onClick={() => props.onClickFunctions.handleButtonClick('3')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={' - '} 
                onClick={() => props.onClickFunctions.handleButtonClick(' - ')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'.'} 
                onClick={() => props.onClickFunctions.handleButtonClick('.')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={'0'} 
                onClick={() => props.onClickFunctions.handleButtonClick('0')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={' / '} 
                onClick={() => props.onClickFunctions.handleButtonClick(' / ')}
            />
            <Button
                className={`id-01-theme-${props.theme}`}
                symbol={' x '} 
                onClick={() => props.onClickFunctions.handleButtonClick(' x ')}
            />
            <Button
                className={`id-02-theme-${props.theme}`}                
                symbol={<i class="fa-solid fa-gear"></i>}
                onClick={() => props.onClickFunctions.handleSettingsClick()}                
            />            
            <Button
                className={`two-columns-width id-02-theme-${props.theme}`}                
                symbol={'RESET'}
                onClick={() => props.onClickFunctions.handleResetClick()}
            />
            <Button
                className={`id-03-theme-${props.theme}`}                
                symbol={'='}
                onClick={() => props.onClickFunctions.handleResultClick()}
            />
        </div>
    );


}

export default Keypad;