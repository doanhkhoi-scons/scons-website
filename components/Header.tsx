"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "./Container";
import styles from "./Header.module.css";

import { company } from "@/data/company";
import { menus } from "@/data/menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.inner}>

            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src={company.logo}
                alt={company.name}
                width={210}
                height={70}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <nav className={styles.desktopMenu}>
              {menus.map((menu) => (
                <a key={menu.name} href={menu.href}>
                  {menu.name}
                </a>
              ))}
            </nav>

            {/* Mobile Button */}
            <button
              className={styles.menuButton}
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              ☰
            </button>

          </div>
        </Container>
      </header>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayShow : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <aside
        className={`${styles.mobileMenu} ${
          open ? styles.mobileMenuShow : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          ✕
        </button>

        {menus.map((menu) => (
          <a
            key={menu.name}
            href={menu.href}
            onClick={closeMenu}
          >
            {menu.name}
          </a>
        ))}
      </aside>
    </>
  );
}