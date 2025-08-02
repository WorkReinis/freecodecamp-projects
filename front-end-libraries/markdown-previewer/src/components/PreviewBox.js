import { marked } from 'marked'
import './PreviewBox.css'

function PreviewBox( {input} ) {
    // Define marked library settings
    marked.setOptions({
        gfm: true,  // Enable GitHub-flavored Markdown
        breaks: true  // Treat single line breaks as <br> tags
    });

    // Parse the input text into markdown format
    const htmlOutput = marked( input )
   
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: htmlOutput }} id='preview'/>
        </>
    )
}

export default PreviewBox;