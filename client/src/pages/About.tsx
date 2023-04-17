import { Button,DatePicker } from 'antd'

const About = () => {
    return ( 
        <div>
            <h1>About</h1>
            <Button type="primary">Click Me</Button>
            <DatePicker placeholder="select date" />
        </div>
     );
}

export default About;