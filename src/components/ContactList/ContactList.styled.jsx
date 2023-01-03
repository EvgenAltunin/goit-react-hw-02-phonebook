import styled from 'styled-components'

export const ContactsList = styled.ul`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;

    width: 600px;

    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius: 4px;
`



export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;

    :nth-child(2n + 1) {
        background-color: #f7f7f7;
    }
    
`
export const ContactText = styled.p`
    font-weight: 700;

`

export const ContactButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    min-width: 80px;
    border: 3px solid;
    border-color: orange;
    background-color: orange;
    color: white;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer; ;

    :hover, :focus {
        background-color: white;
        color: #222222;
        
    }
`