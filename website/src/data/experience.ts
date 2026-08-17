export interface SkillGroup {
	title: string;
	items: { name: string; }[];
}

export interface ExperienceEntry {
	title: string;
	organization: string;
	date: string;
	bullets: string[];
}

export const SKILLS: SkillGroup[] = [
	{
		title: "Programming Languages",
		items: [
			{ name: "Python" },
			{ name: "C" },
			{ name: "C++" },
			{ name: "C#" },
			{ name: "Java" },
			{ name: "Kotlin" },
			{ name: "JavaScript" },
			{ name: "TypeScript" },
			{ name: "Bash" },
			{ name: "x86 Assembly (basic)" },
		],
	},
	{
		title: "Frontend & UI Development",
		items: [
			{ name: "HTML/CSS" },
			{ name: "React" },
			{ name: "React Native" },
			{ name: "Node.js" },
			{ name: "Expo" },
			{ name: "Android SDK" },
			{ name: "Vue (basic)" },
			{ name: "Angular (basic)" },
			{ name: "EJS" },
			{ name: "Tailwind CSS" },
			{ name: "Bootstrap" },
			{ name: "shadcn/ui" },
			{ name: "ImGui" },
			{ name: "SDL2" },
		],
	},
	{
		title: "Backend Frameworks & Databases",
		items: [
			{ name: "Express" },
			{ name: "Flask (basic)" },
			{ name: "Apollo GraphQL" },
			{ name: "Prisma" },
			{ name: "Supabase" },
			{ name: "Firebase (basic)" },
			{ name: "PostgreSQL" },
			{ name: "MySQL" },
			{ name: "SQLite" },
		],
	},
	{
		title: "DevOps & CI/CD",
		items: [
			{ name: "GitHub Actions" },
			{ name: "Google Cloud Platform" },
			{ name: "EAS (Expo)" },
			{ name: "Docker (basic)" },
			{ name: "systemd" },
			{ name: "cron (basic)" },
		],
	},
	{
		title: "Tools",
		items: [
			{ name: "Git" },
			{ name: "GitHub" },
			{ name: "VS Code" },
			{ name: "JetBrains IDEs" },
			{ name: "Vim" },
			{ name: "Visual Studio" },
			{ name: "CMake" },
			{ name: "Make" },
			{ name: "Postman" },
			{ name: "Figma" },
			{ name: "FreeCAD" },
			{ name: "KiCad" },
			{ name: "Blender" },
			{ name: "GraphViz" },
		],
	},
	{
		title: "Graphics & Game Development",
		items: [
			{ name: "OpenGL" },
			{ name: "Framebuffer" },
			{ name: "Raycasting" },
			{ name: "Unity (basic)" },
			{ name: "Ursina Engine (basic)" },
		],
	},
	{
		title: "AI/ML and Data Science",
		items: [
			{ name: "NumPy" },
			{ name: "Pandas" },
			{ name: "Matplotlib" },
			{ name: "OpenCV" },
			{ name: "TensorFlow Lite (basic)" },
			{ name: "OpenAI API" },
		],
	},
	{
		title: "OS Development & Low-level Systems",
		items: [
			{ name: "UEFI" },
			{ name: "Bootloaders" },
			{ name: "Memory management" },
			{ name: "Syscalls" },
			{ name: "Threading" },
			{ name: "GPIO" },
		],
	},
	{
		title: "Platforms & Embedded Systems",
		items: [
			{ name: "Linux (Debian-based)" },
			{ name: "Windows (Win32 API, GDI+)" },
			{ name: "Android" },
			{ name: "Raspberry Pi" },
			{ name: "Arduino" },
			{ name: "ESP32/ESP8266" },
			{ name: "MSP430" },
		],
	},
	{
		title: "APIs & Protocols",
		items: [
			{ name: "REST" },
			{ name: "GraphQL" },
			{ name: "WebSockets" },
			{ name: "TCP/UDP" },
			{ name: "BLE" },
			{ name: "UART" },
		],
	},
	{
		title: "Language Internals & Tooling Concepts",
		items: [
			{ name: "Language design" },
			{ name: "Interpreters" },
			{ name: "Tokenization" },
			{ name: "Bytecode emulation" },
			{ name: "Compiler design" },
		],
	},
];

export const EXPERIENCE: ExperienceEntry[] = [
	{
		title: "Chief Technology Officer",
		organization: "Innpact Ventures Pvt. Ltd.",
		date: "Apr 2025 - Present",
		bullets: [
			"Led development of a portable uroflowmetry system for real-time flow measurement, automated analysis, patient data logging, and remote monitoring.",
			"Developed low-power, non-invasive infant monitoring systems for apnea, movement, and bed-fall detection.",
			"Designed flexible sensor-integrated knee wearable for gait analysis, physiotherapy, and rehabilitation monitoring.",
		],
	},
	{
		title: "Research Intern",
		organization: "Interdisciplinary Centre for Energy Research (ICER), Indian Institute of Science, Bengaluru",
		date: "Apr 2023 - Oct 2024",
		bullets: [
			"Designed CAD models for microfluidic sensors used to detect specific substances and PCB layouts for sensor electronics.",
			"Developed a real-time photovoltaic (PV) dashboard with data logging, live analytics, and interactive graphs.",
			"Implemented full-stack architecture using React, Next.js, MySQL, and visualization libraries like Apache ECharts for monitoring data.",
			"Developed a pipeline to improve latency for fetching of large datasets (1M+ data points under 500ms).",
		],
	},
	{
		title: "Chief Technology Officer",
		organization: "HustleX (XElite Studios Pvt. Ltd.)",
		date: "Mar 2022 - Present",
		bullets: [
			"Led backend and frontend development across multiple products with full-stack integration.",
			"Designed mobile apps using React Native with Node.js and PostgreSQL backend, using Supabase for authentication and database management.",
			"Implemented CI/CD pipelines using GitHub Actions and Google Cloud Platform infrastructure.",
			"Built real-time pub-sub systems using WebSockets and REST APIs.",
			"Grew user base to ~20% monthly active users (MAU) with ~300 users.",
		],
	},
];
