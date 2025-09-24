import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../Redux/appSlice";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addToCache } from "../Redux/cacheSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionFucused, setSuggestionFocused] = useState(false);

  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleSideBar());
  };

  const cachedSuggestions = useSelector((store) => store.cache);

  const getSearchSuggestion = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchText);
    const jsonRes = await res.json();
    setSuggestions(jsonRes[1]);
    dispatch(addToCache({ [searchText]: jsonRes[1] }));
  };

  useEffect(() => {
    if (cachedSuggestions[searchText]) {
      setSuggestions(cachedSuggestions[searchText]);
    } else {
      const timer = setTimeout(() => {
        getSearchSuggestion();
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [searchText]);

  return (
    <div className="grid grid-cols-12 gap-1 items-center m-1 p-2 shadow-sm">
      <div className="logo flex justify-start gap-2 col-span-2">
        <img
          className="w-8 cursor-pointer rounded-2xl hover:bg-gray-200 p-1"
          src="/assets/svg/hamburger.svg"
          alt="hamberger"
          onClick={() => handleMenuClick()}
        />
        <img className="w-8" src="/assets/images/yt.png" alt="yt_logo" />
        <span className="text-xl font-bold">Youtube</span>
      </div>
      <div className="col-span-8">
        <div className="searchBar flex">
          <div className="w-8/12 bg-gray-300 rounded-2xl">
            <input
              type="text"
              className="p-2 rounded-l-2xl w-11/12"
              placeholder="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setSuggestionFocused(true)}
              onBlur={() => setSuggestionFocused(false)}
            />
            <button className="w-1/12 p-2">🔍</button>
          </div>
        </div>
        {suggestionFucused && searchText.length > 0 && (
          <div className="fixed bg-white w-5/12 rounded-lg">
            <ul className="p-5">
              {suggestions.map((each) => (
                <li className="p-1 hover:bg-gray-100" key={each}>
                  {each}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="user col-span-2">
        <img className="w-12" src="/assets/images/user.jpg" alt="user" />
      </div>
    </div>
  );
};

export default Header;
