
const textFormatting = (text) => {
    const paragraphs = [];
    let solidString = "";
    let buf = text;
    typeof buf == "string" ? solidString = buf.trim() : solidString = "";
    if (solidString.length > 0)
    {
        console.log("Well Done!");
        while (solidString.length > 0 ) {
            let position = solidString.lastIndexOf('.');
            do {
                position--;
            }
            while ((solidString.charCodeAt(position) < 47 || solidString.charCodeAt(position) > 58) || (solidString.charCodeAt(position+1) != 46));
            if (solidString.charCodeAt(position) > 47 && solidString.charCodeAt(position) < 58 && solidString.charCodeAt(position+1)==46)
            {
                while (solidString.charCodeAt(position-1) > 47 && solidString.charCodeAt(position-1) < 58) {
                    position--;
                }
            }
            let end = solidString.length;
            let p = solidString.substring(position, end+1);
            paragraphs.push(p);
            let buf = solidString.slice(0, position);
            solidString = buf.trim();
        }
    }
    paragraphs.reverse();
    return paragraphs;
};

export const getFormattedText = (text) => textFormatting(text);