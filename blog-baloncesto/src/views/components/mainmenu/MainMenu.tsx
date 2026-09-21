import './MainMenu.css'
import MainMenuItems from "../../../data/MainMenuItems.ts";

function MainMenu({item_activo}: {item_activo: number}) {
    const item_activo_menu = item_activo
    console.log(item_activo)

    return (
        <nav id="main_menu">
            <ul id="main_menu_items">
                {MainMenuItems.map(item => (
                    <li key={item.id} className={item.id === item_activo_menu ? 'main_menu_item_activo' : 'main_menu_item'}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainMenu;