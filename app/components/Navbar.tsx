import { NavLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session = false;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((item) => (
            <Link href={item.href} key={item.key}>
              {item.text}
            </Link>
          ))}
        </ul>

        <div className="flexCenter gap-4">
          {session ? (
            <>
              UserPhoto
              <Link href="/create-project">Share Work</Link>
            </>
          ) : (
            <AuthProvider />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
