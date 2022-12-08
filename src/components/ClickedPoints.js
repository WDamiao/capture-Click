export default function ClickedPoint({clicked, bg, idx}){
    return (
        <div key={idx} style={{
            left: clicked.clientX - 10,
            top: clicked.clientY -10,
            position: "absolute",
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            display:"block",
        }}></div>
    )
}