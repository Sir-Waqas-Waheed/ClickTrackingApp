import React from 'react';
import { ClickProvider } from './ClickContext';
import ButtonContainer from './ButtonContainer';
import GetWindowDimensions from './GetWindowDimensions.jsx';


const App = () => {

    return (
        <ClickProvider>
            <div>
                <h1>Click Tracking App</h1>
                <ButtonContainer />
                <GetWindowDimensions/>
            </div>
        </ClickProvider>
    );
};

export default App;
