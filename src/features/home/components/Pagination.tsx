import PaginationMUI from '@mui/material/Pagination';

interface Props {
    page: number,
    onChange: (e: React.ChangeEvent<unknown>, value: number) => void
}

export const Pagination = ({ onChange, page }: Props) => (
    <PaginationMUI onChange={onChange} page={page} count={10} variant="outlined" shape="rounded" />
)