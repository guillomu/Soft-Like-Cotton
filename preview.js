var preview = document.getElementById('preview');

function ClicDisplay(src, alt){
	preview.firstChild.src=src;
	preview.firstChild.alt=alt;

	preview.lastChild.innerHTML= alt;
	
	preview.style.display = 'block';
}

function ClicClear(){
	preview.style.display = 'none';
}