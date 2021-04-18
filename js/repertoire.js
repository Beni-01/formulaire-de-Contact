let btnSubmit=document.querySelector("button[type='submit']"),
    btnReset=document.querySelector("button[type='reset']"),
    ListArea=document.querySelector('.contact-list'), 
    clock=document.querySelector('.clock'), 
    file=document.querySelector('#fichier'),
    image = document.querySelector('#image'),
    arrayOfDismiss=[]; // array of every close button shown on the contactlist
const app={
    showTime:()=>{
        let horloge=new Date();
        clock.innerHTML="<i class='fa fa-clock-o'></i>"+horloge.toLocaleTimeString();
    },
    resetImg:()=>{
        image.src=" ";
    },  
    checkIfFileUploadedIsImg:(inputValue)=>{
        extensionAccepted=['jpg','jpeg','png']; // Array of extension accepted
        lastSlashPosition = inputValue.lastIndexOf('\\'); // recuperation of the last slash
        fileName=inputValue.substring(lastSlashPosition+1,); // extracting name of file
        lastDotPosition =fileName.lastIndexOf('.'); // recuperation of the last dot
        extensionFile=fileName.substring(lastDotPosition+1,); // extracting extension of file
        return extensionAccepted.includes(extensionFile); // return true if extensionFile is in the extensionAccepted else false
    },
    loadImg: function(){
        if(this.files[0]){
           if(app.checkIfFileUploadedIsImg(this.value)) {
            image.src = URL.createObjectURL(this.files[0]);
           }
            else{
                alert('l\'extension n\'est pas valide, choissiseez un fichier jpg,jpeg ou png seulement')            
            }
        }
    },
    addToList:(e)=>{
            e.preventDefault();  
            alert=document.querySelector('.alert');
            dismiss=document.querySelector('.close-btn');

            let name=document.getElementById('nom').value,
                firsName=document.getElementById('prenom').value,
                bio=document.getElementById('Bio').value,
                group=document.getElementById('groupe').value,
                userValues=[name,firsName,bio,group,image.getAttribute('src')];
        
                filled= userValues.every(function(value){
                return value!="" && value!='#';
                });    
            if(filled)
            {
            let divElement=document.createElement('div'),
            divElement2=document.createElement('div'),
            divElement3=document.createElement('div'),
            h3Element=document.createElement('h3'),
            h4Element=document.createElement('h4'),
            deleteElement=document.createElement('p'), 
            paragraphElement=document.createElement('p'),
            imgElement=document.createElement('img'),
            paragraphElement2=document.createElement('p');
         
            h3Element.innerText=firsName+' '+name;
            h4Element.innerText=group;
            paragraphElement.innerText=bio;
            paragraphElement2.innerText='crée le '+new Date().toLocaleDateString(),
            imgElement.src = image.src;  
         
            divElement3.appendChild(deleteElement);
            divElement3.appendChild(h3Element);
            divElement3.appendChild(h4Element);
            divElement3.appendChild(paragraphElement);
            divElement3.appendChild(paragraphElement2),
            divElement2.appendChild(imgElement);
          
            h3Element.classList.add('text-gray-bold','mtn-1');
            h4Element.classList.add('text-gray-bold','mtn-1');
            paragraphElement.classList.add('text-gray-bold');
            paragraphElement2.classList.add('text-gray-bold');
            deleteElement.classList.add('text-red', 'text-align-right', 'w-100','m-0','fa','fa-times','fa-2x','cursor-pointer');
            divElement.classList.add('contact-list-item','d-flex','justify-content-between','align-items-center');
            imgElement.classList.add('w-90','rounded-circle','h-50','object-fit');
            divElement2.classList.add('w-60');
            divElement3.classList.add('w-90','p-2');
          
            arrayOfDismiss.push(deleteElement);
            
            divElement.appendChild(divElement2);
            divElement.appendChild(divElement3);
            ListArea.appendChild(divElement);   
                
            // Dismissing list Item
             arrayOfDismiss.forEach((value)=>{
                value.addEventListener('click', function(){
                    ListArea.removeChild(this.parentNode.parentNode);  
                   });
             });
                 
            }
            else{   
                alert.style.display="block";  
                dismiss.addEventListener('click', function(){
                alert.style.display="none";        
               })
            }
        }

}
setInterval(app.showTime,1000);
file.addEventListener('change', app.loadImg);
btnReset.addEventListener('click',app.resetImg)
btnSubmit.addEventListener('click',app.addToList); 




