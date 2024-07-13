const eng = () => {
    let num1 = prompt('Birinchi sonni kiriting')
    let num2 = prompt('Ikkinchi sonni kiriting')
  
    if (num1 === num2) {
      alert('Sonlar teng');
    } else {
      let qidir = Math.max(num1, num2);
      alert(`Eng kotta son: ${qidir}`);
    }
  }
  
    eng();