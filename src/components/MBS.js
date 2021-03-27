import React from 'react';
import { CenterContainer, Button } from './globalStyles'; 
import {MBSRow, MBSColumn, MBSImgWrapper, MBSImg, MBSTextWrapper, MBSText} from './MBS.elements'; 
import {Link} from 'react-router-dom'; 

const MBS = ({start, mindimg, bodyimg, soulimg, alt}) => {
    return (
        <>
        <CenterContainer>
            <MBSRow>
                <MBSColumn>   
                    <Link to='/Mind'>
                        <MBSImgWrapper start={start}>
                            <MBSImg src={ mindimg} alt={alt} />
                        </MBSImgWrapper>
                        </Link>
                        <MBSTextWrapper> Mind </MBSTextWrapper> 
            </MBSColumn>
            <MBSColumn>   
                    <Link to='/Body'>
                        <MBSImgWrapper start={start}>
                            <MBSImg src={bodyimg} alt={alt} />
                        </MBSImgWrapper>
                        </Link>
                        <MBSTextWrapper> Body </MBSTextWrapper> 
            </MBSColumn>
            <MBSColumn>   
                    <Link to='/Soul'>
                        <MBSImgWrapper start={start}>
                            <MBSImg src={soulimg} alt={alt} />    
                        </MBSImgWrapper>
                        </Link>
                        <MBSTextWrapper> Soul </MBSTextWrapper> 
            </MBSColumn>
            </MBSRow>
            
        </CenterContainer>
        </>
    )
}

export default MBS;