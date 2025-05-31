import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  id: string;
  email: string;
  isAdmin: boolean;
  exp: number;
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('Token')?.value;
  const path = request.nextUrl.pathname;

  if (!token) {
    if (path.startsWith('/profile') || path.startsWith('/logout')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (path.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  }

  try {
    const decoded = jwtDecode<TokenPayload>(token);

    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp < now) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (!decoded.isAdmin && path.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/logout', '/admin/:path*'],
};
