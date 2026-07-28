export interface Project {
	name: string;
	url: string;
	description: string;
	technologies: string[];
}

export interface ProjectSection {
	title: string;
	description: string;
	projects: Project[];
}

export const PROJECTS: ProjectSection[] = [
	{
		title: "Operating Systems & Low-level Programming",
		description: "Projects exploring OS kernels, emulators, and system-level code.",
		projects: [
			{
				name: "Mesh",
				url: "https://github.com/Sid110307/Mesh",
				description: "An x86 OS kernel with SMP, paging, and IO, written in C++ and x86 Assembly",
				technologies: ["C", "C++", "x86 Assembly"],
			},
			{
				name: "OmniIR",
				url: "https://github.com/Sid110307/OmniIR",
				description: "Universal IR Remote",
				technologies: ["C", "C++", "CMake"],
			},
			{
				name: "6502-Emulator",
				url: "https://github.com/Sid110307/6502-Emulator",
				description: "Emulator for the 6502 microprocessor in C++",
				technologies: ["C++", "CMake"],
			},
			{
				name: "MSP430-Development",
				url: "https://github.com/Sid110307/MSP430-Development",
				description: "Collection of programs and experiments for TI MSP430 MCUs",
				technologies: ["C", "Make"],
			},
		],
	},
	{
		title: "Languages & Compilers",
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
		description: "Mobile apps for Android and iOS.",
		projects: [
			{
				name: "SmartMoisture",
				url: "https://github.com/Sid110307/Indriya-App/tree/master/app/src/main/java/com/indriya/one/core/app/moisture",
				description: "BLE moisture sensor app with custom equation support to transform raw values",
				technologies: ["Kotlin", "Android"],
			},
			{
				name: "SpectralMapper",
				url: "https://github.com/Sid110307/Indriya-App/tree/master/app/src/main/java/com/indriya/one/core/app/spectral",
				description: "App for visualizing and analyzing IR spectral data",
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
				name: "RelayController",
				url: "https://github.com/Sid110307/RelayController",
				description: "Android app to control Raspberry Pi GPIO relays remotely",
				technologies: ["Kotlin", "Android"],
			},
			{
				name: "TodoApp",
				url: "https://github.com/Sid110307/TodoApp",
				description: "Simple todo management app",
				technologies: ["Kotlin", "Android"],
			},
		],
	},
	{
		title: "Game Development",
		description: "Games and game engine experiments.",
		projects: [
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
		description: "Experiments with neural networks and models.",
		projects: [
			{
				name: "AI",
				url: "https://github.com/Sid110307/AI",
				description: "Neural network trained on datasets for numerical prediction",
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
				name: "PDFImager",
				url: "https://github.com/Sid110307/PDFImager",
				description: "Program to convert PDF to images using PyPDF2",
				technologies: ["Python"],
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

export const FEATURED_PROJECTS = ["Mesh", "SmartMoisture-MSP430", "quarklang-vm", "AxiLang", "ShadowDoom", "FBGraphics"];
