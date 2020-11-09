<template>
<i class="inline-block">
    <svg v-if="name == 'student-card'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none" stroke-miterlimit="10" :stroke-width="stroke" d="M32 62V42M16 60l16-18m16 18L32 42" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none" stroke-miterlimit="10" :stroke-width="stroke" d="M2 42h60M6 42V2h52v40M6 10h52" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>

    <svg v-if="name == 'add'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer1" d="M53 29H35V11a3 3 0 0 0-6 0v18H11a3 3 0 0 0 0 6h18v18a3 3 0 0 0 6 0V35h18a3 3 0 0 0 0-6z" fill="#202020"></path>
    </svg>

    <svg v-if="name == 'student'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" d="M24 41.1V44c0 2 .6 4.9-10.4 7S2 62 2 62h60s0-8.6-12.4-11C38.9 48.9 39 46 39 44v-2.7" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        <path data-name="layer2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 50.5L32 62l16-11.3m-10.4-8.4A17.2 17.2 0 0 0 44.8 32c3 0 3.7-4.3 3.7-5.3S49 22.1 46 22v-6m-28 0v6c-3 0-3 4.1-3 5s.4 5 3.4 5a15.9 15.9 0 0 0 7.2 10.3"></path>
        <path data-name="layer1" fill="none" stroke-miterlimit="10" stroke-width="2" d="M32 12L4 6l28-4 28 4-28 6z" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none" stroke-miterlimit="10" stroke-width="2" d="M18 9v7l14 2 14-2V9M6 6.4V30" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>

    <svg v-if="name == 'frame_clock'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle data-name="layer2" cx="8" cy="12" r="1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
        <circle data-name="layer2" cx="15" cy="12" r="1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
        <circle data-name="layer2" cx="22" cy="12" r="1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
        <path data-name="layer2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6h52v12H2zm52 22V18M2 18v32h30"></path>
        <circle data-name="layer1" cx="46" cy="42" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
        <path data-name="layer1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 34v10h8"></path>
    </svg>

    <svg v-if="name == 'profile'" :class="classes" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Man</title>
        <desc>A line styled icon from Orion Icon Library.</desc>
        <path stroke-width="2" stroke-miterlimit="10" fill="none" d="M41.713 48.744c-1.968-1.476-1.71-3.069-1.71-4.244v-4m-16 1v3c0 1.285.425 3.083-2.194 4.67" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path stroke-width="2" stroke-miterlimit="10" fill="none" d="M37.601 42.5a16.786 16.786 0 0 0 7.168-10.135c3.026-.037 4.234-2.931 4.234-6.937 0-1.994 0-4.928-3-4.928v-2m-29 0v2.006c-2-.006-3 2.994-3 4.988 0 4.006 1.391 7.006 4.436 7.006h.002a15.21 15.21 0 0 0 7.17 10m20.392-24v-2c0-10.4-7.373-14-14-14s-15 3.517-15 13.916V18.5c12 0 13-8 21-8 7.459 0 8 8 8 8z" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path stroke-width="2" stroke-miterlimit="10" fill="none" d="M14.003 51.5c-12.61 2-12.001 11-12.001 11h30L21.809 49.17c-1.458.885-3.856 1.703-7.806 2.33zm36 0c-4.436-.74-6.91-1.72-8.29-2.756L32.002 62.5h30s0-9-12-11z" data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>

    <svg v-if="name == 'group'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle data-name="layer2" cx="32" cy="23" r="5" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer2" d="M40.4 32H23.6a1.6 1.6 0 0 0-1.6 1.6v10.8a1.6 1.6 0 0 0 1.6 1.6H26v12.4a1.6 1.6 0 0 0 1.6 1.6h8.8a1.6 1.6 0 0 0 1.6-1.6V46h2.4a1.6 1.6 0 0 0 1.6-1.6V33.6a1.6 1.6 0 0 0-1.6-1.6z" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <circle data-name="layer1" cx="10" cy="8" r="4" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer1" d="M16.4 16H3.6A1.6 1.6 0 0 0 2 17.6v8.8A1.6 1.6 0 0 0 3.6 28H6v10.4A1.6 1.6 0 0 0 7.6 40h4.8a1.6 1.6 0 0 0 1.6-1.6V28h2.4a1.6 1.6 0 0 0 1.6-1.6v-8.8a1.6 1.6 0 0 0-1.6-1.6z" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <circle data-name="layer1" cx="54" cy="8" r="4" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer1" d="M60.4 16H47.6a1.6 1.6 0 0 0-1.6 1.6v8.8a1.6 1.6 0 0 0 1.6 1.6H50v10.4a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6V28h2.4a1.6 1.6 0 0 0 1.6-1.6v-8.8a1.6 1.6 0 0 0-1.6-1.6z" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name =='team'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" d="M30 38a36.7 36.7 0 0 0 6-1.4c3.1-1.1 3-2.7 3-3.6v-2m-.8-21A8.9 8.9 0 0 1 44 8c4 0 9 2.4 9 8.6v5.8a11.4 11.4 0 0 1-4 8.6v1.9c0 1.2-.1 3.3 5.9 4.5S62 44 62 44v4H52" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" d="M37.4 43.9c-7.5-1-7.4-3.7-7.4-5.1v-2.3c2.7-2.4 4-6.4 4-10.9v-7C34 11 28.9 8 24 8s-10 3-10 10.6v7c0 4.5 1.3 8.6 4 11V39c0 1.5.1 3.9-7.4 4.9S2 52 2 52v4h44v-4s0-6.8-8.6-8.1z" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'secure_account'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" d="M38 51H2s0-7 9.4-8.8S20 38.6 20 37v-2a14.2 14.2 0 0 1-4-7c-2.5 0-4-3-4-6 0-.8 0-4 2-4-1.6-6.4-.4-13 4-13 10.4-7 25-1.5 20 13 2 0 2 3.2 2 4 0 3-1.5 6-4 6a14.1 14.1 0 0 1-4 7v2a3.7 3.7 0 0 0 2.5 3.4c2.2 1 7.9 1.8 9.5 2.6" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none" stroke-miterlimit="10" stroke-width="2" d="M38 46h24v16H38zm6 0V36a6 6 0 0 1 6-6 6 6 0 0 1 6 6v10m-6 6v4" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'pay'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer1" fill="none" stroke-miterlimit="10" stroke-width="2" d="M52 37h10v22H52zm0 18.2c-2 0-14.9 5.8-22 5.8-4.2 0-7.9-2.2-16-6-3.8-1.8-12-6.6-12-10s10.9 1.1 20.1 4" stroke-linejoin="round" stroke-linecap="round"></path>
        <circle data-name="layer2" cx="34.1" cy="11" r="8" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <circle data-name="layer2" cx="20" cy="29" r="8" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer1" d="M36.1 53h-10a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4c12 0 8-6 22-6" fill="none" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'purchase_order'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" d="M16 48V8a6 6 0 0 1 6-6h34" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer2" d="M50 12h12V8a6 6 0 0 0-6-6 6 6 0 0 0-6 6v44a10 10 0 0 1-10 10 10 10 0 0 1-10-10v-4H2v4a10 10 0 0 0 10 10h28" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M24 12h16M24 28h16m-16-8h12M24 36h12" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'add_user' " :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" d="M35.9 41c-3.3-1-3.9-2.9-3.9-4v-2a14.1 14.1 0 0 0 4-7c2.5 0 4-3 4-6 0-.8 0-4-2-4C43 3.5 28.4-2 18 5c-4.4 0-5.6 6.6-4 13-2 0-2 3.2-2 4 0 3 1.5 6 4 6a14.2 14.2 0 0 0 4 7v2c0 1.6-.5 3.6-8.6 5.2S2 51 2 51h32.3" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <circle data-name="layer1" cx="48" cy="48" r="14" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M42 48h12m-6 6V42" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'wall_clock'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle data-name="layer2" cx="32" cy="32" r="30" fill="none"  stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"></circle>
        <path data-name="layer1" fill="none"  stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M32 7v5m0 40v5M7 32h5m40 0h5" stroke-linejoin="round"></path>
        <circle data-name="layer1" cx="32" cy="33" r="2" fill="none"  stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"></circle>
        <path data-name="layer1" fill="none"  stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M30.084 32.432L21 25m27-7L33.822 32.178" stroke-linejoin="round"></path>
    </svg>
    <svg v-if=" name== 'social'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle data-name="layer2" cx="32" cy="39" r="7" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer2" d="M32 46a12.1 12.1 0 0 0-12 12v2h24v-2a12.1 12.1 0 0 0-12-12z" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <circle data-name="layer2" cx="52" cy="10" r="6" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer2" d="M62 28c0-7.5-4.5-12-10-12s-10 4.5-10 12z" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <circle data-name="layer2" cx="12" cy="10" r="6" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer2" d="M22 28c0-7.5-4.5-12-10-12S2 20.5 2 28z" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M12 34l8 8m32-8l-8 8M24 14h16" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'presentation'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M32 62V42M16 60l16-18m16 18L32 42" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M2 42h60M6 42V2h52v40M6 10h52" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'address_book'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M51 8h8v42h-8m8-28h-8m8 14h-8" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M9 2h42v60H9zm4 10H3m10 10H3m10 10H3m10 10H3m10 10H3" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M21 12h20v14H21z" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'edit_note'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M31.4 58H2V2h44v37M12 2v8m-2 0h4m10-8v8m-2 0h4m10-8v8m-2 0h4" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M55 30L34.2 50.7 29.8 62l11.4-4.3L62 37l-7-7zM34.2 50.7l7 7" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name =='survey'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M20 14h-4v40h32V14h-4M24 24h16M24 34h16M24 44h16" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" d="M43.1 8H54a2 2 0 0 1 2 2v50a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h10.9" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" d="M39 6h-2.1a5 5 0 0 0-9.8 0H25a4.7 4.7 0 0 0-5 5v3h24v-3a4.8 4.8 0 0 0-5-5z" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name =='news_website'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M2 9h60v48H2z" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M10 17h44v8H10zm2 16h16m-16 8h16m-16 8h16m8-16h16m-16 8h16m-16 8h16" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'statistic'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M11 2v60h44V18L39 2H11z" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M39 2v16h16" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M19 26v28h26" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M19 46l10-10 6 4.9L45 30" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'property'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none"  stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M54 22.6V8h-9v7.445M40 62h14V29.769M10 30v32h14" stroke-linejoin="round"></path>
        <circle data-name="layer2" cx="32" cy="29" r="5" fill="none"  stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"></circle>
        <path data-name="layer1" fill="none"  stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24 42h16v20H24zm8-37L2.436 28.651a.5.5 0 0 0-.036.749l3.287 3.287a.5.5 0 0 0 .668.035L32 12l25.65 20.718a.5.5 0 0 0 .668-.035l3.287-3.283a.5.5 0 0 0-.041-.744z" stroke-linejoin="round"></path>
    </svg>
    <svg v-if="name == 'hand_truck'" :class="classes" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path data-name="layer2" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M33 49.3l22-7.9 6 2m-38-1L11 10.1H3" stroke-linejoin="round" stroke-linecap="round"></path>
        <circle data-name="layer2" cx="25" cy="50.1" r="8" fill="none"  stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M59 32.4L30.9 42.6l-9.5-26.5L49.5 5.9 59 32.4z" stroke-linejoin="round" stroke-linecap="round"></path>
        <path data-name="layer1" fill="none"  stroke-miterlimit="10" stroke-width="2" d="M40.2 9.5l4.5 12.9-9 3.4L31 12.6" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
    <svg v-if="name == 'bus'" :class="classes" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path stroke-width="2" stroke-linejoin="round" stroke-linecap="round"  fill="none" d="M52 44h8.5a1.5 1.5 0 0 0 1.5-1.5V28l-2-9c-.6-1.7-1.3-3-3-3H5a3 3 0 0 0-3 3v23a2.2 2.2 0 0 0 2 2h6m8 0h26M2 30h50m0-13.8V44M19 30V16m17 14V16" data-name="layer1"></path>
        <circle stroke-width="2" stroke-linejoin="round" stroke-linecap="round"  fill="none" r="4" cy="44" cx="14" data-name="layer2"></circle>
        <circle stroke-width="2" stroke-linejoin="round" stroke-linecap="round"  fill="none" r="4" cy="44" cx="48" data-name="layer2"></circle>
        <path d="M52 36h10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"  fill="none" data-name="layer1"></path>
    </svg>

</i>
</template>

<script>
export default {
    props: ['size', 'color', 'name', 'stroke'],
    computed: {
        classes() {
            return `stroke-current text-${this.$props.color} w-${this.$props.size} h-${this.$props.size}`
        }
    }
}
</script>
