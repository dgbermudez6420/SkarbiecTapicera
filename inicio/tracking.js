/* Same owner-supplied integrations as English edition, gated by marketing consent. */
(function(){'use strict';
const key='skarbiec-tapicera-pl-marketing';
function load(){
window.pixelId='6ae2778d74d02b59edcb79bf';
[['https://cdn.utmify.com.br/scripts/pixel/pixel.js',false],['https://cdn.utmify.com.br/scripts/utms/latest.js',true]].forEach(([url,utm])=>{if([...document.scripts].some(s=>s.src===url))return;let s=document.createElement('script');s.src=url;s.async=true;s.defer=true;if(utm)s.setAttribute('data-utmify-prevent-subids','');document.head.appendChild(s);});}
function read(){try{return localStorage.getItem(key)}catch{return null}}
function save(v){try{localStorage.setItem(key,v)}catch{}}
function init(){
const panel=document.createElement('aside');panel.className='cookie-notice';panel.setAttribute('aria-label','Ustawienia plików cookie');panel.innerHTML='<h2>Pliki cookie i marketing</h2><p>Za Twoją zgodą używamy plików cookie i podobnych technologii do pomiaru reklam oraz marketingu. Możesz odmówić lub później zmienić wybór.</p><div class="cookie-actions"><button type="button" data-consent="no">Tylko niezbędne</button><button type="button" data-consent="yes">Akceptuję marketing</button></div>';document.body.appendChild(panel);let current=read();panel.hidden=current!==null;if(current==='yes')load();panel.querySelectorAll('[data-consent]').forEach(b=>b.onclick=()=>{save(b.dataset.consent);panel.hidden=true;if(b.dataset.consent==='yes')load();else if(current==='yes')location.reload();current=b.dataset.consent;});
const manage=document.createElement('button');manage.className='cookie-manage';manage.textContent='Ustawienia plików cookie';manage.onclick=()=>panel.hidden=false;document.querySelector('footer').appendChild(manage);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();})();
