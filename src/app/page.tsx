import Link from 'next/link';
import React from 'react';

export default function main() {
    return (
        <div>
            <div className='w-full mt-20'>

                <Link href="/about">About</Link>
            </div>
            <div className='w-full mt-20'>

                <Link href="/tomo">Tomo</Link>
            </div>

        </div>
    );
}
