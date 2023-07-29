marriageeligibility = function (gender, age) {
  if (gender == "male" && age >= 21) {
    console.log(`Congratulations you are eligible to vote`);
  } else {
    if (gender == "female" && age >= 18) {
      console.log(`Congratulations you are eligible to vote`);
    } else {
      if (age < 18 && age > 0) {
        console.log(`you are not eligible to vote`);
      } else {
        if (gender != "male" || gender != "female" || isNaN(age) || age <= 0);
        {
          console.log(`Sorry you have entered invalid information`);
        }
      }
    }
  }
}
marriageeligibility("male", 17);
marriageeligibility("male", 25);
marriageeligibility("female", 28);
marriageeligibility("other", 35);
marriageeligibility("other", 41);
