
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

// закрытие окна уведомлений
function closeNotif(button, box, data) {
	const btn = document.querySelectorAll(`${button}`);
	const panel = document.querySelector(`${box}`);
	btn.forEach(item => {
		item.addEventListener('click', () => {
			const dataArr = item.getAttribute(`${data}`);
			const id = document.getElementById(dataArr);
			btn.forEach(e => {
				e.classList.toggle('--active');
			})

			panel.classList.toggle('--active');

		})
	})
}

closeNotif('.close-notif', '.notif', 'data-notif')
closeNotif('.id-open', '.panel-id', ' data-id')

// cкрытие боковой панели
function panelLeft() {
	const btn = document.querySelector('.header-btn');
	const panelBtnSpan = document.querySelectorAll('.panel-btn');
	btn.addEventListener('click', () => {
		panelBtnSpan.forEach(item => {
			item.classList.toggle('--deactive');
		})
	})
}

panelLeft()