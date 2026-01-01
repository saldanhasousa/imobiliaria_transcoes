import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import { useEffect, useRef } from "react";

const MobMenu = ({ aberto, onClose }) => {

    const menuRef = useRef(null);

    // 🔒 Bloquear scroll
    useEffect(() => {
        document.body.style.overflow = aberto ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [aberto]);

    
    // 👇 Clique fora
    useEffect(() => {
        function handleClick(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClose();
            }
        }

        if (aberto) {
            document.addEventListener("mousedown", handleClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [aberto, onClose]);


    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity
        ${aberto ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            {/* Menu */}
            <aside
                ref={menuRef}
                className={`fixed top-0 left-0 h-full w-64 bg-white z-50
        transform transition-transform duration-300
        ${aberto ? "translate-x-0" : "-translate-x-full"}`}
            >
                <nav >
                 <ul className="*:font-bold *:p-1.5 flex flex-col gap-2.5 *:hover:bg-gray-800 *:hover:text-white">
                    <li>
                        <NavLink to="" nClick={onClose}>

                            Home

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/imoveis" nClick={onClose}>Imóveis</NavLink>
                    </li>

                    <li>
                        <NavLink to="/aprenda" nClick={onClose}>Aprenda</NavLink>
                    </li>

                    <li>
                        <NavLink to="/sobre" nClick={onClose}>Sobre</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contactos">Contactos</NavLink>
                    </li>
                 </ul>
                </nav>
            </aside>
        </>
    );
}

export default MobMenu