import Header from "../../Components/LandingPages/Home.js/Header";
import Slider from "../../Components/LandingPages/Home.js/Slider";
import HomeContent from "../../Components/LandingPages/Home.js/HomeContent"
import Nav from "../../Ui/Nav"
import Footer from "../../Ui/Footer"
const Home = () => {
    return (
        <>
            <div className=" overflow-hidden">
                <Header />
                <Nav/>
                <Slider />
                <HomeContent />
                <Footer />
            </div>


        </>
    );
}

export default Home;