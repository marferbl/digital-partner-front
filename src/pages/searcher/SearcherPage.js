import React, { useContext } from 'react'
import Navbar from "../../components/base/navbar";
import Searcher from '../../components/searcher/Searcher';
import { UserContext } from '../../context/userContext';


const SearcherPage = () => {
    const { isLoggedIn } = useContext(UserContext);
    return (
        <div>
            {!isLoggedIn ? <Navbar /> : null}
            <Searcher />
        </div>
    )
}

export default SearcherPage