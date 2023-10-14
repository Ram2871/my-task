import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  const [isQuizzeOpen, setIsQuizzeOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);

  return (
    <>
      <div className="border-bottom">
        <header>
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <img
                src="/logo.png"
                alt="logo"
                className="logo-icon navbar-brand"
              />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ms-3">
                    <Link className="nav-link active" aria-current="page">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link className="nav-link">Test series</Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link className="nav-link">Our Center</Link>
                  </li>
                  <li className="nav-item ms-3 dropdown">
                    <Link
                      className="nav-link d-flex justify-content-center align-items-center"
                      role="button"
                      aria-expanded={isQuizzeOpen}
                      onClick={() => {
                        setIsQuizzeOpen(!isQuizzeOpen);
                      }}
                    >
                      Quizzes
                      {isQuizzeOpen ? (
                        <BiChevronUp className="ms-1 fs-4" /> // Show this icon when the dropdown is open
                      ) : (
                        <BiChevronDown className="ms-1 fs-4" /> // Show this icon when the dropdown is closed
                      )}
                    </Link>
                    <ul
                      className={`dropdown-menu rounded-1 ${isQuizzeOpen ? "show" : ""}`}
                    >
                      <li>
                        <Link className="dropdown-item">Quizzes </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Another Quizzes</Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item">Quizzes here</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ms-3">
                    <Link className="nav-link">Practice</Link>
                  </li>
                  <li className="nav-item ms-3 dropdown">
                    <Link
                      className="nav-link d-flex justify-content-center align-items-center"
                      role="button"
                      aria-expanded={isResourceOpen}
                      onClick={() => {
                        setIsResourceOpen(!isResourceOpen);
                      }}
                    >
                      Free Resources
                      {isResourceOpen ? (
                        <BiChevronUp className="ms-1 fs-4" /> // Show this icon when the dropdown is open
                      ) : (
                        <BiChevronDown className="ms-1 fs-4" /> // Show this icon when the dropdown is closed
                      )}
                    </Link>
                    <ul className={`dropdown-menu rounded-1 ${isResourceOpen ? "show" : ""}`}>
                      <li>
                        <Link className="dropdown-item">item 1 </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item">Another item </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item">item last</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <IoIosCall
                  className="border rounded-1 p-1 me-3 fs-2"
                  alt="call here"
                />
                <button
                  className="text-white py-1 px-4 log-in-btn border rounded-2 bg-red"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
