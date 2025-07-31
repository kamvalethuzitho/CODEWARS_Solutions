// This Kata is to check whether a package was received the day before the delivery, returns a boolean.


function was_package_received_yesterday(tz_from,tz_to, start,duration)
{
    const utcSend = start - tz_from;
    const utcReceived =  utcSend + duration;
    const localReceive = utcReceived + tz_to;
    return localReceive < 0 ;
}


    console.log(was_package_received_yesterday(1,4,8,8)) // false
    console.log(was_package_received_yesterday(10, -1, 1, 2)); // true


console.log(was_package_received_yesterday(3, 0, 13, 1)); // false
console.log(was_package_received_yesterday(12, -3, 5, 8)); // true
console.log(was_package_received_yesterday(0, 0, 0, 0)); // false
console.log(was_package_received_yesterday(10, -11, 1, 2)); // true
