import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function CreatePost() {
    const editorRef = useRef(null);

    const logContent = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return <>
        <Editor
                apiKey="no-api-key"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>Start creating something amazing...</p>"
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                        "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
                }}
            />
            <button onClick={logContent}>Log Content</button>
    </>;

}

export default CreatePost;