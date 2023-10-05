import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const useStep3 = () => {

    const navigate = useNavigate();

    // // Go to dashboard after 3 secs of loading
    // useEffect(()=> {
    //     const timeout = setTimeout(() => {
    //         navigate('/dashboard');
    //     }, 3000);
    //     return () => clearTimeout(timeout);
    // },[])
}

export default useStep3