import Button from '@mui/joy/Button';
import './buttonComponent.css';

interface Location {
  currentpath: string;
  pathname: string;
  text: string;
}

function ButtonComponent({ currentpath, pathname, text }: Location) {
  return (
    <Button
      variant="outlined"
      color={currentpath === pathname ? 'primary' : 'neutral'}
      sx={{
        borderRadius: '2px',
        minWidth: '6.125rem',
        maxHeight: '1.938rem',
        minHeight: '1.938rem'
      }}>
      <span className="text-container">{text}</span>
    </Button>
  );
}

export default ButtonComponent;
