var preview = document.getElementById('preview');


function ClicDisplay(src, alt){
	/* Modifications des attributs des enfants de l'id preview */
	preview.firstChild.src=src;
	preview.firstChild.alt=alt;

	preview.lastChild.innerHTML= alt; //modification du paragraphe de l'id preview
	
	preview.style.display = 'block'; //On rend l'element visible en modifiant la propriété display
}

function ClicClear(){
	preview.style.display = 'none'; //On fait disparaître l'id preview 
}