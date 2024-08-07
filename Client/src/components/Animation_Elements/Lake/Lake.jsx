import React from 'react'
import './Lake.css';
import { motion } from 'framer-motion'

export const Lake = () => {
    return (
        <div>
            <svg className='lake' viewBox="0 0 309 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_109_10)">
                    <ellipse cx="148.53" cy="135.712" rx="376.53" ry="135.712" fill="#4ECAE2" />
                    <g filter="url(#filter0_f_109_10)">
                        <ellipse cx="152.53" cy="138.513" rx="376.53" ry="135.712" fill="#4DBFD6" />
                    </g>
                    <g filter="url(#filter1_f_109_10)">
                        <ellipse cx="152.53" cy="157.058" rx="376.53" ry="135.712" fill="#3CADCD" />
                    </g>
                    <ellipse cx="160.47" cy="177.288" rx="376.53" ry="135.712" fill="#35AECF" />
                    <g opacity="0.5" filter="url(#filter2_f_109_10)">
                        <path d="M253.338 25.847C253.086 26.0256 169.766 45.078 148.069 47.4364C144.054 47.8723 140.03 47.8611 136.027 47.3841C135.086 47.0792 134.146 46.7696 133.207 46.4527C129.906 45.3354 126.619 44.1434 123.397 42.7334C121.461 41.8856 119.746 40.9365 117.684 41.6419C116.326 42.1076 114.925 42.6602 113.51 42.7937C112.137 42.9232 110.867 42.5773 109.535 42.2395C106.792 41.5421 104.526 42.2886 101.961 43.5257C98.9897 44.9582 96.1294 46.7237 93.1203 48.0469C90.3082 49.2831 87.7439 50.8162 85.1445 52.5986C83.5742 53.6748 81.9981 54.7663 80.3366 55.6358C78.6843 56.4973 76.9236 57.0297 75.244 57.8172C72.1228 59.2795 69.1281 61.0732 66.2635 63.1484C63.2048 65.3635 60.4171 68.0742 57.3713 70.3159C54.2106 72.642 50.9622 74.0794 47.3818 75.1926C45.5901 75.7492 43.8064 76.3484 42.0643 77.1029C41.3478 77.4117 40.6169 77.7777 39.8608 77.9298C38.7972 78.1453 38.1317 77.8574 37.2686 77.1672C36.5571 76.5986 35.6645 75.5513 34.7223 75.799C33.4984 76.12 32.148 78.0633 30.8896 77.7303C29.5098 77.3683 28.2485 76.5463 26.9714 75.857C25.9293 75.2955 24.8822 74.7606 23.8502 74.1711C24.5222 74.2628 25.1992 74.3006 25.8769 74.2708C26.0414 74.2644 26.1737 74.0922 26.1255 73.9072C25.4536 71.3663 23.9479 69.3539 22.5465 67.2779C25.1891 69.2308 27.2941 72.1288 30.4404 73.1085C30.6474 73.1737 30.7818 72.9629 30.7567 72.7546C30.1408 67.8345 27.7849 63.6181 25.4227 59.4838C27.113 61.6571 28.9679 63.6857 31.2367 65.0168C31.4157 65.1214 31.6119 64.9895 31.6241 64.7691C31.9152 59.1613 30.2658 53.6459 29.1245 48.2576C28.6114 45.8341 27.9136 43.9906 26.5682 41.9958C25.9408 41.062 25.3817 40.1257 24.8987 39.0897C24.6939 38.6481 24.382 38.1832 24.2519 37.7046C24.0198 36.8335 24.8865 36.5046 25.4313 36.2504C25.5872 36.178 25.7137 35.9206 25.5456 35.7686C22.7542 33.2703 18.767 33.7618 15.4503 32.6711C22.0025 29.7071 29.6283 33.173 36.128 29.6934C36.335 29.5824 36.2689 29.2293 36.0669 29.1666C29.5378 27.1758 22.7499 27.0592 16.0483 26.4302C11.9777 26.0497 7.95385 25.0242 3.9034 24.3944C10.6719 24.3566 17.4396 24.5118 24.2081 24.5432C28.2959 24.5617 32.373 24.914 36.4579 24.9317C39.9701 24.9462 43.5383 24.6582 46.7623 22.9747C46.9477 22.8782 46.9117 22.5838 46.7623 22.4776C43.1725 19.9045 38.361 19.7091 34.2336 19.4051C28.7803 19.0037 23.3471 18.3836 17.9025 17.8551C11.5918 17.2398 5.27534 16.6164 -1.06336 16.5609C-4.11198 16.5352 -7.15269 16.6695 -10.2006 16.7154C-12.6002 16.7532 -15.1429 16.392 -17.4154 17.457C-17.5835 17.5366 -17.682 17.7731 -17.5282 17.9388C-15.4426 20.166 -12.6398 21.366 -9.94115 22.4776C-14.2827 22.575 -18.6177 22.2862 -22.9592 22.2243C-25.2892 22.1905 -27.6256 22.2042 -29.9505 22.4029C-31.7644 22.5589 -33.7738 22.6393 -35.5073 23.3327C-38.0514 24.3494 -35.8738 26.7575 -34.6046 28.0316C-37.0309 26.4817 -39.7079 24.9928 -42.5625 25.1256C-42.7917 25.1376 -42.8945 25.428 -42.7443 25.6178C-41.7741 26.8404 -40.7112 27.9367 -39.5958 28.9607C-41.2933 28.0349 -42.9764 27.06 -44.7473 26.3409C-45.8037 25.9106 -47.1218 25.3805 -48.355 25.391C-48.8875 24.8947 -49.2965 24.1627 -48.7194 23.4549C-47.7154 22.2211 -45.6406 21.8808 -44.3189 21.5028C-42.3145 20.9293 -40.2541 20.6068 -38.2088 20.2979C-33.0056 19.5129 -27.7219 19.7566 -22.4993 19.2868C-23.9575 18.6868 -25.4523 18.1109 -26.3744 16.577C-27.88 14.069 -22.9757 14.4849 -22.1608 14.4447C-13.2542 14.0031 -4.43035 14.6209 4.47259 14.9667C13.4812 15.3166 22.4222 15.2683 31.4078 16.2448C35.7277 16.7145 40.0606 17.0998 44.3655 17.7143C47.6426 18.1816 51.4638 17.7891 54.552 19.2957C54.7949 19.4131 55.5617 20.096 55.2879 20.5086C54.2588 22.0578 51.6485 22.2725 49.8612 22.7559C52.9615 23.0576 56.0518 23.7003 59.1522 23.9343C63.3083 24.2472 67.5751 23.9166 71.7412 23.9126C73.3884 23.9102 75.0363 23.9085 76.685 23.9061C77.9642 23.7903 79.2435 23.6697 80.5213 23.5458C79.3225 23.0801 78.1058 22.6683 76.976 21.9782C75.5344 21.0966 74.064 20.7966 72.8954 19.4702C72.7934 19.3512 72.5217 18.941 72.6805 18.756C73.7183 17.5422 75.4072 17.4875 76.7741 17.2317C78.7231 16.8658 80.6226 16.5118 82.5939 16.3357C96.9969 15.0487 111.365 13.7465 125.826 14.0425C135.432 14.2412 145.073 15.2233 154.671 15.7421C159.662 16.0099 164.661 16.0719 169.639 16.6003C171.95 16.8481 174.397 17.4594 176.711 17.4666C178.041 17.469 179.324 17.5712 180.569 18.139C180.839 18.2621 181.68 19.0777 181.226 19.4292C181.036 19.5772 180.827 19.697 180.61 19.8056C200.483 19.5129 260.971 20.4716 253.338 25.847ZM147.62 44.7491C145.129 43.2835 142.707 41.6861 140.287 40.0847C138.141 38.6658 136.004 37.0161 133.631 36.1064C129.26 34.4302 124.45 34.4519 120.251 32.2126C126.446 30.4905 134.132 33.7529 139.437 28.8834C139.555 28.7757 139.518 28.5874 139.437 28.4756C138.191 26.7334 136.022 25.8752 134.188 25.2116C131.931 24.392 129.613 23.7992 127.282 23.3222C124.443 22.7423 121.641 22.2339 118.74 22.3666C115.47 22.5162 112.057 23.4927 108.775 23.1211C110.887 21.7393 113.444 21.3057 115.081 19.0914C115.195 18.9369 115.171 18.6619 114.967 18.6112C109.758 17.3017 104.325 18.8275 99.1177 19.3689C95.5732 19.7372 92.0258 20.3011 88.4597 20.3252C85.9803 20.3405 83.2493 19.4646 80.8684 20.5311C80.6866 20.6116 80.6147 20.8408 80.7541 21.0129C84.2957 25.3885 89.1353 28.7065 94.1315 31.0182C91.6032 30.1623 89.0965 29.2156 86.4252 29.1585C86.1664 29.1529 86.0773 29.5518 86.2951 29.695C91.7735 33.3001 97.7853 35.3503 103.862 37.2751C106.161 38.0014 108.237 39.1018 110.474 39.9922C111.471 40.3903 113.806 41.4038 114.614 40.038C114.913 39.5377 115.003 38.9538 115.266 38.4382C115.761 37.4681 116.441 37.9387 117.107 38.3666C118.313 39.1404 119.652 39.5844 120.963 40.0871C122.029 40.4957 123.099 40.8914 124.171 41.2823C127.694 43.1806 131.338 44.8263 135.077 46.0955C137.136 46.7953 139.105 47.4412 141.272 47.0334C143.407 46.6296 145.438 45.7569 147.557 45.2743C147.776 45.226 147.811 44.8609 147.62 44.7491Z" fill="#AFFFB0" fill-opacity="0.26" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_f_109_10" x="-225.6" y="1.20096" width="756.259" height="274.624" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="0.8" result="effect1_foregroundBlur_109_10" />
                    </filter>
                    <filter id="filter1_f_109_10" x="-230" y="15.3456" width="765.059" height="283.424" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_109_10" />
                    </filter>
                    <filter id="filter2_f_109_10" x="-51.4" y="11.6" width="307.8" height="68.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="1.2" result="effect1_foregroundBlur_109_10" />
                    </filter>
                    <clipPath id="clip0_109_10">
                        <rect width="309" height="124" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}
