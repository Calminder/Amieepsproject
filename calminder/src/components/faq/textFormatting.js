
const textFormatting = (text) => {
    const paragraphs = [];
    let solidString = "";
    let buf = text;
    typeof buf == "string" ? solidString = buf.trim() : solidString = "";
    if (solidString.length > 0)
    {
        while (solidString.length > 0 ) {
            let position = solidString.length-1;
            do {
                position--;
            }
            while (((solidString.charCodeAt(position) != 45 || solidString.charCodeAt(position+1) != 32) && (solidString.charCodeAt(position) != 82226 || solidString.charCodeAt(position+1) != 32)) && (position > 0));
            let end = solidString.length;
            let p = solidString.substring(position, end);
            paragraphs.push(p);
            let buf = solidString.slice(0, position);
            solidString = buf.trim();
        }
    }
    paragraphs.reverse();
    return paragraphs;
};

export const getFormattedText = (text) => textFormatting(text);