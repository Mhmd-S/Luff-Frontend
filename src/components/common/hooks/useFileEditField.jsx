import { validateImage } from '../../../utils/ImageValidation';
import { useEffect, useState } from 'react'

const useFileEditField = ({ 
        name, 
        setError, 
        resetField, 
        usersPicture,
    }) => {
    
    const [imageFile, setImageFile] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(()=>{
        setImageFile(usersPicture);
    },[usersPicture])

    const handleFileChange = async (event) => {
      setIsLoading(true);
      const selectedFile = event.target.files[0];

      if (selectedFile) {

        const result = await validateImage(selectedFile, 3000000); // 3MB
        
        if (!result.valid) {
          setError(`${name}`, { type: 'manual', message: result.message });
          setIsLoading(false);
          return;
        }

        setImageFile(selectedFile);
      }
      setIsLoading(false);
    };
  
    const handleEditImage = () => {
      resetField(`${name}`);
      setImageFile(null);
    };

    return {
      imageFile,
      isLoading,
      handleEditImage,
      handleFileChange
    }
}

export default useFileEditField