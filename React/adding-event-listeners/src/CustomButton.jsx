export default function CustomButton({ onClick}) {
    return (
        <>
            <button style={{
                backgroundColor: 'red',
                padding: '10px 20px 30px',
                borderRadius: '5px',
            }}
            onClick={onClick}
            >Custom Button</button>
        </>
    )
}