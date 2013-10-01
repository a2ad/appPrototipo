// Mudar pagina (menu)
function changePage() {
	var linkMenu = $('#main-menu').find('a');
	linkMenu.click(function(event) {
		event.preventDefault();
		// Classes no menu
		linkMenu.removeClass('active');
		$(this).addClass('active');
		var page = $(this).attr('href');

		// Troca de páginas
		$('.page').removeClass('active');
		$(page).addClass('active');

	});
}

// Ultimas noticias
function showPage(list) {
	var linkNews = $('#'+list).find('a');
	linkNews.click(function(event) {
		event.preventDefault();
		var page = $(this).attr('href');
		$('.page').removeClass('active');
		$(page).addClass('active');

	});
}

// Botao voltar
function btnBack() {
	$('.back').click(function(event) {
		event.preventDefault();
		var backPage = $(this).attr('href');
		$(this).closest('.page').removeClass('active');
		$(backPage).addClass('active');

	});
}

$(document).ready(function($) {
	changePage();
	btnBack();

	showPage('list-news');
	showPage('list-programs');

});
