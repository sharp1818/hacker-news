import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './newComponent.css';

interface Hit {
  id: number | null;
  created: number | any;
  title: string | any;
  url: string | any;
}

const AddFav = (id: any) => {
  const recover = localStorage.getItem('favs');
  if (recover === null) {
    localStorage.setItem('favs', JSON.stringify(id));
  } else {
    const data = JSON.parse(recover);
    data.push(id);
    localStorage.setItem('favs', JSON.stringify(data));
  }
};

function NewComponent({ id, created, title, url }: Hit) {
  return (
    <Stack
      direction="row"
      sx={{
        border: '1px solid #979797',
        borderRadius: '6px',
        ':hover': { background: 'none', outline: 'none', borderColor: '#979797' }
      }}>
      <Button
        className="new-container"
        variant="plain"
        color="primary"
        disabled={(id === null || url === null) && true}
        sx={{
          borderRadius: '6px 0px 0px 6px',
          opacity: '0.8',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontSize: '0.688rem',
              color: '#767676',
              display: 'flex',
              justifyContent: 'flex-start'
            }}
            startDecorator={<AccessTimeIcon />}>
            {created} ago by author
          </Typography>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: '#6b6b6b',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'flex-start'
            }}>
            {title}
          </Typography>
        </Box>
      </Button>
      <IconButton
        variant="soft"
        color="neutral"
        onClick={() => {
          AddFav(id);
        }}
        disabled={(id === null || url === null) && true}
        sx={{
          borderRadius: '0px 6px 6px 0px',
          width: '4.25rem',
          opacity: '0.8'
        }}>
        <FavoriteBorder sx={{ color: '#DD0031' }} />
      </IconButton>
    </Stack>
  );
}

export default NewComponent;
