'use strict';

(async _ => {
  // const statistics = new Statistics();
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();

    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
    // formData.append(`Foydalanuvchi ID`, statistics.userId);
    // formData.append(`Timestamp`, statistics.time?.toString());

    let response = await fetch('https://script.google.com/macros/s/AKfycbyDmQnQLuyA2aXzcBQYG4BWmPoCB-sRnU_Q3Iofh5837QpiO83r-lx-rDhieqGkBh9X/exec', {
      method: 'POST',
      body: formData
    })
    await response.json();
    // await statistics.onRegister(user);
    localStorage.removeItem('user');
  } else {
    localStorage.removeItem('user');
  }
})()

