
// активация табов
function tabActive(button, panelTab, dataAtr) {
	const btn = document.querySelectorAll(`${button}`);
	const panel = document.querySelectorAll(`${panelTab}`);
	btn.forEach(item => {
		item.addEventListener('click', () => {
			const dataArr = item.getAttribute(`${dataAtr}`);
			const id = document.getElementById(dataArr);
			btn.forEach(e => {
				e.classList.remove('--active');
			})
			panel.forEach(event => {
				event.classList.remove('--active');
			})
			item.classList.add('--active');
			id.classList.add('--active');
		})
	})
}
tabActive('.panel-btn', '.panel', 'data-panel');
tabActive('.support-btn', '.support-box', 'data-panel');

// аккордион
function accordion(btnAccordion) {
	const btn = document.querySelectorAll(`${btnAccordion}`);
	btn.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle("--active");
			const panel = item.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		})
	})
}
accordion('.support-accordion');