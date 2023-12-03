import Home from "./home";
import Signup from "./users/signup";
import Search from "./search";
import Details from "./details";
import UsersList from "./users/list";
import UserDatils from "./users/details";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./users/signIn";
import Account from "./users/account";

function Project() {
    // process.env;
    return (
        <div className="container-fluid">
            <h1>Project</h1>
            <div className="row">
                <div className="col-2">
                    <div className="list-group">
                        <Link to="/project/" className="list-group-item">Home</Link>
                        <Link to="/project/signin" className="list-group-item">SignIn</Link>
                        <Link to="/project/account" className="list-group-item">Account</Link>
                        <Link to="/project/signup" className="list-group-item">Signup</Link>
                        <Link to="/project/search" className="list-group-item">Search</Link>
                        <Link to="/project/users" className="list-group-item">Users</Link>

                    </div>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/search/:searchTerm" element={<Search />} />
                        <Route path="/details/:movieId" element={<Details />} />
                        <Route path="/users" element={< UsersList />} />
                        <Route path="/users/:userId" element={<UserDatils />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Project;