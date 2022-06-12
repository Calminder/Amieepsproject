
const materialsFormatting = (text) => {
    const paragraphs = [];
    let solidString = "";
    let buf = text;
    typeof buf == "string" ? solidString = buf.trim() : solidString = "";
    if (solidString.length > 0)
    {
        console.log("Well Done in Materials!");
        while (solidString.length > 0 ) {
            let position = solidString.length - 1;
            do {
                position--;
            }
            while ((solidString.charCodeAt(position) != 45 || solidString.charCodeAt(position+1) != 32) || (solidString.charCodeAt(position+1) != 32));
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

export const getFormattedMaterials = (text) => materialsFormatting(text);