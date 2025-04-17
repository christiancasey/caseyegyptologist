export const profile = {
	fullName: 'Christian Casey',
	title: 'Wissenschaftlicher Mitarbeiter',
	institute: 'Freie Universität Berlin',
	author_name: 'Christian Casey', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Egyptology', 
			description: 'Egyptian languages and scripts', 
			field: 'egyptology' },
		{ title: 'Digital Humanities', 
			description: 'Computational tools for humanistic questions', 
			field: 'dh' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'mailto:christiancasey86@gmail.com',
	linkedin: '',
	x: '',
	github: 'https://github.com/christiancasey',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://www.caseyegyptologist.com', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: 'https://www.caseyegyptologist.com/' // Repository name starting with /
}

export const seo = {
	default_title: 'Christian Casey, THE Egyptologist',
	default_description: 'A personal website for Christian Casey, THE Egyptologist',
	default_image: '/images/astro-academia.png',
}
