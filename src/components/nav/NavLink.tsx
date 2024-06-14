/* eslint-disable qwik/jsx-key */
import { component$ } from "@builder.io/qwik";
import './Nav.css'; 
import '../../global.css';

interface NavLink {
  href: string;
  text: string;
  hoverColor: string;  // Add hoverColor to the NavLink interface
}

interface NavProps {
  links: NavLink[];
}

export const Nav = component$<NavProps>(({ links }) => {
  return (
    <nav class="flex gap-x-6 gap-y-5 gap-8">
      {links.map((link) => (
        <a
          href={link.href}
          class="no-underline opacity-90 cursor-pointer pointer-events-auto text-neutral-50 max-md:font-light transition-colors duration-150 ease-in-out"
          style={{ '--hover-color': link.hoverColor }}  // Set the hover color using CSS variable
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
});

export const NavLink = component$(() => {
  const links: NavLink[] = [
    { href: "/assist", text: "Assist", hoverColor: "var(--cortana-blue)" },
    { href: "/boost", text: "Boost", hoverColor: "var(--cortana-purple" },
    { href: "/immerse", text: "Immerse", hoverColor: "var(--cortana-orange" },
    { href: "/web", text: "Web", hoverColor: "var(--cortana-yellow" },  // Added a repeat color for illustration
  ];

  return (
    <header class="flex gap-8 justify-center items-center py-5 w-full bg-black bg-opacity-90 max-md:flex max-md:mx-auto max-sm:hidden">
      <a href="/">
      <img
        loading="lazy"
        alt="Logo"
        src="https://cdn.builder.io/api/v1/image/assets%2F5d086b2108f645f2aa78ff97e6eb22cb%2Fa71aed067f64450fbd955d3660151f5f"
        class="object-contain opacity-90 aspect-square w-[23px]"
        width="23"  // Explicit width attribute
        height="23"  // Explicit height attribute
      /></a>
      <Nav links={links} />
    </header>
  );
});
