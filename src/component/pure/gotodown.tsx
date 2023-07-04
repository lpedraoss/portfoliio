import ScrollContext from "../../utils/context/scroll_context";
import { useContext } from "react";
function GoToDown() {

    const scrolling = useContext(ScrollContext);
    const isAtTop = scrolling!.isAtTop ?? false;

    return (
        <>
            <span className={`scroll-down ${isAtTop ? 'visible' : 'hidden'}`}>
                <a href="#content">
                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M12 3L12 21" />
                        <path d="M18 15L12 21L6 15" fill='white' />
                    </svg>
                    Scroll down
                </a>
            </span>
        </>
    )

}
export default GoToDown;