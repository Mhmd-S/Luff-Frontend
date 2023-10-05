import useStep3 from "./hooks/useStep3";

const Step3 = () => {

    // Load the logic
    useStep3();

    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <img src='./1F386.svg' className='w-3/5 md:w-1/6'/>
        <h2 className='pb-4 text-3xl text-center text-sky-500'>
          Onboarding Complete!
        </h2>
      </div>
    )
}

export default Step3;