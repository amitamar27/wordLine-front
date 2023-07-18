import React from "react";
import Link from "next/link";


export function Header() {
  return (
    <header className="header">
      <Link href="/" className="navbar__logo">
        Posts App
      </Link>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link href="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="/posts" className="navbar__link">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
