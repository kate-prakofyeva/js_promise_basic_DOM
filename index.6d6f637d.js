var e=document.querySelector(".logo"),n=document.querySelector("body"),t=new Promise(function(n){e.addEventListener("click",function(){n()})}),r=new Promise(function(e,n){setTimeout(function(){n(Error())},3e3)});t.then(function(){var e=document.createElement("DIV");e.classList.add("message"),e.innerText="Promise was resolved!",n.appendChild(e)}),r.catch(function(){n.insertAdjacentHTML("afterend",'<div class="message error-message">Promise was rejected!</div>')});//# sourceMappingURL=index.6d6f637d.js.map

//# sourceMappingURL=index.6d6f637d.js.map
