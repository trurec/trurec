export default [{
	icon: "house",
	title: "Dashboard",
	route: "/dashboard",
	submenus: [{
		title: "Overview",
		route: "/dashboard/overview"
	}, {
		title: "Calender",
		route: "/dashboard/calender"
	}]
}, {
	icon: "briefcase",
	title: "Jobs",
	route: "/jobs",
	submenus: [{
		title: "Posted Jobs",
		route: "/jobs/posted"
	}, {
		title: "Job Requisition",
		route: "/jobs/requisition"
	}]
}, {
	icon: "people",
	title: "Candidates",
	route: "/candidates",
	submenus: [{
		title: "Applicants",
		route: "/candidates/applicants"
	}, {
		title: "Groups",
		route: "/candidates/groups"
	}]
}, {
	icon: "bar-chart",
	title: "Analytics",
	route: "/analytics",
	submenus: [{
		title: "Company Analytics",
		route: "/analytics/company"
	}, {
		title: "Job Analytics",
		route: "/analytics/job"
	}, {
		title: "User Analytics",
		route: "/analytics/user"
	}]
}, {
	icon: "tools",
	title: "Setup",
	route: "/setup",
	submenus: [{
		title: "Workflow",
		route: "/setup/workflow"
	}, {
		title: "Roles",
		route: "/setup/roles"
	}, {
		title: "Permissions",
		route: "/setup/permissions"
	}, {
		title: "Team Members",
		route: "/setup/team"
	}, {
		title: "Forms",
		route: "/setup/forms"
	}, {
		title: "Templates",
		route: "/setup/templates"
	}]
}];