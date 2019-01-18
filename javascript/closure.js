const outerAlert=(()=>{
    //------------Inner functions declarations----------
//  TODO: Great comments! you can also describe what they are supposed to do
    const increment=(value)=>++value  
    const getMyElement=(id)=>document.getElementById(id)   
    const assign=(globColor)=> //TODO: Very good job wrapping that logic in a seperate function!
    {
        globalColor=globColor
        header.style.color=globColor
    }
    //-------------------END----------------------------
    
    //----Variables Declaration---------------------
    // TODO: Very good encapsulation!!
    let index=0;
    let total=0;
    let globalColor;
    const header=getMyElement("colorHeader")
    //------------END-------------------------------

    //-------------RETURN Inner Function-----------------------
    return (e)=>{  //TODO: Great use of arrow functions and template strings!
       
        let eventColor=e.target.value
        
        assign(eventColor)
        total=increment(total)
        setTimeout(()=>
        {
            index=increment(index)//TODO: Nice!!
            getMyElement("Alerts").innerHTML+=`<div style="font-size: 15px;text-align:center;font-weight:bold;margin-left:25%" id="al" class="alert text-focus-in shadow p-1 mb-2 rounded"  role="alert">
            Total times:${total}
            Event index:${index}
            Current color:${globalColor}
            Event color:${eventColor}
            <i class="fas fa-paint-brush" style="color:${eventColor}"></i>
            </div>`   
        },5000)
    }})()
   
document.getElementById("myPicker").onchange=outerAlert //TODO: Nice!