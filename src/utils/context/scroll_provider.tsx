import sharedDataProvider from "../../interface/sharedDataProvider";
import useScrollVisibility from "../scroll";

import ScrollContext from "./scroll_context";




const ScrollProvider: React.FC<sharedDataProvider> = ({ children }) => {
    const isAtTop = useScrollVisibility();

    return (
        <ScrollContext.Provider value={{ isAtTop }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
