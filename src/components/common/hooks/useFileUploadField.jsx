import { validateImage } from '../../../utils/ImageValidation';
import { useEffect, useState } from 'react'

const useFileUploadField = ({ 
        name, 
        setError, 
        resetField, 
        usersPicture
    }) => {
    
    const [ imageFile, setImageFile ] = useState(usersPicture);
    const [ loading, setLoading ] = useState(true);

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
  
    const handleRemoveImage = () => {
      resetField(`${name}`, { defaultValue: '' }); // Not optimal, but it works
      setImageFile(null);
    };

    return {
      imageFile,
      loading,
      handleFileChange,
      handleRemoveImage
    }
}

export default useFileUploadField