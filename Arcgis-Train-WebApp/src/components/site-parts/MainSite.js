import React, { useState } from "react";
import RenderMap from '../RenderMap';
import MapTemplates from "../MapTemplates";
import MapTable from "../MapTable";
import SearchOnMap from "../SearchOnMap";

// Компонент основного блока сайта
const MainSite = () => {
    const [data, setData] = useState();
    const handleEvent = (value) => {
        setData(value);
    }
    console.log(data);
    // Отрисовка главного контента сайта
    return (
        <main id='ms'>
            <div className="mainmap">
                <SearchOnMap OnChange={handleEvent} />
                <RenderMap />
                <MapTemplates />
            </div>
            <div className="tableoffields">
                <MapTable res={data} />
            </div>
        </main>
    );
}

export default MainSite;


