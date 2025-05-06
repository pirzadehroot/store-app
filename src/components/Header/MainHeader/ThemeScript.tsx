'use client';

import Script from 'next/script';

export default function ThemeScript() {
  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {`
        (function() {
          try {
            var theme = localStorage.getItem("theme");
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (theme === "dark" || (!theme && prefersDark)) {
              document.documentElement.classList.add("dark");
              document.documentElement.setAttribute("data-theme", "dark");
            } else {
              document.documentElement.classList.remove("dark");
              document.documentElement.setAttribute("data-theme", "light");
            }
          } catch (e) {}
        })();
      `}
    </Script>
  );
}
