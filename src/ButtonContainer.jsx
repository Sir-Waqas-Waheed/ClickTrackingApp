import React from 'react';
import { useClickHandler } from './ClickContext';

const ButtonContainer = () => {

    
    const handleClick = useClickHandler();return (
        <div onClick={handleClick}>
            {/* Button 1 */}
            <button style={{ backgroundColor: 'red' }}>Button 1</button>

            {/* Button 2 */}
            <button style={{ backgroundColor: 'blue', marginLeft: '20px' }}>Button 2</button>

            {/* Button 3 */}
            <button style={{ backgroundColor: 'green', marginTop: '20px' }}>Button 3</button>

            {/* Button 4 */}
            <button
                style={{ backgroundColor: 'yellow', marginLeft: '20px', marginTop: '20px' }}
            >
                Button 4
            </button>

            {/* Button 5 */}
            <button
                style={{ backgroundColor: 'purple', position: 'absolute', top: '50px', left: '50px' }}
            >
                Button 5
            </button>
        </div>
    );
};

export default ButtonContainer;




