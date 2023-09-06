import React, { createContext, useContext } from 'react';
const ClickContext = createContext();
import { callOnBtn } from './apis/btn.api';
//import { callOnScreen } from './apis/screenapi';

export const ClickProvider = ({ children }) => {

    const handleClick = async (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`Clicked at x: ${x}, y: ${y}`);
        
        const payload = {
            domType: "Button",
            domText: "hello world",
            url: null,
            coord_x: x,
            coord_y: y,
            screen_width: window.innerWidth,
            screen_height: window.innerHeight,
        }
        const { data, status } = await callOnBtn(payload)
        console.log(`API res: `, data, status);


        //let response = await callOnScreen("load")
        //console.log(`API response: `, response);

    };
    return (
        <ClickContext.Provider value={handleClick}>
            {children}
        </ClickContext.Provider>
    );
};

export const useClickHandler = () => {
    const context = useContext(ClickContext);
    if (context === undefined) {
        throw new Error('useClickHandler must be used within a ClickProvider');
    }
    return context;
};
