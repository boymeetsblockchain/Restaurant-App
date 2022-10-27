import "./Profile.css"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useStateContext } from '../context/ContextProvider'
import {getAuth} from 'firebase/auth'
import { useState,useEffect } from "react"

const Profile = () => {
    const { sidebar } = useStateContext()
    const{user,setUser} = useState({});
    useEffect(()=>{
     setUser(auth.currentUser)
    },[])
     const auth = getAuth();

    return (
        <>
            <div className="profile-header">
                {sidebar ? (
                    <div className='sidebar'>
                        <Sidebar />
                    </div>
                ) : (
                    ""
                )}
                <Header />
                <h1> </h1>
                <Footer />
            </div>
        </>
        
    )
}

export default Profile