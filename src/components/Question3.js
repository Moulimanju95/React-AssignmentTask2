import { useEffect, useState } from "react";

function ConditionalEffectComponent()
{
const [isMounted, setIsMounted] =useState(false);

useEffect(() => {
    if(isMounted){
        console.log('Component mounted');
    }
},[isMounted]);

return(
    <div>
        <button onClick={() => setIsMounted (!isMounted)}>
            {isMounted ? 'Unmount' : 'Mount'}
        </button>
    </div>
);
}
export default ConditionalEffectComponent;