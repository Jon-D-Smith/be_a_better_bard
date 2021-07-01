import styled from "styled-components";
const Description = ({name, description, components, time, range, duration, damage }) => {
    
    return ( 
        <div>
            <Topbar>
                <p>casting time: {time}</p>
                {/* <p>range: {range}</p> */}
                <p>components: {components}</p>
                <p>duration: {duration}</p>
                <p>damage: {damage}</p>
                </Topbar>
        
        
        <p>{description}</p>
        </div>
     );
}
 
const Topbar = styled.div`
display: flex;
justify-content: space-between;

`;

export default Description;