import { Button } from "@mui/material";
import type { ReactNode } from "react"
import ReactDOM from "react-dom";

type PortalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const PortalStyles: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#000",
  padding: "2rem",
  zIndex: 1000,
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const Portals = (props : PortalProps) => {
    if(!props.isOpen) return null

    const PoratlRoot = document.getElementById('modal-root')

    if(!PoratlRoot) return null
  return ReactDOM.createPortal(
    <div style={PortalStyles}>
      <div>{props.children}</div>
      <Button variant="outlined" onClick={props.onClose}>
        close
      </Button>
    </div>,
    PoratlRoot
  );
}

export default Portals
