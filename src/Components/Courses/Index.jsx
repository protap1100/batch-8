import{ useEffect, useState } from "react";
import Course from "./Course";

const Index = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    }, []);

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {courses.map(course => (
                <Course key={course.id} course={course} />
            ))}
        </div>
    );
};

export default Index;
