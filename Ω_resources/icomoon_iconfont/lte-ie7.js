/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-close' : '&#xe000;',
			'icon-list' : '&#xe001;',
			'icon-newspaper' : '&#xe002;',
			'icon-pencil' : '&#xe003;',
			'icon-pen' : '&#xe004;',
			'icon-paint-format' : '&#xe005;',
			'icon-play' : '&#xe006;',
			'icon-file' : '&#xe007;',
			'icon-file-2' : '&#xe008;',
			'icon-tag' : '&#xe009;',
			'icon-cart' : '&#xe00a;',
			'icon-pushpin' : '&#xe00b;',
			'icon-location' : '&#xe00c;',
			'icon-clock' : '&#xe00d;',
			'icon-drawer' : '&#xe00e;',
			'icon-bubbles' : '&#xe00f;',
			'icon-expand' : '&#xe014;',
			'icon-contract' : '&#xe015;',
			'icon-cog' : '&#xe016;',
			'icon-bookmark' : '&#xe017;',
			'icon-star' : '&#xe018;',
			'icon-star-2' : '&#xe019;',
			'icon-star-3' : '&#xe01a;',
			'icon-heart' : '&#xe01b;',
			'icon-heart-2' : '&#xe01c;',
			'icon-point-right' : '&#xe01d;',
			'icon-info' : '&#xe01e;',
			'icon-info-2' : '&#xe01f;',
			'icon-cancel-circle' : '&#xe020;',
			'icon-checkmark' : '&#xe021;',
			'icon-checkmark-2' : '&#xe022;',
			'icon-arrow-up-left' : '&#xe035;',
			'icon-arrow-up' : '&#xe036;',
			'icon-arrow-up-right' : '&#xe037;',
			'icon-arrow-right' : '&#xe038;',
			'icon-arrow-down-right' : '&#xe039;',
			'icon-arrow-down' : '&#xe03a;',
			'icon-arrow-left' : '&#xe03b;',
			'icon-arrow-down-left' : '&#xe03c;',
			'icon-checkbox-checked' : '&#xe03d;',
			'icon-checkbox-unchecked' : '&#xe03e;',
			'icon-checkbox-partial' : '&#xe03f;',
			'icon-radio-checked' : '&#xe040;',
			'icon-radio-unchecked' : '&#xe041;',
			'icon-code' : '&#xe043;',
			'icon-mail' : '&#xe042;',
			'icon-google-plus' : '&#xe044;',
			'icon-twitter' : '&#xe048;',
			'icon-youtube' : '&#xe04c;',
			'icon-youtube-2' : '&#xe04d;',
			'icon-vimeo' : '&#xe04e;',
			'icon-picassa' : '&#xe052;',
			'icon-dribbble' : '&#xe054;',
			'icon-dribbble-2' : '&#xe056;',
			'icon-forrst' : '&#xe057;',
			'icon-apple' : '&#xe05e;',
			'icon-windows8' : '&#xe060;',
			'icon-pinterest' : '&#xe05f;',
			'icon-pinterest-2' : '&#xe061;',
			'icon-xing' : '&#xe062;',
			'icon-xing-2' : '&#xe063;',
			'icon-file-pdf' : '&#xe067;',
			'icon-file-word' : '&#xe068;',
			'icon-chrome' : '&#xe06e;',
			'icon-zoom-out' : '&#xe012;',
			'icon-zoom-in' : '&#xe011;',
			'icon-search' : '&#xe013;',
			'icon-file-css' : '&#xe06a;',
			'icon-file-xml' : '&#xe069;',
			'icon-forrst-2' : '&#xe058;',
			'icon-deviantart' : '&#xe059;',
			'icon-flickr' : '&#xe050;',
			'icon-flickr-2' : '&#xe051;',
			'icon-facebook' : '&#xe045;',
			'icon-droplet' : '&#xe010;',
			'icon-image' : '&#xe023;',
			'icon-plus' : '&#xe024;',
			'icon-cancel' : '&#xe025;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};