import { createContext } from "react";
import sharedDataScrollContext from "../../interface/sharedDataScrollContext";

const ScrollContext = createContext<sharedDataScrollContext | undefined>(undefined);
export default ScrollContext;
