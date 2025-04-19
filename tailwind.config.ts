// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626", // red-600
        secondary: "#2563eb", // blue-600
      },
    },
  },
}

export default config;
