import {Theme} from "react-select";
import makeAnimated from "react-select/animated";
export const animatedComponents = makeAnimated();
export const selectTheme = (theme: Theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: "#232323",
        neutral50: "#A3A3A3",
    }
});

