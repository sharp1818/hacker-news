import Button from '@mui/joy/Button';

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
      sx={{ borderRadius: '2px', width: '6.125rem', height: '1.938rem' }}>
      {text}
    </Button>
  );
}

export default ButtonComponent;
