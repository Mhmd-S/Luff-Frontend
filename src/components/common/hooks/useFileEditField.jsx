import { validateImage } from '../../../utils/ImageValidation';
import { useEffect, useState } from 'react'

const useFileEditField = ({ 
        name, 
        setError, 
        resetField, 
        usersPicture,
    }) => {
    
    const [ imageFile, setImageFile ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        setImageFile(usersPicture);
    },[usersPicture])

    const handleFileChange = async (event) => {
      setLoading(true);
      const selectedFile = event.target.files[0];

      if (selectedFile) {

        const result = await validateImage(selectedFile, 3000000); // 3MB
        
        if (!result.valid) {
          setError(`${name}`, { type: 'manual', message: result.message });
          setLoading(false);
          return;
        }

        setImageFile(selectedFile);
      }
      setLoading(false);
    };
  
    const handleEditImage = () => {
      resetField(`${name}`);
      setImageFile(null);
    };

    return {
      imageFile,
      loading,
      handleEditImage,
      handleFileChange
    }
}

export default useFileEditField