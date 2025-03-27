
import React from 'react';
import Image from'next/image';


const Agent =() =>{

    const isSpeaking =true;

    
    return (

         <div className ="call-view">
         <div className="card-interviewr">
             <div className="avartar">
                 <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover"/>

                 {isSpeaking  && <span className="animate-speak"/>}

             </div>
             <h3>AI Interviewer </h3>


         </div>
         <div  className="card-border">
             <div className="card-content">
                 <Image src="/user-avatar.png" alt="user avatar" width={540} height={540}/>

             </div>

         </div>

         </div>

    )
}
export default Agent;


