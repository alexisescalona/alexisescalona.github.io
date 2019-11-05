$(document).ready(function() {
	/*$(".hola").sticky({
		zIndex: 10000,
		stickyClass: ['grey lighten-2', 'rounded', 'mb-0', 'border border-dark'],
		minHeight: 576,
	});*/
	$(".jarallax").css("z-index","2");
	
	$('[data-toggle="popover-hover"]').popover({
		html: true,
		trigger: 'hover',
		placement: 'top',
		content: function () { return '<img src="' + $(this).data('img') + '" />'; }
	});
	
	$("#lightbox").load("dist/mdb-addons/mdb-lightbox-ui.html");
	
	$(".proyectos > li > a").on("click", function(){
		var nombre = $(this).text();
		$(".proyectos > li > a").each(function (){
			if($(this).hasClass("active"))
			{
				$(this).removeClass("active");
				return false;
			}
		});
	});
	
	$("#bTelefonos").on("click", function(){
		if ($("#mTelefonos").length) {
			$("#mTelefonos").remove();
		}
		$(document.body).append('<div class="modal fade right" id="mTelefonos" tabindex="-1" role="dialog" aria-labelledby="telefonosLabel" aria-hidden="true">' +
			'<div class="modal-dialog modal-full-height modal-right modal-notify" role="document">' +
				'<div class="modal-content">' +
					'<div class="modal-header amber text-center">' +
						'<h4 class="modal-title w-100" id="telefonosLabel">Teléfonos</h4>' +
					'</div>' +
					'<div class="modal-body special-color-dark">' +
						'<div class="text-center text-white">' +
							'<i class="fas fa-phone fa-4x mb-3 animated rotateIn"></i>' +
							'<h5 class="font-weight-bold animated bounceInRight">Casa:</h5><p class="animated slow flipInX">55-53-43-31-85</p>' +
							'<h5 class="font-weight-bold animated bounceInRight">Celular:</h5><p class="animated slow flipInX">55-61-64-41-89</p>' +
						'</div>' +
					'</div>' +
					'<div class="modal-footer elegant-color-dark justify-content-center">' +
						'<a type="button" class="btn-floating btn-amber" data-dismiss="modal"><i class="fas fa-arrow-right animated rotateIn"></i></a>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');
		$('#mTelefonos').modal('show')
	});
	
	$("#bCorreos").on("click", function(){
		if ($("#mCorreos").length) {
			$("#mCorreos").remove();
		}
		$(document.body).append('<div class="modal fade right" id="mCorreos" tabindex="-1" role="dialog" aria-labelledby="correosLabel" aria-hidden="true">' +
			'<div class="modal-dialog modal-full-height modal-right modal-notify" role="document">' +
				'<div class="modal-content">' +
					'<div class="modal-header amber text-center">' +
						'<h4 class="modal-title w-100" id="correosLabel">Correos</h4>' +
					'</div>' +
					'<div class="modal-body special-color-dark">' +
						'<div class="text-center text-white">' +
							'<i class="far fa-envelope fa-4x mb-3 animated rotateIn"></i>' +
							'<h5 class="font-weight-bold animated bounceInRight">Personal:</h5><p class="animated slow flipInX">alexisescalona1@hotmail.com</p>' +
						'</div>' +
					'</div>' +
					'<div class="modal-footer elegant-color-dark justify-content-center">' +
						'<a type="button" class="btn-floating btn-amber" data-dismiss="modal"><i class="fas fa-arrow-right animated rotateIn"></i></a>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');
		$('#mCorreos').modal('show')
	});
	
	$("#bLinkedIn").on("click", function(){
		if ($("#mLinkedIn").length) {
			$("#mLinkedIn").remove();
		}
		$(document.body).append('<div class="modal fade right" id="mLinkedIn" tabindex="-1" role="dialog" aria-labelledby="linkedInLabel" aria-hidden="true">' +
			'<div class="modal-dialog modal-full-height modal-right modal-notify" role="document">' +
				'<div class="modal-content">' +
					'<div class="modal-header amber text-center">' +
						'<h4 class="modal-title w-100" id="linkedInLabel">Linked In</h4>' +
					'</div>' +
					'<div class="modal-body special-color-dark">' +
						'<div class="text-center text-white">' +
							'<i class="fab fa-linkedin-in fa-4x mb-3 animated rotateIn"></i>' +
							'<div class="LI-profile-badge animated flipInX" data-version="v1" data-size="medium" data-locale="es_ES" data-type="vertical" data-theme="light" data-vanity="alexis-escalona-picazo" data-rendered="true" data-uid="103839"><a class="LI-simple-link" href="https://mx.linkedin.com/in/alexis-escalona-picazo?trk=profile-badge">Alexis Escalona Picazo</a><div><script src="https://static-exp1.licdn.com/sc/h/3qk7aqkysw7gz575y2ma1e5ky" type="text/javascript"></script><code id="__pageContext__" style="display: none;"><!--{"baseScdsUrl":"https://static-exp1.licdn.com/scds","contextPath":"/","pageInstance":"urn:li:page:profile-badge-view;7/sfAE4rSROXRtlPOfG71w==","isProd":true,"brotliBaseSparkUrlForHashes":"https://static-exp1.licdn.com/sc/h/br","linkedInDustJsUrl":"https://static-exp1.licdn.com/sc/h/3qk7aqkysw7gz575y2ma1e5ky","baseSparkUrlForHashes":"https://static-exp1.licdn.com/sc/h","isCsUser":false,"appName":"badger-frontend","fizzyJsUrl":"https://static-exp1.licdn.com/scds/common/u/lib/fizzy/fz-1.3.3-min.js","mpName":"badger-frontend","scHashesUrl":"https://static-exp1.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.124/f/%2Fbadger-frontend%2Fsc-hashes%2Fsc-hashes_es_ES.js","dustDebug":"control","baseMediaUrl":"https://media-exp1.licdn.com/media","isBrotliEnabled":false,"useCdn":true,"locale":"es_ES","version":"0.1.124","useScHashesJs":true,"cdnUrl":"https://static-exp1.licdn.com","baseMprUrl":"https://media-exp1.licdn.com/mpr/mpr","playUtilsUrl":"https://static-exp1.licdn.com/sc/h/90dvk89zq5vi9u30cifu5176p","useNativeXmsg":false,"hashesDisabledByQueryParam":false,"baseAssetsUrl":"https://static-exp1.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.124/f","csrfToken":null,"intlPolyfillUrl":"https://static-exp1.licdn.com/sc/h/914w2cvk9gejmydsaejzzg0yo","serveT8WithDust":false,"disableDynamicConcat":false,"baseSparkUrlForFiles":"https://static-exp1.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.124/f","dustUtilsUrl":"https://static-exp1.licdn.com/sc/h/5iz3kzd89y2vtstix7vutxtxp","linkedInDustI18nJsUrl":"https://static-exp1.licdn.com/sc/h/7v4a8bpgxnp3g8vhfecq6oi2s","baseMediaProxyUrl":"https://media-exp1.licdn.com/media-proxy"}--></code><script src="https://static-exp1.licdn.com/sc/p/com.linkedin.badger-frontend%3Abadger-frontend-static-content%2B0.1.124/f/%2Fbadger-frontend%2Fsc-hashes%2Fsc-hashes_es_ES.js"></script><script src="https://static-exp1.licdn.com/sc/h/5iz3kzd89y2vtstix7vutxtxp"></script><link rel="stylesheet" href="https://static-exp1.licdn.com/sc/h/de2754bchj01x8ofo3w7zo70m"><div dir="ltr" class="LI-badge-container-vertical-light LI-badge-container vertical light medium" style="display: none; width:inherit;"> <div class="LI-profile-badge-header LI-name-container"><div class="LI-col"><div class="LI-profile-pic-container" style="background-image: url(https://static-exp1.licdn.com/sc/h/856xpihrituhwdjrua9z5u5na);"><img src="https://media.licdn.com/dms/image/C5603AQH_LojJQiUNAw/profile-displayphoto-shrink_200_200/0?e=1578528000&amp;v=beta&amp;t=iQULrewrRyBTgS-HDCwRmla17TE0hOQI-wEV7kb7YC4" class="LI-profile-pic" alt="Alexis Escalona Picazo" style="position:inherit; left:0px"></div></div><div class="LI-col LI-header"><div class="LI-name"><a href="https://mx.linkedin.com/in/alexis-escalona-picazo?trk=profile-badge-name">Alexis Escalona Picazo</a></div><div class="LI-title">Estudiante en Universidad La Salle México</div></div></div><ul class="more-info"><li class="LI-field"><a href="https://www.linkedin.com/edu/universidad-la-salle-m%C3%A9xico-15234?trk=profile-badge-school">Universidad La Salle México</a></li></ul><div class="LI-profile-badge-footer"><a href="https://mx.linkedin.com/in/alexis-escalona-picazo?trk=profile-badge-cta" class="LI-view-profile">Ver perfil</a><span class="LI-logo"><img src="https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png" alt="LinkedIn" class="LI-icon"></span></div></div></div></div>' +
						'</div>' +
					'</div>' +
					'<div class="modal-footer elegant-color-dark justify-content-center">' +
						'<a type="button" class="btn-floating btn-amber" data-dismiss="modal"><i class="fas fa-arrow-right animated rotateIn"></i></a>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');
		$('#mLinkedIn').modal('show')
	});
	
	$("#bSoundcloud").on("click", function(){
		if ($("#mSoundcloud").length) {
			$("#mSoundcloud").remove();
		}
		$(document.body).append('<div class="modal fade right" id="mSoundcloud" tabindex="-1" role="dialog" aria-labelledby="soundcloudLabel" aria-hidden="true">' +
			'<div class="modal-dialog modal-full-height modal-right modal-notify" role="document">' +
				'<div class="modal-content">' +
					'<div class="modal-header amber text-center">' +
						'<h4 class="modal-title w-100" id="soundcloudLabel">Soundcloud</h4>' +
					'</div>' +
					'<div class="modal-body special-color-dark">' +
						'<div class="text-center text-white">' +
							'<i class="fab fa-soundcloud fa-4x mb-3 animated rotateIn"></i>' +
							'<iframe class="animated flipInX" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13940239&color=%23424560&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>' +
						'</div>' +
					'</div>' +
					'<div class="modal-footer elegant-color-dark justify-content-center">' +
						'<a type="button" class="btn-floating btn-amber" data-dismiss="modal"><i class="fas fa-arrow-right animated rotateIn"></i></a>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');
		$('#mSoundcloud').modal('show')
	});
	
	/*$.getJSON("https://jsonip.com?callback=?", function (response) {
		alert(response.ip);
	});*/
});