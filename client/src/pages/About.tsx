import { useParams } from "react-router-dom";

const About = () => {
    const {id} = useParams();
    return ( 
        <div>
            <h1>About-{id}</h1>
        </div>
     );
}
 
export default About;