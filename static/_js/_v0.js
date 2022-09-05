


import {_f_all,_f} from '../../dist/_find_app.js';


let _github_profile_link='https://github.com/AnasAlkouz1';
let _github_l_link='https://github.com/AnasAlkouz1/I-Find.js';
const _img=document.getElementById('_img52672');
const _a_link=document.querySelector('._a_l_t6576322');
let _key_img=true;
function _c653632(){
if(_key_img){
_img.setAttribute('src','/static/_images/github-outline-fill_ww.svg')
return _key_img=false;   
}
_img.setAttribute('src','/static/_images/github-outline-fill.svg')
return _key_img=true;
}
_a_link.addEventListener('mouseenter',_c653632)
_a_link.addEventListener('mouseleave',_c653632)




const __rendom_text=[
'1000 Hallo From Germany',
'Phone Number is 000810021996',
'Germany is Beautiful visit It',
'The area of the Earth is 510   100       000 K     m',
'465475645355643',
]

const __response_e=[
'This Text Does not contain Number',
'This Text Does not contain Characters',
'This Text Does not contain Text',
]


const __cheng_content_ex=function(){
const __n=Math.floor(Math.random() * __rendom_text.length  )
let _t=__rendom_text[__n]
let __t=_f_all._all(_t)
document.querySelector('.txt647533').innerHTML=__t[0];
const _t_nn=document.querySelector('._r644742')
const _t_tt=document.querySelector('._r644743')
const _t_sl=document.querySelector('._r644744')
const _t_gl=document.querySelector('._r644745')

const _t_RAS=document.querySelector('._r644746')
const _t_RMO=document.querySelector('._r644747')
if(__t[1]==null){
_t_nn.classList.add('_r464356_cce')
_t_nn.innerHTML=__response_e[0]
}else{
_t_nn.classList.remove('_r464356_cce')
_t_nn.innerHTML=__t[1]
}
if(__t[2]==null){
_t_tt.classList.add('_r464356_cce')
_t_tt.innerHTML=__response_e[1]
}else{
_t_tt.classList.remove('_r464356_cce')
_t_tt.innerHTML=__t[2]
}



if(__t[6]==null){
_t_sl.classList.add('_r464356_cce')
_t_sl.innerHTML=__response_e[1]
}else{
_t_sl.classList.remove('_r464356_cce')
_t_sl.innerHTML=__t[6]
}
if(__t[7]==null){
_t_gl.classList.add('_r464356_cce')
_t_gl.innerHTML=__response_e[1]
}else{
_t_gl.classList.remove('_r464356_cce')
_t_gl.innerHTML=__t[7]
}


if(__t[5]==null){
_t_RAS.classList.add('_r464356_cce')
_t_RAS.innerHTML=__response_e[2]
}else{
_t_RAS.classList.remove('_r464356_cce')
_t_RAS.innerHTML=__t[5]
}
if(__t[4]==null){
_t_RMO.classList.add('_r464356_cce')
_t_RMO.innerHTML=__response_e[2]
}else{
_t_RMO.classList.remove('_r464356_cce')
_t_RMO.innerHTML=__t[4]
}





}
__cheng_content_ex()
let _btn=document.querySelector('._div_v_5376437522_rrT');
_btn.addEventListener('click',__cheng_content_ex)




document.onscroll=function(){
if(window.scrollY >640){
document.querySelector('._exa').classList.remove('r_c_86543843')
document.querySelector('._doc').classList.add('r_c_86543843')
}else{
document.querySelector('._exa').classList.add('r_c_86543843')
document.querySelector('._doc').classList.remove('r_c_86543843')
}




}

document.querySelector('._exa').onclick=function(){
document.querySelector('#__ddd').scrollIntoView({block:'end',behavior:'smooth'})
}

document.querySelector('._doc').onclick=function(){
document.querySelector('._div_v_5376437522_rrT').scrollIntoView({block:'start',behavior:'smooth'})
} 



function new_link(){
document.querySelector('.a_f_t_5355322').setAttribute('href',_github_profile_link)
document.querySelector('.a_f_t_5355322').setAttribute('target','_blank')


document.querySelector('._a_l_t6576322').setAttribute('href',_github_l_link)
document.querySelector('._a_l_t6576322').setAttribute('target','_blank')



}new_link();
