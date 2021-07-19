import styled from "styled-components";
const Description = ({name, description, components, time, range, duration, damage }) => {
    
    return ( 
        <div>
            <Topbar>
                <p><span className="descriptor">Casting Time:</span> {time}</p>
                {/* <p>range: {range}</p> */}
                <p><span className="descriptor">Components:</span> {components}</p>
                <p><span className="descriptor">Duration:</span> {duration}</p>
                <p><span className="descriptor">Damage:</span> {damage}</p>
                </Topbar>
        
        
        <p>{description}</p>
        </div>
     );
}
 
const Topbar = styled.div`
display: flex;
justify-content: space-between;

.descriptor{
font-weight: 800;
font-size:1.05em;
}
`;

export default Description;