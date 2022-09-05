


const __link=[
'<script type="text/javascript" src="/dist/_ifind.js"></script>',
'<script  type="text/javascript" src="/dist/_ifind.min.js"></script>'
]

$('._d_i_c865756432').on('click',function(e){
$(this).find('img').eq(0).fadeIn(400).delay(400).fadeOut(400)
if($(this).hasClass('d_mt653372')){
navigator.clipboard.writeText(__link[0])
}else if($(this).hasClass('d_mt653373')){
navigator.clipboard.writeText(__link[1])
}





})
