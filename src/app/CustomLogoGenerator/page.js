"use client"
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import StepOne from '@/Components/LogoGenetorSteps/StepOne';
import StepTwo from '@/Components/LogoGenetorSteps/StepTwo';
import StepThree from '@/Components/LogoGenetorSteps/StepThree';
import StepFour from '@/Components/LogoGenetorSteps/StepFour';
import StepFive from '@/Components/LogoGenetorSteps/StepFive';
import StepSix from '@/Components/LogoGenetorSteps/StepSix';
import StepSeven from '@/Components/LogoGenetorSteps/StepSeven';
import StepEight from '@/Components/LogoGenetorSteps/StepEight';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import StepNine from '../explore/page';
const validationSchema = Yup.object({
  businessName: Yup.string().required('Business name is required'),
  industry: Yup.string().required('Industry is required'),
  slogan: Yup.string().required('Slogan is required'),
  color: Yup.string().required('Color selection is required'),
  fontSize: Yup.number().required('Font size is required'),
  logoStyle: Yup.string().required('Logo style is required'),
  icon: Yup.string().required('Icon selection is required'),
  withoutIcon: Yup.string().required('Without Icon selection is required'),
});

const CustomLogoGenerator = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  const router = useRouter()
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0)

  const [data, setData] = useState({
    businessName: '',
        industry: '',
        slogan: '',
        color: '',
        fontSize: '',
        logoStyle: '',
        icon: '',
        withoutIcon: '',
  })

const makerequest = (formData)=>{
    console.log("formsubmitted", formData)
}

  const handleNextStep = (newData, final =false)=>{
    setData(prev => ({...prev, ...newData}))
    if(final){
        makerequest(newData)
        dispatch({ type: 'SET_FORM_DATA', payload: newData });
        return router.push("/explore")  
    }
    setCurrent(prevPage => prevPage + 1)
  }
  const handleNexTwotStep = (newData, final =false)=>{
    setData(prev => ({...prev, ...newData}))
    if(final){
        makerequest(newData)
        return router.push("/explore")   
    }
    setCurrent(prev => prev + 2)
  }
  const steps = [<StepOne next={handleNextStep} data={data}/>, 
  <StepTwo next={handleNextStep} data={data}/>,
  <StepThree next={handleNextStep} data={data}/>,
  <StepFour next={handleNextStep} data={data}/>,
  <StepFive next={handleNextStep} data={data}/>,
  <StepSix next={handleNextStep} data={data}/>,
  <StepSeven next={handleNextStep} nexttwo={handleNexTwotStep} data={data}/>,
  <StepEight next={handleNextStep} data={data}/>,
]
  console.log("data", data)
  return (
    <div className='container mx-auto py-20'>
        {steps[current]}
    </div>
  );
};

export default CustomLogoGenerator;

