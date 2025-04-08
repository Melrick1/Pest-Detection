async function JsonConfig(aiResponse) {
    // Extract "Nama Ilmiah"
    const namaIlmiahMatch = aiResponse.match(/##\s*Nama Ilmiah\s*:\s*\*?([^\n*]+)\*?/);
    const namaIlmiah = namaIlmiahMatch ? namaIlmiahMatch[1].trim() : null;

    // Extract "Nama Umum"
    const namaUmumMatch = aiResponse.match(/###\s*Nama Umum\s*:\s*([^\n]+)/);
    const namaUmum = namaUmumMatch ? namaUmumMatch[1].trim() : null;

    // Extract "Jenis"
    const jenisMatch = aiResponse.match(/\*\*- Jenis\s*:\*\*\s*([^\n]+)/);
    const jenis = jenisMatch ? jenisMatch[1].trim() : null;

    const dateAndTime = getDateTimeUTC8()

    // Store extracted data in JSON format
    return {
        nama_ilmiah: namaIlmiah,
        nama_umum: namaUmum,
        jenis: jenis,
        date: dateAndTime.date,
        time: dateAndTime.time,
        fullText : aiResponse,
    };
}

function getDateTimeUTC8() {
    const now = new Date();

    const optionsDate = {
        timeZone: "Asia/Singapore",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    const optionsTime = {
        timeZone: "Asia/Singapore",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };

    const formattedDate = new Intl.DateTimeFormat("en-GB", optionsDate).format(now);
    const formattedTime = new Intl.DateTimeFormat("en-GB", optionsTime).format(now);

    return { date: formattedDate, time: formattedTime };
}

export default JsonConfig;