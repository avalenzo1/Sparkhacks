import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

function CreatePost() {
    const editorRef = useRef(null);

    const logContent = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        // setLoading(true);
        e.preventDefault();

        let description = editorRef.current ? editorRef.current.getContent() : "";

        try {
            const response = fetch("http://localhost:8000/api/post/create/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "title": title,
                    "description": description
                })
            });
        } catch (error) {
            console.log(error)
        }

    };



    return <>
        <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input name="title" value={title}
                onChange={(e) => setTitle(e.target.value)} required={true} />

            <Editor
                apiKey="6eqy3uo28v89z9eh1onw6isemikm3gikbv2gbvozadq2qf7p"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>I have a problem with...</p>"
                
                init={{
                    height: 500,
                    menubar: false,
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

        <button type="submit">Submit</button>

        </form>

    </>;

}

export default CreatePost;