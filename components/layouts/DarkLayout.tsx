import { FC } from "react";

export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{
        alignItems: 'center',        
        background: 'linear-gradient(to right, #753a88, #cc2b5e)',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px 40px',
    }}>
        <h3>Dark-Layout</h3>
        <div style={{
            color: '#fff !important'
        }}>
            { children }   
        </div>
    </div>
  )
}
