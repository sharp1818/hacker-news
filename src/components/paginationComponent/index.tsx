import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import './paginationComponent.css';

function PaginationComponent() {
  const matches = useMediaQuery('(min-width:500px)');

  return (
    <Stack
      spacing={0}
      direction="row"
      justifyContent="center"
      sx={{ p: `${matches ? '6rem 0rem' : '6rem 1.8rem'}` }}>
      <Pagination
        size={matches ? 'medium' : 'small'}
        count={10}
        boundaryCount={matches ? 2 : 0}
        variant="outlined"
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
}

export default PaginationComponent;
