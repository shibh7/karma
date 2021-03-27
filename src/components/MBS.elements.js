import styled from 'styled-components'; 

export const MBSRow = styled.div`
display: flex; 
margin: 0 -15px -15px -15px;
flex-wrap: wrap; 
align-items: center; 

flex-direction: ${({imgStart})=> (imgStart ? 'row-reverse' : 'row')}; 
`;

export const MBSColumn = styled.div`
margin-bottom: 10px; 
padding-right: 10px; 
padding-left: 10px; 
flex: 1; 
max-width: 50%; 
flex-basis: 33%; 

@media screen and (max-width: 768px) {
    max-width: 100%; 
    flex-basis: 100%; 
    display: flex; 
    justify-content: center; 
}
`; 

export const MBSImgWrapper = styled.div`
max-width: 250px;
color: whitesmoke;  
display: flex; 
justify-content: ${({start})=>(start ? 'flex-start' : 'flex-end')};

`; 


export const MBSImg = styled.img`
padding-right: 0; 
border: 0;
border-radius: 10px;   
max-width: 100%; 
vertical-align: middle; 
display: inline-block; 
max-height: 250px; 

`;

export const MBSTextWrapper = styled.h1`
    color: #e8c95a; 
    text-shadow: 3px 2px grey; 

    max-width: 222px; 
    margin: 10px; 
    padding: 5px; 
    text-align: center;
    @media screen and (max-width: 768px) { 
    max-width: 20%; 
    flex-basis: 20%; 
    justify-content: center; 
    padding-top: 25%; 
}

`;