import { useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"


function Service(){
const navigate = useNavigate()
useEffect(()=>{
    navigate("/Service/Online_Exam")
},[])

}

export default Service