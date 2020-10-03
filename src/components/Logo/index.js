import React from 'react';

export function Logo({ width = 192, height = 192 } = {}){
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 192 192">
            <path
                fill="#fff"
                d="M96 0a96.004 96.004 0 0167.882 28.118A95.99 95.99 0 01192 96a95.996 95.996 0 01-28.118 67.882 95.996 95.996 0 01-135.764 0A95.998 95.998 0 0196 0zm-9.6 48a19.2 19.2 0 00-19.2 19.2v57.6A19.198 19.198 0 0086.4 144h19.2c5.092 0 9.976-2.023 13.576-5.624A19.197 19.197 0 00124.8 124.8V86.4h-19.2v38.4H86.4V67.2h38.4V48H86.4z"
            />
        </svg>
    );
}
