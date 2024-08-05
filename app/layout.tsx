import ProviderComponent from '@/components/layouts/provider-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/tailwind.css';
import { Metadata } from 'next';
import { IBM_Plex_Sans_Thai } from 'next/font/google';

export const metadata: Metadata = {
    title: {
        template: '%s | XCHO',
        default: 'XCHO - ระบบจัดการแบบฟอร์ม',
    },
};

const IBM_plex = IBM_Plex_Sans_Thai({
    weight: ['400', '500', '600', '700'],
    subsets: ['thai'],
    display: 'swap',
    variable: '--font-IBM_Plex_Sans_Thai',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="th">
            <body className={IBM_plex.variable}>
                <ProviderComponent>{children}</ProviderComponent>
            </body>
        </html>
    );
}
