import { validateImage } from '../../../utils/ImageValidation';
import { useEffect, useState } from 'react'

const useFileUploadField = ({ 
        name, 
        setError, 
         resetField, 
         ...inputProps 
    }) => {
    
    const [imageFile, setImageFile] = useState(inputProps.defaultValue);
    const [ isLoading, setIsLoading ] = useState(false);

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
  
    const handleRemoveImage = () => {
      resetField(`${name}`);
      setImageFile(null);
    };

    return {
      imageFile,
      isLoading,
      handleFileChange,
      handleRemoveImage
    }
}

export default useFileUploadField