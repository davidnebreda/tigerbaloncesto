import './HomeView.css'
import HeroHeader from '../components/heroheader/HeroHeader'
import MainMenu from "../components/mainmenu/MainMenu.tsx";

function HomeView() {

    return (
        <>
         <div id="home-view" className="view-page">
             <header id="main-header">
                    <HeroHeader />
                    <MainMenu item_activo={1} />
             </header>

         </div>
        </>
    )
}

export default HomeView