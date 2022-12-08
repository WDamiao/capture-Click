export default function ClickedPoint({clicked, bg}){

    return (
        <div className="clickedPoints" style={{
            left: clicked.clientX - 15,
            top: clicked.clientY -20,
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