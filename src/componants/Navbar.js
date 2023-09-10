import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import profile from "../assets/icons/profile.png";
const Navbar = () => {
    return(
        <div className="flex px-2 justify-between items-center" >
            <img src = {profile} alf = "Profile" width={80}/>
            <ul className="hidden md:flex"> 
                <li className="px-2">
                    <a href="https://www.instagram.com" target="blank">
                        <img src={instagram} alf="instagram" width={40} /> 
                    </a>
            
                </li>
                <li className="px-2">
                <a href="https://www.facebook.com" target="blank">
                        <img src={facebook} alf="facebook" width={40} /> 
                    </a>
                </li>
            </ul>


        </div>
    )
};

export default Navbar;
