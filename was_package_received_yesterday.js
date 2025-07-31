// This Kata is to check whether a package was received the day before the delivery, returns a boolean.


function was_package_received_yesterday(tz_from,tz_to, start,duration)
{
    const utcSend = start - tz_from;
    const utcReceived =  utcSend + duration;
    const localReceive = utcReceived + tz_to;
    return localReceive < 0 ;
}
