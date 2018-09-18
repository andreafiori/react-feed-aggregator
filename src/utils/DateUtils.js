
export const formatDate = (dt) => {
	let currentDate = new Date(dt);
	let dd = currentDate.getDate();
	
	let mm = currentDate.getMonth() + 1;
	let yyyy = currentDate.getFullYear();

	let monthName = currentDate.toLocaleString('en-us', { month: 'long' });

	if (dd < 10) {
		dd = "0" + dd;
	}
	
	if (mm < 10) {
		mm = "0" + mm;
	}

	return dd + ' ' + monthName + ' ' + yyyy;
}
