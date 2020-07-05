export default function calculate(state, data) {
    
    let prev=state.prev;
    let total=state.total;
    let operation=state.operation;
    let toShow=state.toShow;
    let btn=data[0];
    let val=data[1];
    if(btn ==='num'){
        if(total===undefined){
            total=val
        }else{
            total=total+val
        }
        toShow=total;
    }
    if(btn ==='operation'){
        operation = val;
        if(prev===undefined){
            prev=total;
        }
        total=undefined;
    }
    function operate(){
        if(total===undefined){return prev}
        if(operation==='plus')  {return parseInt(prev)+parseInt(total)}
        if(operation==='minus') {return parseInt(prev)-parseInt(total)}
        if(operation==='mult')  {return parseInt(prev)*parseInt(total)}
        if(operation==='divide'){return parseInt(prev)/parseInt(total)}
    }
    if(btn ==='eq'){
        prev = operate();
        total=undefined;
        toShow=prev;
    }
    if(btn ==='reset'){
        prev=undefined;
        total=undefined;
        operation=undefined;
        toShow=0;
    }
    return{
        prev: prev,
        total: total,
        operation: operation,
        toShow: toShow,
      };
}