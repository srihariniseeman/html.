const form = document.getElementById('applicationForm');
 const errorMessage = document.getElementById('errorMessage');
  form.addEventListener('submit', (event) => { event.preventDefault(); 
    const name = document.getElementById('name'); 
    const contact = document.getElementById('contact');
     const age = document.getElementById('age');
      const Phone = document.getElementById('zip'); 
      
      const Gender = document.getElementById('Gender');
       const Address = document.getElementById('Address'); 
       const Courses= document.getElementById('Courses'); 
       const category= document.getElementById('Category');
        if (name.value.trim() === '')
        
        { 
            errorMessage.textContent = 'Name is required.';
        errorMessage.style.display = 'block'; return;
     } 
     if (contact.value.trim() === '') 
     {
         errorMessage.textContent = 'Email or URL is required.';
         errorMessage.style.display = 'block'; return; }
          if (age.value < 18)
           {
             errorMessage.textContent = 'Age must be over 18.'; 
            errorMessage.style.display = 'block'; return;
         } 
         if (zip.value.trim() === '') 
         {
             errorMessage.textContent = 'Zip Code is required.';
              errorMessage.style.display = 'block'; return;
             } 
             if (Phone.value.trim() === '') 
             {
                 errorMessage.textContent = 'Phone Number is required.';
                  errorMessage.style.display = 'block';
                   return;
                 } 
                 if (Gender.value.trim() === '') 
                 {
                     errorMessage.textContent = 'Gender is required.';
                      errorMessage.style.display = 'block';
                       return;
                     } 
                     if (Address.value.trim() === '')
                      { 
                        errorMessage.textContent = 'Address is required.';
                         errorMessage.style.display = 'block'; return;
                         } 
                         if (Courses.value.trim() === '')
                          { 
                            errorMessage.textContent = 'Courses is required.'; 
                            errorMessage.style.display = 'block'; return;
                         } 
                         if (category.value.trim() === '')
                          { 
                            errorMessage.textContent = 'category is required.';
                             errorMessage.style.display = 'block';
                              return;
                             }
                              if (Idproof.value.trim() === '') 
                              {
                                errorMessage.textContent='Id proof is required';
                                errorMessage.style.display='block';
                                return;
                            }
                            if("PushSubscriptionOptions.value.trim()===")
                            {
                                errorMessage.textContene='photo is required.';
                                errorMessage.style.display='block';
                                return;
                            }
                            if("AbortSignal.value.trim()===")
                            {
                                errorMessage.textContant='sign is required.';
                                errorMessage.style.display='block';
                                return;
                                // if the form is filled out correctly,submit the form
                                form.submit();

                            });
    