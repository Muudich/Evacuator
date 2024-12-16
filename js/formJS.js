const offset = 100;
const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', trackScroll);

function trackScroll(){
	const offset = window.scrollY;
	const coords = document.documentElement.clientHeight;
	if (offset > coords) {
		scrollUp.classList.add("scroll-up--active");
	} else {
		scrollUp.classList.remove("scroll-up--active");
	}
}

//click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

var inputs = document.getElementsByTagName('input');

for (var i=0; i<inputs.length; i++)  {
  if (inputs[i].type == 'checkbox')   {
    inputs[i].checked = false;
  }
};

window.onload = () => {
	const uploadFile = document.getElementById("upload-file");
	const uploadBtn = document.getElementById("upload-btn");
	const uploadText = document.getElementById("upload-text");

	uploadBtn.addEventListener("click", function () {
		uploadFile.click();
	});

	uploadFile.addEventListener("change", function() {
		if(uploadFile.value) {
			uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
		}else {
			uploadText.innerText = "Файл не выбран"
		}
	});
}