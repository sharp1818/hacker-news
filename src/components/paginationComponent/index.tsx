import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import './paginationComponent.css';
import { CurrentPage } from '../../utils/helper';

function PaginationComponent() {
  const matches = useMediaQuery('(min-width:500px)');
  const handleChange = (e: any, value: number) => {
    CurrentPage(value);
  };

  return (
    <Stack
      spacing={0}
      direction="row"
      justifyContent="center"
      sx={{ p: `${matches ? '6rem 0rem' : '6rem 1.8rem'}` }}>
      <Pagination
        size={matches ? 'medium' : 'small'}
        count={10}
        onChange={handleChange}
        boundaryCount={matches ? 2 : 0}
        variant="outlined"
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
}

export default PaginationComponent;
