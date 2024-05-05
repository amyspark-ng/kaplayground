/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    plugins: [
        require("daisyui"),
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["forest", "cupcake"],
        darkTheme: "forest",
    },
};
