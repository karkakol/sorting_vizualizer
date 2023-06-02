interface BarGraphProps {
    values: number[];
}

function BarGraph({values}: BarGraphProps) {

    return <div style={{
        display: 'flex',
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingTop: '100px',
        justifyContent: 'flex-center',
        alignItems: 'flex-end',
        height: 'calc(100% - 100px)',
        width: 'calc(100% - 200px)',
    }}>
        {
            values.map((value, index) => {
                    const width = 100 / (values.length);
                    const height = 100 * value / values.length;
                    const startGradient = 255;
                    const endGradient = 255 - 2.55 * height

                    return (

                        <div
                            key={index}
                            style={{
                                width: `${width}%`,
                                height: `${height}%`,
                                background: `linear-gradient(to bottom, rgb(255, 255, 255), rgb(${endGradient}, ${endGradient}, ${endGradient})`
                            }}
                        />
                    )
                }
            )
        }
    </div>
}

export default BarGraph;