import { useState } from "react";
import Resume from '../assets/Resume-2023.pdf';
import NavigationContext from "./NavigationContext";

const NavigationProvider = ({ children }) => {
    const [clicked, setClicked] = useState('');

    const onClickNavBar = (clickedEle) => {
        setClicked('');
        setClicked(clickedEle);
        if(clickedEle.toLowerCase() === 'resume'){
            window.open(Resume)
        }
    }

    return (
        <NavigationContext.Provider
            value={{
                clicked,
                onClickNavBar
            }}>
            {children}
        </NavigationContext.Provider>
    );
}

export default NavigationProvider;