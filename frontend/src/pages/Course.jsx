import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import "../styles/courses.css"

function Course() {
    return <div>
        <div>
            <Posts />
        </div>
        <div>
            <CreatePost />
        </div> 
    </div>;
}

export default Course;