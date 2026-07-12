export interface NavItem {
	title: string;
	url: string;
}

export const NAVIGATION: NavItem[] = [
	{ title: "About", url: "/" },
	{ title: "Projects", url: "/projects/" },
	{ title: "Experience", url: "/experience/" },
	{ title: "Blog", url: "/posts/" },
	{ title: "Publications", url: "/publications/" },
];
