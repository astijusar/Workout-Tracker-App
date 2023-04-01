import React from "react";

export default function HorizontalNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow" style={{backgroundColor: "#66347F"}}>
                <div className="container">
                    <div className="col-2">
                        <a className="navbar-brand" href="#" style={{color: "#D27685"}}>
                            Workout Tracker
                        </a>
                    </div>
                    <div className="col-10" >
                        <div className="p-1 text-end">
                            <button className="btn m-1" style={{backgroundColor: "#D27685"}}>
                                Login
                            </button>
                            <button className="btn m-1" style={{backgroundColor: "#9E4784"}}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
