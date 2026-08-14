
const header=document.querySelector('.site-header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
const menu=document.querySelector('.menu-button'),nav=document.querySelector('#main-nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const dialog=document.querySelector('#lightbox'),dialogImg=dialog.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{dialogImg.src=item.dataset.src;dialog.showModal()}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const contactEmail='IDE_IRD_AZ_EMAIL_CIMED';
document.querySelector('#contact-form').addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(e.currentTarget);
 const subject=encodeURIComponent('Érdeklődés a Boróka Liget iránt');
 const body=encodeURIComponent(`Név: ${d.get('name')}
E-mail: ${d.get('email')}
Telefonszám: ${d.get('phone')}

Üzenet:
${d.get('message')}`);
 if(contactEmail.includes('IDE_IRD')) alert('Feltöltés előtt írd be az e-mail-címedet a script.js fájl contactEmail sorába.');
 else location.href=`mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
