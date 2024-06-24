import React from 'react'

export const Header = () => {
  return (
    <div className="main-container" id="Home">
            <div className="nav">
                <div className="logo">
                    <a href="#"><img src="favicon.png" className="favicon" alt=""/></a>
                </div>

                <nav className="">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="./#kegiatan">Kegiatan</a></li>
                        <li><a href="./#mahakarya">Mahakarya</a></li>
                        <li><a href="./#daftar">Daftar</a></li>
                    </ul>
                </nav>

                <div className="burger">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>

            <div className="landing">
                <img className="logo-mmcc" src="MMCC.png" alt="logo"/>
                <h1 className="hero-name">Maliki <span>Mathematics Coding Club</span></h1>
                <p className="desc_hero">
                    Mari kita masuki dunia ajaib information technology! Kita akan bersama-sama menjelajahi
                    rahasia-rahasia menarik tentang software engineering dan data science dengan cara yang
                    menyenangkan dan penuh petualangan! 🚀✨
                </p>
            </div>
        </div>
  )
}
