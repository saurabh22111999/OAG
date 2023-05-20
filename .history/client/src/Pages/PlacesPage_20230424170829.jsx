import { Link, useParams } from "react-router-dom";

export default function PlacesPage(){
    const{action}=useParams();

    return(
        <div>
        {action!=='new'&&(

        )}
            
            </div>
        </div>
    )
}