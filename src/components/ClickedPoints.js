export default function ClickedPoint({clicked, bg}){

    return (
        <div className="clickedPoints" style={{
            left: clicked.clientX - 10,
            top: clicked.clientY -10,
            position: "absolute",
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            display:"block",
        }}></div>
    )
}