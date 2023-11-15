import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {register , handleSubmit} = useForm(); 
  return (
    <>
    <h1 className='form-title'>Exam Registration Form</h1>
    <form id='regiration-form' onSubmit={handleSubmit((data) => {
      console.log(data)
      register.reset();
    })}>
          <input 
            {...register('clgRegNum')}
            id='clgRegNumber'
            placeholder='College Registration Number*'
            type='text'
            className='form-input'
            required
            />

          <input 
            {...register('firstName')}
            id='firstName'
            placeholder='First Name*'
            type='text'
            className='form-input'
            required
            />

          <input 
            {...register('secondName')}
            id='secondName'
            placeholder='Second Name*'
            type='text'
            className='form-input'
            required
          />

          <input 
            {...register('eMail')}
            id='eMail'
            placeholder='Email*'
            type='email'
            className='form-input'
            required
          />

          <input 
            id='mobileNumber'
            placeholder='Mobile Number*'
            type='phone'
            className='form-input'
            required
          />

          <input
            {...register('examDate')}
            id='examDate'
            placeholder='Exam Date*'
            type='date'
            className='form-input'
            required
            />

           <select id='gender-dropdown' {...register('gender')}>
            <option value='0'>Male</option>
            <option value='1'>Female</option>
           </select>

           <select id='course-dropdown' {...register('courseName')} required>
            <option value='cse'>Computer Science and Engineering</option>
            <option value='ece'>Electronic Communication and Engineering</option>
            <option value='eee'>Eletrical Electronics Engineering</option>
           </select>

           <select id='location-dropdown' {...register('location')} required>
            <option value='TN'>Chennai</option>
            <option value='BG'>Bangalore</option>
            <option value='KL'>Kerala</option>
           </select>

           <div className='form-buttons-section'>
            <input className='form-buttons' type='submit' value='Register' id='submit'/>
           </div>

    </form>
    <h2 className='form-footer'>Prabhu <span>&copy;</span> 2023</h2>
    </>
  );
}

export default App;
