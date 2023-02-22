export default function ArrayComponent(){
    return (
        <div>ArrayComponent</div>
    )
}
//Add another function
export   function ArrayComponentTwo(){
    return(
    <p>ArrayComponentTwo</p>
    )
}

//Cannot Redeclare export variable -ante only one 'export default' variable vudali.  
//default lekapothe [[[   import { ArrayComponentTwo } from './Components/AArrayComponent';  ]]] ila import cheyali.


//next arrow function rayii

export const ArrayArrowFunction=()=>{
    return(<p>ArrayArrowFunction</p>)
}
//rendu same mostly .


const roomates=['A','B','C'];

export function ShowRoomMates(){
    console.log(roomates);
    //return(<div>{roomates}</div>)
    return(<div className="arrayRomates">{roomates.map(x=><div>{x}</div>)}</div>)
}

