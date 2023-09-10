import cat from "../assets/images/cat.png";
import { useNavigate} from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail =() => {
        navigate("/details");
    };
    return (
        <div className="text-center font-mono">
            <p className="text-5xl font-bold uppercase">About Me</p>
            <div className="flex items-center justify-center">
                <img src={cat} width={200} /> 

            </div>
     
            <p className="text-md mt-2 font-bold text -white mx-36">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like){"\n"}.
            </p>{""}
            <br />
            <button className="text-xl text-[#8b5cf6] underline" onClick={handleToDetail}>NEXT</button>
            <p>d jaaaa</p>
        </div>
    );
}

export default LandingPage;
