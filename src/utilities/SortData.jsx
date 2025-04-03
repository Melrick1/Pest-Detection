function SortData(data) {
    return data.sort((a, b) => {
        const dateTimeA = new Date(a.date.split("/").reverse().join("-") + " " + (a.time || "00:00:00"));
        const dateTimeB = new Date(b.date.split("/").reverse().join("-") + " " + (b.time || "00:00:00"));

        // Sort latest first
        return dateTimeB - dateTimeA; 
    });
}

export default SortData