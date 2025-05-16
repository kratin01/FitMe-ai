"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, MenuIcon, UserIcon, XIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            Fit<span className="text-primary">Me</span>.ai
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute top-16 right-0 w-full bg-background border-b border-border p-4">
              <nav className="flex flex-col gap-4">
                {isSignedIn ? (
                  <>
                    <Link
                      href="/"
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HomeIcon size={16} />
                      <span>Home</span>
                    </Link>

                    <Link
                      href="/generate-program"
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <DumbbellIcon size={16} />
                      <span>Generate</span>
                    </Link>

                    <Link
                      href="/profile"
                      className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserIcon size={16} />
                      <span>Profile</span>
                    </Link>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    >
                      <Link href="/generate-program" onClick={() => setIsMenuOpen(false)}>
                        Get Started
                      </Link>
                    </Button>

                    <div className="p-2 flex justify-center">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </>
                ) : (
                  <>
                    <SignInButton>
                      <Button
                        variant={"outline"}
                        className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                      >
                        Sign In
                      </Button>
                    </SignInButton>

                    <SignUpButton>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;