import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import './HomeInput.css';

const HomeInput = ({ onCityChange, mobile }) => {
    const handleSubmit = (value) => {
        onCityChange(value);
    };

    return (
        <>
            {mobile ? (
                <div className="mobile-home-input-container">
                    <div className="mobile-home-input">
                        {/* <h3 className="home-subtitle">"Instantly check any city's weather information."</h3> */}
                        <div className="mobile-home-searchBar-container">
                            {/* <p className="home-searchBar-legend">(Type below the city you want to get the weather information)</p> */}
                            <SearchBar mobile onSearch={handleSubmit} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="home-input-container">
                    <div className="home-input">
                        {/* <h3 className="home-subtitle">"Instantly check any city's weather information."</h3> */}
                        <div className="home-searchBar-container">
                            {/* <p className="home-searchBar-legend">(Type below the city you want to get the weather information)</p> */}
                            <SearchBar onSearch={handleSubmit} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default HomeInput;