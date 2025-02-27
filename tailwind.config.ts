import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			backgroundImage: {
				"emoji-tiled": "url('/background/emoji-tiled.png')",
				"dots-tiled": "url('/background/dots-tiled.png')",
				"dots-tiled-2": "url('/background/dots-tiled-2.png')",
				"stars": "url('/background/stars.png')",
			},
			keyframes: {
				"slide-in-left": {
					"0%": { translate: "-200px", opacity: "0" },
					"80%": { translate: "0", opacity: "1" },
				},
				"slide-in-right": {
					"0%": { translate: "200px", opacity: "0" },
					"80%": { translate: "0", opacity: "1" },
				},
				"rotate-clockwise": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"rotate-counterclockwise": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(-360deg)" },
				},
				"ping-pong": {
					"0%, 100%": { transform: "translateX(-10px)" },
					"50%": { transform: "translateX(10px)" },
				},
				"shake-rotate-slow": {
					"0%, 100%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
					"75%": { transform: "rotate(-3deg)" },
				},
				"shake-rotate-fast": {
					"0%, 100%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(-8deg)" },
					"50%": { transform: "rotate(8deg)" },
					"75%": { transform: "rotate(-8deg)" },
				},
				"levitate": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			animation: {
				"slide-in-left": "slide-in-left 2s cubic-bezier(0.25, 1, 0.5, 1) forwards",
				"slide-in-right": "slide-in-right 3s cubic-bezier(0.25, 1, 0.5, 1) forwards",
				"rotate-clockwise": "rotate-clockwise 90s linear infinite",
				"rotate-counterclockwise": "rotate-counterclockwise 90s linear infinite",
				"ping-pong": "ping-pong 5s ease-in-out infinite",
				"shake-slow": "shake-rotate-slow 3s infinite linear",
				"shake-fast": "shake-rotate-fast 1s infinite linear",
				"levitate": "levitate 4s infinite ease-in-out",
			},
			duration: {
				3000: "3000ms",
				5000: "5000ms",
				10000: "10000ms",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
