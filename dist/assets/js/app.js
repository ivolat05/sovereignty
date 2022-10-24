
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
tabActive('.contribution-btn', '.contribution-box', 'data-panel');
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

// проверка пороленй на совподение
function pwd() {
	let inp = document.querySelectorAll('.profile-pwd-new');
	let btn = document.querySelector('.profile-hidden-close');


	inp.forEach(item => {
		item.addEventListener('input', () => {
			let pwdOne = document.getElementById('password-new-1').value;
			let pwdTwo = document.getElementById('password-new-2').value;
			if (pwdOne === pwdTwo) {
				inp.forEach(e => {
					e.classList.remove('error')
					e.classList.add('--good')
					btn.classList.add('--active')
				})
			} else {
				inp.forEach(e => {
					e.classList.remove('--good')
					e.classList.add('error')
					btn.classList.remove('--active')
				})
			}
		})
	})
}

pwd()

// сохранение нового пароля
function newPwdSave() {
	const btn = document.querySelector('.profile-hidden-close');
	let pwd = document.getElementById('password-new-2');
	const profileHide = document.querySelector('.profile-hide');
	let pwdOld = document.getElementById('pwd-old');
	let profileBtnPwd = document.querySelector('.profile-btn-pwd');
	btn.addEventListener('click', () => {
		pwdOld.value = pwd.value;
		btn.classList.remove('--active')
		profileHide.classList.remove('--active')
		profileBtnPwd.innerHTML = 'изменить';
		profileBtnPwd.classList.remove('--active');
	})
}
newPwdSave()

// активация изменения пароля
function changePwdBlock() {
	let profileBtnPwd = document.querySelector('.profile-btn-pwd');
	const profileHide = document.querySelector('.profile-hide');
	profileBtnPwd.addEventListener('click', () => {
		if (!profileBtnPwd.classList.contains('--active')) {
			profileBtnPwd.innerHTML = 'отмена';
			profileHide.classList.add('--active');
			profileBtnPwd.classList.add('--active');
		} else {
			profileBtnPwd.innerHTML = 'изменить';
			profileHide.classList.remove('--active');
			profileBtnPwd.classList.remove('--active');
		}

	})
}
changePwdBlock()

// редактирование раздела о себе
function profilerEdited() {
	let btn = document.querySelector('.profiler-edited-btn');
	let profilerEdited = document.getElementById('profiler-edited');
	let profilerEditedClose = document.querySelector('.profiler-edited-close');
	btn.addEventListener('click', () => {

		if (btn.classList.contains('--active')) {
			btn.classList.remove('--active')
			profilerEditedClose.classList.remove('--active')
			profilerEdited.contentEditable = false
			btn.innerHTML = 'изменить'
		} else {
			btn.innerHTML = 'отмена'
			btn.classList.add('--active')
			profilerEditedClose.classList.add('--active')
			profilerEdited.contentEditable = true
		}

	})
	profilerEditedClose.addEventListener('click', () => {
		if (btn.classList.contains('--active')) {
			btn.classList.remove('--active')
			profilerEditedClose.classList.remove('--active')
			profilerEdited.contentEditable = false
			btn.innerHTML = 'изменить'
		}
	})
}
profilerEdited()