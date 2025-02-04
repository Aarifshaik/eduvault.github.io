import { link } from "@nextui-org/theme";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sign Up",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/user",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Admin",
      href: "/admin",
    },
    {
      label: "Register",
      href: "/register",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    // twitter: "https://twitter.com/getnextui",
    linkedin: "https://www.linkedin.com/company/nextui",
    docs: "https://nextui-docs-v2.vercel.app",
    // discord: "https://discord.gg/9b6yyZKmH4",
    discord: "https://discord.gg/4fJQsnFK",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
