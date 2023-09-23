const path = require("path")
const fs = require("fs")
const { isUtf8 } = require("buffer")

const dirPath = path.join(__dirname, "../src/content/")
let postslist = []
const getPosts = async () => {
    await fs.readdir(dirPath, (err,files) => {
        if(err) {
            return console.log("Failed to lists contents of directory: " + err);
        }
        files.forEach((file,i)=>{
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {

                if(err) {
                    return console.log("Failed to read contents of file: " + err);
                }
                else {
                    const getMetadataIndices = (acc, elem, i) => {
                        if(/^---/.test(elem)) {
                            acc.push(i);
                        }
                        return acc;
                    }
                    const parseMetadata = (lines, metadataIndices) => {
                        if(metadataIndices.length > 0) {
                            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
                            metadata.forEach(line => {
                                kv = line.split(": ");
                                obj[kv[0]] = kv[1];
                            })
                            return obj;
                        }
                    };

                    const parseContent = (lines, metadataIndices) => {
                        if(metadataIndices.length > 0) {
                            lines = lines.splice(metadataIndices[1] + 1, lines.length);
                        }
                        return lines.join("\n");
                    }; 

                    const lines = contents.split("\n");
                    const metadataIndices = lines.reduce(getMetadataIndices, []);
                    const metadata = parseMetadata(lines, metadataIndices);
                    const content = parseContent(lines, metadataIndices);
                    post = {
                        id: i+1,
                        title: metadata.title ? metadata.title : "No title given",
                        author: metadata.author ? metadata.author : "No author given",
                        date: metadata.date ? metadata.date : "No date given",
                        content: content ? content : "No content given"
                    }
                    postslist.push(post)
                    if(i == files.length - 1) {
                        const comp = (a, b) =>{
                            return new Date(a.date).getTime() - new Date(b.date).getTime();
                        }
                        postslist.sort(comp)
                        postslist.reverse()
                        data = JSON.stringify(postslist);
                        fs.writeFileSync("src/posts.json", data);
                    }
                }
            })
            
        })
    })
}

getPosts()
