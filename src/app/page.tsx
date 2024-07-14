
import {Metadata} from 'next';
// import Button from '@mui/material/Button';
import Blog from '@/components/blog/Blog'
import Container from '@mui/material/Container'

export const metadata: Metadata = {
    title:'Next.js'
};

export default function Page() {
    // return <Button variant="contained">Hello world</Button>;
    return (
        <Container maxWidth="lg">
            <Blog />
        </Container>
    )
}