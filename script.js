document.addEventListener('DOMContentLoaded', () => {
	// Dropdown Mouse Events
	const dropdownButton = document.querySelector('.dropdown-button');
	const dropdownOptions = document.querySelector('.dropdown-options');
	const dropdownSelect = document.querySelector('.dropdown-select');
	
	function clickDropdown() {
		const hasShowClass = dropdownButton.classList.contains('dropdown-options--expanded');
		dropdownButton.classList.add('dropdown-options--expanded');
		dropdownButton.setAttribute('aria-expanded', hasShowClass ? 'false' : 'true');
		dropdownOptions.scrollIntoView({behavior: "smooth", block: "start"});
		
		if (hasShowClass) { 
			const sectionTop = document.querySelector('.section-image');
			sectionTop.scrollIntoView({behavior: "smooth", block: "start"});
			dropdownButton.classList.remove('dropdown-options--expanded');
		}
	}

	function expandDropdown() {
		dropdownButton.classList.add('dropdown-options--expanded');
		dropdownButton.setAttribute('aria-expanded', 'true');
		dropdownOptions.scrollIntoView({behavior: "smooth", block: "start"});
	}

	function collapseDropdown() {
		dropdownButton.classList.remove('dropdown-options--expanded');
		dropdownButton.setAttribute('aria-expanded', 'false');

		// Bespoke feature to scroll up when dropdown closes
		const sectionTop = document.querySelector('.section-image');
		sectionTop.scrollIntoView({behavior: "smooth", block: "start"});
	}

	dropdownButton.addEventListener('click', clickDropdown);
	dropdownButton.addEventListener('mouseover', expandDropdown);
	dropdownSelect.addEventListener('mouseleave', collapseDropdown);
});