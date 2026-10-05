export interface Project {
	name: string;
	url: string;
	description: string;
	technologies?: string[];
	area?: ProjectArea;
}

export type ProjectArea = "geospatial" | "embedded" | "systems" | "apps" | "creative" | "other";

export interface ProjectSection {
	title: string;
	description: string;
	area: ProjectArea;
	projects: Project[];
}

const README_PROJECTS: ProjectSection[] = [
	{
		title: "Citizen Science & Geospatial Platforms",
		area: "geospatial",
		description: "Community reporting, environmental mapping, and spatial analysis.",
		projects: [
			{ name: "Ankura", url: "https://github.com/Sid110307/Ankura", description: "Citizen-science platform for geotagged reporting, rescue, transplantation, and lifecycle tracking of naturally growing saplings." },
			{ name: "Cauvery Janavahini", url: "https://github.com/Sid110307/KaveriApp", description: "Citizen-science platform for collecting and organising community knowledge and environmental observations across the Cauvery basin." },
			{ name: "TreeMap", url: "https://github.com/Sid110307/TreeMap", description: "Geospatial tree-mapping app with GPS logging, imagery, interactive maps, cloud sync, offline collection, and environmental data analysis." },
			{ name: "UrbanFlow", url: "https://github.com/Sid110307/UrbanFlow", description: "Bengaluru stormwater-drain atlas and flood-response platform with scenario simulation, 3D risk visualisation, evidence-gated analysis, and AI-assisted operations." },
		],
	},
	{
		title: "Embedded Systems & Scientific Instrumentation",
		area: "embedded",
		description: "Custom electronics, sensing, and laboratory instruments.",
		projects: [
			{ name: "Uroflowmetry", url: "https://github.com/Sid110307/Uroflowmetry", description: "Portable uroflowmetry system with custom sensing electronics, automated flow measurement, local networking, reporting, and self-draining hardware." },
			{ name: "Turbidity", url: "https://github.com/Sid110307/Turbidity", description: "Portable BLE nephelometric turbidity instrument using 850 nm illumination, spectral detection, onboard calibration, and battery-powered operation.", technologies: ["BLE"] },
			{ name: "SmartMoisture-MSP430", url: "https://github.com/Sid110307/SmartMoisture-MSP430", description: "MSP430-based low-power soil moisture and temperature sensing system with BLE communication.", technologies: ["MSP430", "BLE"] },
			{ name: "SpinCoat-PCB", url: "https://github.com/Sid110307/SpinCoat-PCB", description: "Custom-built large-area laboratory spin coater with in-house electronics, motor control, and PCB design." },
		],
	},
	{
		title: "Systems Programming & Developer Tools",
		area: "systems",
		description: "Kernels, language tools, graphics, and low-level experiments.",
		projects: [
			{ name: "Mesh", url: "https://github.com/Sid110307/Mesh", description: "x86-64 operating-system kernel with SMP, paging, virtual memory, scheduling, framebuffer output, interrupts, and low-level hardware support.", technologies: ["C++", "x86 Assembly"] },
			{ name: "schema-cms", url: "https://github.com/Sid110307/schema-cms", description: "Extensible schema-driven desktop CMS for editing structured JavaScript content using pluggable document, collection, media, and graph editors." },
			{ name: "quarklang-vm", url: "https://github.com/Sid110307/quarklang-vm", description: "Virtual machine and toolchain for QuarkLang, a stack-based assembly-like language with compilation, execution, disassembly, and debugging.", technologies: ["C"] },
			{ name: "AxiLang", url: "https://github.com/Sid110307/AxiLang", description: "Scripting language designed for programmable control of the AxiDraw pen plotter.", technologies: ["C++"] },
			{ name: "WiiScript", url: "https://github.com/Sid110307/WiiScript", description: "On-console Lua scripting environment for Nintendo Wii homebrew with an integrated editor, runtime, and graphics/input support.", technologies: ["Lua"] },
			{ name: "FBGraphics", url: "https://github.com/Sid110307/FBGraphics", description: "Low-level C++ graphics library for direct framebuffer rendering with drawing primitives, input support, and graphics experiments.", technologies: ["C++"] },
			{ name: "6502-Emulator", url: "https://github.com/Sid110307/6502-Emulator", description: "Software emulator for the MOS 6502 processor architecture.", technologies: ["C++"] },
			{ name: "SoundTest", url: "https://github.com/Sid110307/SoundTest", description: "Low-level C++ audio experiment for generating and playing sound through the Linux PC speaker and related audio interfaces.", technologies: ["C++"] },
		],
	},
	{
		title: "Full-Stack & Mobile",
		area: "apps",
		description: "Applications for monitoring, fitness, video, and event operations.",
		projects: [
			{ name: "PVDashboard", url: "https://github.com/Sid110307/PVDashboard", description: "PV reliability monitoring and visualisation platform for working with experimental photovoltaic data." },
			{ name: "HustleX", url: "https://hustlex.club", description: "Gamified fitness platform that turns physical activity into real-world value through challenges and access to product discounts and partner offers as rewards." },
			{ name: "VLCBulkClipper", url: "https://github.com/Sid110307/VLCBulkClipper", description: "VLC companion tool for marking, previewing, and exporting multiple clips from a video in bulk." },
			{ name: "ConferenceDashboard", url: "https://github.com/Sid110307/ConferenceDashboard", description: "Full-stack conference operations platform covering attendees, communications, accommodation, food, finance, feedback, certificates, and helpdesk workflows." },
		],
	},
	{
		title: "Older Projects",
		area: "creative",
		description: "Earlier games, mobile apps, and graphics experiments.",
		projects: [
			{ name: "ShadowDoom", url: "https://github.com/Sid110307/ShadowDoom", description: "Terminal-based fantasy RPG in Python.", technologies: ["Python"] },
			{ name: "BLEConnector", url: "https://github.com/Sid110307/BLEConnector", description: "Android BLE utility for discovering devices and interacting with BLE services and characteristics.", technologies: ["Kotlin", "Android"], area: "apps" },
			{ name: "Attendifier", url: "https://github.com/Sid110307/Attendifier", description: "Camera-based attendance logging and tracking application using face recognition, OpenCV, and cloud-backed records.", technologies: ["OpenCV"], area: "apps" },
			{ name: "Earther", url: "https://github.com/Sid110307/Earther", description: "Mobile earthing-voltage data logger that records electrical measurements together with GPS location data.", area: "apps" },
			{ name: "Insider-Engine", url: "https://github.com/Sid110307/Insider-Engine", description: "Experimental SDL2-based game engine exploring custom graphics and game-development systems.", technologies: ["SDL2"] },
			{ name: "WiiSandbox", url: "https://github.com/Sid110307/WiiSandbox", description: "Nintendo Wii homebrew development sandbox with tooling for creating, building, managing, and deploying projects to SD or USB storage.", area: "systems" },
			{ name: "FaceCounter", url: "https://github.com/Sid110307/FaceCounter", description: "Experimental face-detection and counting project for desktop and mobile.", area: "apps" },
		],
	},
];

const ADDITIONAL_PROJECTS: ProjectSection[] = [
	{
		title: "Embedded & Hardware Experiments",
		area: "embedded",
		description: "Other electronics, sensing, and simulation work on GitHub.",
		projects: [
			{ name: "MicrofluidDevice", url: "https://github.com/Sid110307/MicrofluidDevice", description: "Sodium microfluidic device project." },
			{ name: "SolarPerch", url: "https://github.com/Sid110307/SolarPerch", description: "Solar-powered autonomous bird-bath fountain controller using an ESP32, LiPo battery, water-level sensing, and energy monitoring." },
			{ name: "SuperMotor", url: "https://github.com/Sid110307/SuperMotor", description: "Simulation of two motors and a wheel.", technologies: ["C++"] },
			{ name: "LoRa", url: "https://github.com/Sid110307/LoRa", description: "Python experiments with LoRa radio communication.", technologies: ["Python"] },
			{ name: "OmniIR", url: "https://github.com/Sid110307/OmniIR", description: "Universal infrared remote project.", technologies: ["C", "C++", "CMake"] },
			{ name: "MSP430-Development", url: "https://github.com/Sid110307/MSP430-Development", description: "Programs and experiments for TI MSP430 microcontrollers.", technologies: ["C", "Make"] },
		],
	},
	{
		title: "Operating Systems & Low-level Programming",
		area: "systems",
		description: "Projects exploring OS kernels, emulators, and system-level code.",
		projects: [
			{ name: "FreakOS", url: "https://github.com/Sid110307/FreakOS", description: "Operating system learning project written in C and assembly.", technologies: ["C", "Assembly"] },
			{
				name: "Mesh",
				url: "https://github.com/Sid110307/Mesh",
				description: "An x86 OS kernel with SMP, paging, and IO, written in C++ and x86 Assembly",
				technologies: ["C", "C++", "x86 Assembly"],
			},
			{
				name: "6502-Emulator",
				url: "https://github.com/Sid110307/6502-Emulator",
				description: "Emulator for the 6502 microprocessor in C++",
				technologies: ["C++", "CMake"],
			},
		],
	},
	{
		title: "Languages & Compilers",
		area: "systems",
		description: "Building interpreters, VMs, and language tools.",
		projects: [
			{
				name: "quarklang-vm",
				url: "https://github.com/Sid110307/quarklang-vm",
				description: "Stack-based VM with bytecode, REPL, plugins, and custom debugger",
				technologies: ["C", "Vim", "Emacs"],
			},
			{
				name: "AxiLang",
				url: "https://github.com/Sid110307/AxiLang",
				description: "A scripting language for controlling the AxiDraw plotter",
				technologies: ["C++", "CMake", "Python"],
			},
			{
				name: "ToyLang",
				url: "https://github.com/Sid110307/ToyLang",
				description: "A simple toy programming language",
				technologies: ["C"],
			},
			{
				name: "PYC",
				url: "https://github.com/Sid110307/PYC",
				description: "Emulating a subset of Python bytecode instructions",
				technologies: ["C++", "Python"],
			},
		],
	},
	{
		title: "Mobile Apps",
		area: "apps",
		description: "Android apps for various utilities and experiments.",
		projects: [
			{
				name: "SmartMoisture",
				url: "https://github.com/Sid110307/Indriya-App/tree/master/app/src/main/java/com/indriya/one/core/app/moisture",
				description: "BLE moisture sensor app with custom equation support to transform raw values",
				technologies: ["Kotlin", "Android"],
			},
			{
				name: "Turbidity",
				url: "https://github.com/Sid110307/Indriya-App/tree/master/app/src/main/java/com/indriya/one/core/app/turbidity",
				description: "App for BLE nephelometric turbidity sensor with calibration, logging, and graphing",
				technologies: ["Kotlin", "Android"],
			},
			{
				name: "BLEConnector",
				url: "https://github.com/Sid110307/BLEConnector",
				description: "Bluetooth Low Energy connector/scanner for Android",
				technologies: ["Kotlin", "Android"],
			},
			{
				name: "VoiceLink",
				url: "https://github.com/Sid110307/VoiceLink",
				description: "App to send audio from iPhone to Apple Watch",
				technologies: ["Swift", "iOS"],
			},
			{
				name: "TodoApp",
				url: "https://github.com/Sid110307/TodoApp",
				description: "Simple todo management app with deadlines",
				technologies: ["Kotlin", "Android"],
			},
		],
	},
	{
		title: "Game Development",
		area: "creative",
		description: "Games and game engine experiments.",
		projects: [
			{ name: "TurretAmmoPlanner", url: "https://github.com/Sid110307/TurretAmmoPlanner", description: "Factorio mod with a GUI-configurable turret ammunition planner.", technologies: ["Lua"] },
			{ name: "ToggleAsteroids", url: "https://github.com/Sid110307/ToggleAsteroids", description: "Factorio mod to temporarily suppress asteroids on individual space platforms.", technologies: ["Lua"] },
			{
				name: "ShadowDoom",
				url: "https://github.com/Sid110307/ShadowDoom",
				description: "Fantasy text-based RPG in Python",
				technologies: ["Python"],
			},
			{
				name: "Reckoning",
				url: "https://github.com/Sid110307/Reckoning",
				description: "Minimal 3D game made using Ursina engine",
				technologies: ["Python"],
			},
		],
	},
	{
		title: "Artificial Intelligence & Machine Learning",
		area: "other",
		description: "Experiments with neural networks and models.",
		projects: [
			{ name: "WhatsAppBot", url: "https://github.com/Sid110307/WhatsAppBot", description: "Neural network trained on WhatsApp chat data to generate messages.", technologies: ["C++"] },
			{
				name: "AI",
				url: "https://github.com/Sid110307/AI",
				description: "Neural network trained on datasets for text prediction",
				technologies: ["C++", "CMake"],
			},
			{
				name: "Neuron",
				url: "https://github.com/Sid110307/Neuron",
				description: "Simple neural network in C",
				technologies: ["C"],
			},
		],
	},
	{
		title: "Graphics & Visualization",
		area: "creative",
		description: "Graphics engines and rendering tests.",
		projects: [
			{
				name: "FBGraphics",
				url: "https://github.com/Sid110307/FBGraphics",
				description: "C++ graphics engine directly manipulating framebuffer pixels",
				technologies: ["C++", "CMake"],
			},
			{
				name: "GraphicLib",
				url: "https://github.com/Sid110307/GraphicLib",
				description: "Simple X11 2D graphics engine with physics",
				technologies: ["C++", "CMake"],
			},
			{
				name: "ImageParser",
				url: "https://github.com/Sid110307/ImageParser",
				description: "Image parser and OpenGL renderer for a wide range of formats",
				technologies: ["C", "OpenGL", "CMake"],
			},
			{
				name: "Graphics-Test-1",
				url: "https://github.com/Sid110307/Graphics-Test-1",
				description: "OpenGL and GLFW test",
				technologies: ["C++", "OpenGL", "CMake"],
			},
			{
				name: "Graphics-Test-2",
				url: "https://github.com/Sid110307/Graphics-Test-2",
				description: "OpenGL Test with camera movement",
				technologies: ["C++", "OpenGL", "CMake"],
			},
			{
				name: "Graphics-Test-3",
				url: "https://github.com/Sid110307/Graphics-Test-3",
				description: "OpenGL ES 3.1 Test for Android",
				technologies: ["Kotlin", "Android"],
			},
			{
				name: "Graphics-Test-4",
				url: "https://github.com/Sid110307/Graphics-Test-4",
				description: "OpenGL and GLFW test with ImGui",
				technologies: ["C++", "OpenGL", "CMake"],
			},
			{
				name: "Graphics-Test-5",
				url: "https://github.com/Sid110307/Graphics-Test-5",
				description: "Simple raycasting engine with OpenGL",
				technologies: ["C++", "CMake"],
			},
			{
				name: "Graphics-Test-6",
				url: "https://github.com/Sid110307/Graphics-Test-6",
				description: "Graphics test with Win32 API and GDI+",
				technologies: ["C++", "CMake"],
			},
		],
	},
	{
		title: "Tools & Utilities",
		area: "other",
		description: "Small utilities and other miscellaneous projects.",
		projects: [
			{
				name: "SoundTest",
				url: "https://github.com/Sid110307/SoundTest",
				description: "C++ ImGui audio tool for generating, editing, and playing tones with internal PC speaker",
				technologies: ["C++", "CMake"],
			},
			{
				name: "WebServer",
				url: "https://github.com/Sid110307/WebServer",
				description: "Simple web server using C++ sockets",
				technologies: ["C++", "CMake"],
			},
			{
				name: "NQueens",
				url: "https://github.com/Sid110307/NQueens",
				description: "C++ program that solves the N-Queens problem using backtracking",
				technologies: ["C++"],
			},
			{
				name: "WeatherFinder",
				url: "https://github.com/Sid110307/WeatherFinder",
				description: "Simple weather app using WeatherAPI",
				technologies: ["React", "JavaScript"],
			},
			{
				name: "FeedbackBot",
				url: "https://github.com/Sid110307/FeedbackBot",
				description: "Discord bot for investor feedback",
				technologies: ["Python"],
			},
			{
				name: "Garble",
				url: "https://github.com/Sid110307/Garble",
				description: "Base64 encryption/decryption tool in Java",
				technologies: ["Java"],
			},
			{
				name: "Grid",
				url: "https://github.com/Sid110307/Grid",
				description: "JavaX Swing program to create an NxN grid",
				technologies: ["Java"],
			},
		],
	},
];

const readmeProjectNames = new Set(README_PROJECTS.flatMap((section) => section.projects.map((project) => project.name)));

export const README_SECTION_COUNT = README_PROJECTS.length;

export const PROJECTS: ProjectSection[] = [
	...README_PROJECTS,
	...ADDITIONAL_PROJECTS.map((section) => ({
		...section,
		title: `More: ${section.title}`,
		projects: section.projects.filter((project) => !readmeProjectNames.has(project.name)),
	})).filter((section) => section.projects.length > 0),
];

export const FEATURED_PROJECTS = ["Ankura", "Uroflowmetry", "Mesh", "UrbanFlow", "schema-cms", "HustleX"];
