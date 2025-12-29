import React from 'react'
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
                <nav className="flex flex-col p-6 gap-4">
                    <a href="#" onClick={onClose}>Início</a>
                    <a href="#" onClick={onClose}>Sobre</a>
                    <a href="#" onClick={onClose}>Serviços</a>
                    <a href="#" onClick={onClose}>Contato</a>
                </nav>
            </aside>
        </>
    );
}

export default MobMenu