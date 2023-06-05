import {useState} from "react";
import {SuspendableSorting} from "../algorithms/sorting/sorting_algorithms";
import BarGraph from "./bar_graph";
import PlayButton from "./buttons/play_button";
import StopButton from "./buttons/stop_button";
import RefreshButton from "./buttons/refresh_button";
import {createTheme, Slider, ThemeProvider, Typography} from "@mui/material";

interface SortingProp {
    sortingFunction: SuspendableSorting;
}

const theme = createTheme({
    components: {
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    borderRadius: 0,
                    width: 12,
                    height: 32,
                    color: '#FFF', // Custom color for the thumb
                },
                track: {
                    color: '#FFF', // Custom color for the track
                },
                rail: {
                    color: 'lightgray', // Custom color for the rail
                },
            },
        },
    },
});

function SortingComponent({sortingFunction}: SortingProp) {
    const getArrayFromRange = (num: number) =>
        Array.from({length: num}, (_, index) => index + 1)

    const [data, setData] = useState(getArrayFromRange(40))

    const onRefreshButtonClick = () => setData([...data.sort(() => Math.random() - 0.5)])

    const onSliderChange = (event: Event, value: number | number[], activeThumb: number) => {
        if (typeof value === "number") {
            sortingFunction.suspend().then(_ => {
                setData(getArrayFromRange(value));
            });
        }
    };

    const onStopButtonPressed = () => {
        sortingFunction.suspend().then(_ => {
            setData(getArrayFromRange(data.length));
        });

    }


    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div style={{flex: 1}}>
                <BarGraph values={data}/>
            </div>


            <div style={{
                height: '80px',
                display: 'flex',
                margin: '10px',
                paddingRight: '100px',
                paddingLeft: '100px',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
                <Typography id="slider-label" gutterBottom style={{
                    color: '#FFF',
                    fontSize: '24px',
                    paddingRight: '20px',
                }}>
                    Number of elements: {data.length}
                </Typography>
                <div style={{
                    width: '300px',
                    paddingRight: '12px',
                }}>
                    <ThemeProvider theme={theme}>
                        <div>

                            <Slider defaultValue={40} onChange={onSliderChange} min={10} max={200}
                                    aria-labelledby="slider-label"/>
                        </div>

                    </ThemeProvider>
                </div>
                <PlayButton onClick={() => sortingFunction.execute({data, setData})}/>
                <StopButton onClick={onStopButtonPressed}/>
                <RefreshButton onClick={onRefreshButtonClick}/>
            </div>
        </div>

    )
}

export default SortingComponent