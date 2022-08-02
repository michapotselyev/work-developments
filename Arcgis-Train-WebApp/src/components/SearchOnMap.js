import React from "react";

const SearchOnMap = ({ OnChange }) => {
    const handlerCatcher = (event) => {
        OnChange(event.target.value);
    }
    return (
        <div className="search-wdg">
            <label htmlFor="input-text" className="label-input">
                Enter cadnum or ownership type...
            </label>
            <input type="text" id="input-text" className="input-field" onChange={handlerCatcher} />
        </div>
    );
}

export default SearchOnMap;