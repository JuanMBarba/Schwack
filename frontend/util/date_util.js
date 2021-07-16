const formatHoursMinutes = (minutes, hours) => {
    let newMinutes = minutes;
    let newHours = hours;
    let ampm = "AM";
    if (minutes <= 9) {
        newMinutes= `0${minutes}`;

    }
    if (hours > 12){
        hours -= 12;
        ampm = "PM"
    }
    if (hours <= 9) {
        newHours= `0${hours}`;
    }
    return `${newHours}:${newMinutes} ${ampm}`;
};

const formatDate = date => {
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let time = formatHoursMinutes(minutes, hours);
    return `${month} ${day}, ${time}`;
};

export default formatDate;