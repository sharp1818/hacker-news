/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from '@mui/material/Link';
import { FilterContext } from '../../context/FilterContext';
import { AddFav, CheckFav, TimeStamp } from '../../utils/helper';

interface Hit {
  id: number | null;
  created: number | any;
  title: string | any;
  url: string | any;
}

function NewComponent({ id, created, title, url }: Hit) {
  const { favs, setFavs } = useContext(FilterContext);
  return (
    <Stack
      direction="row"
      sx={{
        border: '1px solid #979797',
        borderRadius: '6px',
        ':hover': { background: 'none', outline: 'none', borderColor: '#979797' }
      }}>
      <Link href={url} target="_blank" underline="none" width="100%">
        <Button
          variant="plain"
          color="primary"
          disabled={(id === null || url === null) && true}
          sx={{
            borderRadius: '6px 0px 0px 6px',
            opacity: '0.8',
            width: '100%',
            minHeight: '5.625rem',
            display: 'flex',
            justifyContent: 'flex-start'
          }}>
          <Box display="flex" flexDirection="column">
            <Typography
              sx={{
                fontSize: '0.688rem',
                color: '#767676',
                display: 'flex',
                textAlign: 'start'
              }}
              startDecorator={<AccessTimeIcon />}>
              {TimeStamp(created)} ago by author
            </Typography>
            <Typography
              sx={{
                fontSize: '0.875rem',
                color: '#6b6b6b',
                fontWeight: 'bold',
                display: 'flex',
                textAlign: 'start'
              }}>
              {title}
            </Typography>
          </Box>
        </Button>
      </Link>
      <IconButton
        variant="soft"
        color="neutral"
        onClick={() => {
          AddFav(id, created, favs, setFavs);
        }}
        disabled={(id === null || url === null) && true}
        sx={{
          borderRadius: '0px 6px 6px 0px',
          width: '4.25rem',
          opacity: '0.8'
        }}>
        {CheckFav(id, favs) ? (
          <FavoriteIcon sx={{ color: '#DD0031' }} />
        ) : (
          <FavoriteBorder sx={{ color: '#DD0031' }} />
        )}
      </IconButton>
    </Stack>
  );
}

export default NewComponent;
