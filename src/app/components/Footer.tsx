import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                Fit<span className="text-primary">Me</span>.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FitMe.ai - All rights reserved
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-8 gap-y-2 md:gap-x-12 text-sm w-full md:w-auto">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
            >
              About
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
            >
              Help
            </Link>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50 w-full sm:w-auto mt-4 md:mt-0">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono whitespace-nowrap">
              SYSTEM OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;