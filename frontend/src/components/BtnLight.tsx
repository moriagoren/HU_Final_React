import { useMemo, useState } from "react";
import { createTheme } from '@mui/material/styles';
import { IconButton } from "@mui/material";

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

function BtnLight() {

    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    function handleClick() {
        const toggleMode = mode === 'dark' ? 'light' : 'dark';
        setMode(toggleMode);
    }


    return (


        <IconButton
            onClick={handleClick}
        >
            <i className="bi bi-brightness-low-fill" />
        </IconButton>

        // <i className="bi bi-brightness-high-fill m-auto p-2 "></i>
    );
}

export default BtnLight;


