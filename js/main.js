var arr = ['Azizbek','Shoxruh','Nasibillo','Iskandar','Sirojidin','Ilmidin','Abdulboriy']
var elList = document.querySelector('.list')

for(var i = 0; i<arr.length; i++){
    var newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="box">
    <img width="100%" src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
    <h2>${arr[i]}</h2>
    <p>Frontend O'quvchisi</p>
    <button>send</button>
</div
    
    
    
    `
    elList.appendChild(newLi)
}