/*1. Create a human readable time format using the Date time object. 
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05*/
today = new Date();
year = today.getFullYear();
month = ("0" + (today.getMonth() +1)).slice(-2);
date = ("0" + (today.getDate() +1)).slice(-2);
hourS= ('0' + (today.getHours())).slice(-2);
minutes= ('0' + (today.getMinutes())).slice(-2);

console.log(`${year}-${month}-${date} ${hourS}:${minutes}`);