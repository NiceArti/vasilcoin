import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';


const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
    return intlMiddleware(req);
}

export const config = {
    matcher: ['/', '/(ru|en)/:path*']
};
