
<!-- After adding this script, call setConsentBannerParams({uuid: <unique id> }) to set unique ID for a customer.  -->
(function () {
	var s = document.createElement('script');
	s.src = 'https://cdn-prod.securiti.ai/consent/cookie-consent-sdk-loader.js';
	s.setAttribute('data-tenant-uuid', 'ed91c418-0537-4d55-90cb-bcb3c584dd65');
	s.setAttribute('data-domain-uuid', '86871ec1-acdb-4b7d-8ca6-b2af25a1abf8');
	s.setAttribute('data-backend-url', 'https://app.securiti.ai');
	s.setAttribute('data-skip-css', 'false');
	s.defer = true;
	var parent_node = document.head || document.body;
	parent_node.appendChild(s);
})()




    (function () {
      if (document.cookie.indexOf('hp_ab_variant=') === -1) {
        var v = Math.random() < 0.5 ? 'A' : 'B';
        var d = new Date(); d.setTime(d.getTime() + 30 * 864e5);
        document.cookie = 'hp_ab_variant=' + v + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
      }
    })();
