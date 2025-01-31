import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </head>
            <body>
                <AppRouterCacheProvider>
                    {children}
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}