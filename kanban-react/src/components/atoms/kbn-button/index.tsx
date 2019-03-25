import * as React from 'react'

export interface KbnButtonProps {
  content: React.ReactChild
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

const KbnButton: React.FC<KbnButtonProps> = ({ content, onClick, disabled }) => (
  <button className="siimple-btn siimple-btn--primary" onClick={onClick} disabled={disabled}>{content}</button>
)

export default KbnButton
