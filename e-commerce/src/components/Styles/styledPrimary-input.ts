import { styled } from 'styled-components';

export const PrimaryInput = styled.input`
    width: 100%;
    padding: 10px 16px;
    background-color: var(--bg-secondary) ;
    border-radius: 8px;
    border: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--text-dark);

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 200px;
    
    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        width: 352px;
    }

    svg{
        position: absolute;
        right: 3px;
        top: 20%;
        transform: translateY(-50);

        @media(min-width: ${props => props.theme.desktopBreakpoint})  {
            right: 10px;
            top: 25%;
        }
    }

`;