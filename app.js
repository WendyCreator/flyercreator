
document.addEventListener('DOMContentLoaded', (e)=>{
    getData()
    downloadImage()
})

function getData(){
    input = document.querySelector('[data-input]')
    business = document.querySelectorAll('.business')
    input.addEventListener('input', function(e){
        
        business.forEach(busy=>{
            if(e.target.value.length > 25) return
            if(e.target.value == ''){
                busy.innerText = 'Business Name'
            }else{

                busy.innerText = e.target.value
            }
        })
      
    })
}

function downloadImage(){
    const downlaodbtn = document.querySelectorAll('.downlaod')
    const input = document.querySelector('[data-input]')
    const downloadAll = document.querySelector('#download-all')
    imgs = document.querySelectorAll('[data-img]')

    downlaodbtn.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
           imgs.forEach(img=>{
            if(e.target.id == img.dataset.img){
                html2canvas(img, {
                    allowTaint: true,
                    useCORS: true}).then(canvas=>{
                    let  _canvas = document.createElement("canvas");
                    _canvas.setAttribute('width', 1200);
                    _canvas.setAttribute('height', 1300);
                    let ctx = _canvas.getContext('2d');
                    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 1200, 1300);
                    let dataURL = _canvas.toDataURL();  
                    // document.getElementById("canvasWrapper").appendChild(_canvas);
                    img.appendChild(_canvas);
                    // var image = _canvas.toDataURL("image/png");
                    
                    const base64Img = _canvas.toDataURL('image/png');
                    const anchor = document.createElement('a')
                    anchor.setAttribute('href', base64Img)
                    anchor.setAttribute('download', `${input.value}decent`)
                    anchor.click()
                    anchor.remove();
                    window.location.reload()
                })

            }
           })
        })
    })

    downloadAll.addEventListener('click', (e)=>{
        imgs.forEach(img=>{
                html2canvas(img).then(canvas=>{
                   
                    let  _canvas = document.createElement("canvas");
                    _canvas.setAttribute('width', 1200);
                    _canvas.setAttribute('height', 1300);
                    let ctx = _canvas.getContext('2d');
                    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 1200, 1300);
                    let dataURL = _canvas.toDataURL();  
                    // document.getElementById("canvasWrapper").appendChild(_canvas);
                    img.appendChild(_canvas);
                    // var image = _canvas.toDataURL("image/png");

                    const base64Img = _canvas.toDataURL('image/png');
                    const anchor = document.createElement('a')
                    anchor.setAttribute('href', base64Img)
                    anchor.setAttribute('download', `${input.value}decent`)
                    anchor.click()
                    anchor.remove();
                    window.location.reload()
                })

            
           })
    })
}

