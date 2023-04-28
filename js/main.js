// loop over students and create cards
// use placeholders and data attributes to identify icons for css
const studentsList = students.map(function(s){
	return `
		<div class="card" ${s.href==='#' ? `data-icon=${s.name.toLowerCase()}` : 'data-name' }>
			<div class="image">
			  <a href="${s.href}"><img src="img/${s.image}"></a>
			</div>
			<div class="text">
			  ${s.href==='#' ? '' : `<h2>${s.name}</h2>`}
			</div>
		</div>
	`
})

// add markup to page
const studentsEl = document.querySelector('.students');
studentsEl.innerHTML = studentsList.join('');

// // open links in new window
const links = document.querySelectorAll('a');
links.forEach(l => l.setAttribute('target','_blank'));
