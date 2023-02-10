import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import "./reviewList.css";



const ReviewList = () => {

  return (
    <div className="columns mt-5">
      <h2>Hello</h2>
      <div className="searchInput">
      <GooglePlacesAutocomplete 
      apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    />
      </div>
    </div>
  );
};

export default ReviewList;
