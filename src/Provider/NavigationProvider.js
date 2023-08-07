import { useState } from "react";

import NavigationContext from "./NavigationContext";

const NavigationProvider = ({ children }) => {
    const [clicked, setClicked] = useState('');

    const onClickNavBar = (clickedEle) => {
        console.log("clicked !!!", clickedEle);
        setClicked('');
        setClicked(clickedEle);
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