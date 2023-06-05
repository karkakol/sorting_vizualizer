export default function HomePage() {

    return (
        <div style={{
            width: 'calc(100vw - 80px)',
            height: 'calc(100vh - 80px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            padding: '40px',
        }}>
            <div style={{
                fontSize: '80px',
            }}>
                Hello sort
            </div>
            <div style={{
                paddingTop: '20px',
                fontSize: '40px',
            }}>
                This react project goal is to visualize how sorting algorithms work
            </div>
        </div>

    )
}