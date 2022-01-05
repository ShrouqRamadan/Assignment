let input1=document.querySelector(".input1");
let input2=document.querySelector(".input2");
let input3=document.querySelector(".input3");
let input4=document.querySelector(".input4");
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let alert1=document.querySelector(".alert1");
let alert2=document.querySelector(".alert2");
let alert3=document.querySelector(".alert3");
let alert4=document.querySelector(".alert4");
let div=document.querySelector(".divv");
let ss=document.querySelector(".un");
let br=document.querySelector(".brix");
let unlimited=document.querySelector(".unlimited");
let lifetime=document.querySelector(".lifetime");
let unlimited1=document.querySelector(".unlimited1");
let lifetime1=document.querySelector(".lifetime1");
let st=document.querySelector(".strip");
let ar=document.querySelector(".armix");
let unlimited2=document.querySelector(".unlimited2");
let lifetime2=document.querySelector(".lifetime2");
let div1=document.querySelector(".div5");
let div2=document.querySelector(".div2");
let div3=document.querySelector(".div3");






let fun1 =()=>{
    if(input1.value.length==0 || (input2.value.length==0) ||(input3.value.length==0) ||(input4.value.length==0)){
        alert1.classList.remove('none');
    }else{
        div1.classList.remove("none");
    div2.classList.add("none");
    div3.classList.add("none");
      let sum =(n1,n2,n3,n4)=>{
    return n1 + n2 + n3 + n4 ;
    }
    var x=parseFloat(input1.value);
    var y=parseFloat(input2.value);
    var w=parseFloat(input3.value);
    var z=parseFloat(input4.value);  
   let brex=sum(x,y,w,z)* 0.3;
   let unl= sum(x,y,w,z)*1.1 ;
   let life= sum(x,y,w,z)*1.2  ;
   let strips=sum(x,y,w,z)*2.9;  
      let unl1= sum(x,y,w,z)*1.1 ;
      let life1= sum(x,y,w,z)*1.2  ;
      let armix=sum(x,y,w,z)*1.3; 
      let unl2= sum(x,y,w,z)*1.1 ;
      let life2= sum(x,y,w,z)*1.2  ;

  
   ss.innerHTML=` <p><b>unlimited rewards:${unl}</b></p>
   <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
        </div>
          <p><b>lifetime rewards :${life}</b></p>
          <div class="progress ">
            <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>` 

          br.innerHTML=`<p><b>${brex}</b></p>`
          unlimited.innerHTML=`<p><b>${unl}</b></p>`
          lifetime.innerHTML=`<p><b>${life}</b></p>`
          st.innerHTML=`<p><b>${strips}</b></p>`

             unlimited1.innerHTML=`<p><b>${unl1}</b></p>`
             lifetime1.innerHTML=`<p><b>${life1}</b></p>` 

             ar.innerHTML=`<p><b>${armix}</b></p>`

             unlimited2.innerHTML=`<p><b>${unl2}</b></p>`
             lifetime2.innerHTML=`<p><b>${life2}</b></p>` 

       
       }
       
input1.value="";
input2.value="";
input3.value="";
input4.value="";

  
}
btn1.addEventListener('click', fun1);
// ##########3
let fun2 =()=>{

    if(input1.value.length==0 || (input2.value.length==0) ||(input3.value.length==0) ||(input4.value.length==0)){
        alert1.classList.remove('none');
    }
    else{
        div1.classList.add("none");
        div2.classList.remove("none");
        div3.classList.add("none");

        let sum =(n1,n2,n3,n4)=>{
      
       return n1 + n2 +n3 + n4 ;
      }
      var x=parseFloat(input1.value);
     
      var y=parseFloat(input2.value);
      var w=parseFloat(input3.value);
      var z=parseFloat(input4.value);  
 
      let brex=sum(x,y,w,z)* 0.3;
      let unl= sum(x,y,w,z)*1.1 ;
      let life= sum(x,y,w,z)*1.2  ;
      let strips=sum(x,y,w,z)*2.9;  
         let unl1= sum(x,y,w,z)*1.1 ;
         let life1= sum(x,y,w,z)*1.2  ;
         let armix=sum(x,y,w,z)*1.3; 
         let unl2= sum(x,y,w,z)*1.1 ;
         let life2= sum(x,y,w,z)*1.2  ;
     
      ss.innerHTML=` <p><b>unlimited rewards :${unl1}</b></p>
      <div class="progress">
           <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
           </div>
           </div>
             <p><b>lifetime rewards :${life1}</b></p>
             <div class="progress ">
               <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
             </div>`
               st.innerHTML=`<p><b>${strips}</b></p>`

               br.innerHTML=`<p><b>${brex}</b></p>`
               unlimited.innerHTML=`<p><b>${unl}</b></p>`
               lifetime.innerHTML=`<p><b>${life}</b></p>`
               st.innerHTML=`<p><b>${strips}</b></p>`
     
                  unlimited1.innerHTML=`<p><b>${unl1}</b></p>`
                  lifetime1.innerHTML=`<p><b>${life1}</b></p>` 
     
                  ar.innerHTML=`<p><b>${armix}</b></p>`
     
                  unlimited2.innerHTML=`<p><b>${unl2}</b></p>`
                  lifetime2.innerHTML=`<p><b>${life2}</b></p>` 
         
         }
         input1.value="";
input2.value="";
input3.value="";
input4.value="";
  
}
btn2.addEventListener('click', fun2);
// ###########3
let fun3 =()=>{
    if(input1.value.length==0 || (input2.value.length==0) ||(input3.value.length==0) ||(input4.value.length==0)){
        alert1.classList.remove('none');
    } else{
        div1.classList.add("none");
        div2.classList.add("none");
        div3.classList.remove("none");
        let sum =(n1,n2,n3,n4)=>{
      
       return n1 + n2 +n3 + n4;
      }
      var x=parseFloat(input1.value);
      var y=parseFloat(input2.value);
      var w=parseFloat(input3.value);
      var z=parseFloat(input4.value);  
      input1.value="";
      input2.value="";
      input3.value="";
      input4.value="";
  
      
      let brex=sum(x,y,w,z)* 0.3;
      let unl= sum(x,y,w,z)*1.1 ;
      let life= sum(x,y,w,z)*1.2  ;
      let strips=sum(x,y,w,z)*2.9;  
         let unl1= sum(x,y,w,z)*1.1 ;
         let life1= sum(x,y,w,z)*1.2  ;
         let armix=sum(x,y,w,z)*1.3; 
         let unl2= sum(x,y,w,z)*1.1 ;
         let life2= sum(x,y,w,z)*1.2  ;
     
      ss.innerHTML=` <p><b>unlimited rewards :${unl2}</b></p>
      <div class="progress">
           <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
           </div>
           </div>
             <p><b>lifetime rewards :${life2}</b></p>
             <div class="progress ">
               <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
             </div>` 
             st.innerHTML=`<p><b>${strips}</b></p>`

             br.innerHTML=`<p><b>${brex}</b></p>`
             unlimited.innerHTML=`<p><b>${unl}</b></p>`
             lifetime.innerHTML=`<p><b>${life}</b></p>`
             st.innerHTML=`<p><b>${strips}</b></p>`
   
                unlimited1.innerHTML=`<p><b>${unl1}</b></p>`
                lifetime1.innerHTML=`<p><b>${life1}</b></p>` 
   
                ar.innerHTML=`<p><b>${armix}</b></p>`
   
                unlimited2.innerHTML=`<p><b>${unl2}</b></p>`
                lifetime2.innerHTML=`<p><b>${life2}</b></p>` 
         
         }

input1.value="";
input2.value="";
input3.value="";
input4.value="";
  
}
btn3.addEventListener('click', fun3);
// #==============================

let btn4=document.querySelector(".btn4");
let btn5=document.querySelector(".btn5");
let btn6=document.querySelector(".btn6");
 let btn44=()=>{
    div1.classList.remove("none");
    div2.classList.add("none");
    div3.classList.add("none");
 }
btn4.addEventListener('click',btn44);
let btn55=()=>{
    div1.classList.add("none");
    div2.classList.remove("none");
    div3.classList.add("none");

    
 }
btn5.addEventListener('click',btn55);
let btn66=()=>{
    div1.classList.add("none");
    div2.classList.add("none");
    div3.classList.remove("none");

    
 }
btn6.addEventListener('click',btn66);
let enter=()=>{
     if((input1.value.length>0) &&(input2.value.length>0) && (input3.value.length>0) && (input4.value.length>0)){
        let unl= sum(x,y,w,z)*1.1 ;
        let life= sum(x,y,w,z)*1.2  ;
    ss.innerHTML=` <p><b>unlimited rewards :${unl}</b></p>
    <div class="progress">
         <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
         </div>
         </div>
           <p><b>lifetime rewards :${life}</b></p>
           <div class="progress ">
             <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
           </div>`

 }
}



