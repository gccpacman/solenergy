
import {Metadata} from 'next';
import Button from '@mui/material/Button';


export const metadata: Metadata = {
    title:'Next.js'
};

export default function Page() {
    return <Button variant="contained">Hello world</Button>;
}