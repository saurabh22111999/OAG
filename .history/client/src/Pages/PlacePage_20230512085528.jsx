import { useParams } from "react-router-dom"

export default function PlacesPage(){
    const {id}= useParams;
    return(
        <div>
        Placepage:{id}
        </div>
    )
}