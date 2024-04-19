import React, { useState } from 'react';

const Forms = () => {
  const initialFormData=
  {
    fullName: '',
    email: '',
    password: '',
    gender: '',
    languages: [],
    agree: false,
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    password:'Password must be at least 8 characters',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === 'select-multiple') {
      const options = e.target.options;
      const selectedLanguages = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedLanguages.push(options[i].value);
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        languages: selectedLanguages,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors={};
    for(const field in formData)
    {
      if(field==='fullName' || field=='password')
      if(!formData[field])
      formErrors[field]='This Field is required';
    }
    const errors = {};
    if (!formData.fullName.trim()) {
        errors.fullName = '*Full Name is required';
      } else if (!/^[A-Za-z]+$/.test(formData.fullName.trim())) {
        errors.fullName = 'Full Name should only contain letters';
      }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (formData.languages.length === 0) {
      errors.languages = 'At least one language must be selected';
    }
    if (!formData.agree) {
      errors.agree = 'You must agree to the terms';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log('Form submitted:', formData);
      setFormData(initialFormData)
    }
  };

  return (
    
    <div style={{ backgroundColor: '#708090', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '5px solid white' }}>
    <form onSubmit={handleSubmit} style={{ maxWidth: '350px', margin: '0 auto', padding: '20px', borderRadius: '8px', backgroundColor: '#ffffff' }}>
      <p style={{fontSize:30,textAlign:'center',textAnchor:'blur',color:'#708090'}}>Create Account</p>
      <div style={{ marginBottom: '10px' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style={{color:'#708090'}}>
          Full Name 
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        style={{
          width: '80%',
          padding: '8px 2px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          WebkitBoxShadow: '0 0 0 30px white inset' /* Override blue background with white */
        }}
      />
          {errors.fullName && <span style={{ color: 'black' }}>{errors.fullName}</span>}
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style={{color:'#708092'}}>Email
      <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '80%', padding: '8px 2px', border: '1px solid #ccc', borderRadius: '4px',marginLeft: '32px',WebkitBoxShadow: '0 0 0 30px white inset' }}
          />
          {errors.email && <span style={{ color: 'black' }}>{errors.email}</span>}
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'#708090'}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '80%', padding: '8px 2px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '32px' }}
          />
         &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{errors.password && <span style={{ color: 'black' }}>{errors.password}</span>}
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#708090'}}>Gender</span>
        <br></br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style={{color:'#708090'}}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
           
          />
          Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <label style={{color:'#708090'}}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <label style={{color:'#708090'}}>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === 'other'}
            onChange={handleChange}
          />
          Other
        </label>
        {errors.gender && <span style={{ color: 'black' }}>{errors.gender}</span>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'#708090'}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Languages Known
          <select
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            style={{ width: '80%', padding: '8px 2px', border: '1px solid #ccc', borderRadius: '4px',marginLeft:'32px' }}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
          {errors.languages && <span style={{ color: 'black' }}>{errors.languages}</span>}
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{color:'#708090'}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to the terms
          {errors.agree && <span style={{ color: 'black' }}>{errors.agree}</span>}
        </label>
      </div>
      <div>
       <center><button type="submit" style={{ padding: '9px 120px', backgroundColor: 'black', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer',textAlign:'center' }}>Create</button></center> 
      </div>
    </form>
</div>
  );
};

export default Forms;
