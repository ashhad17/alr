import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { 
  SunIcon, 
  MoonIcon, 
  Bars3Icon as MenuIcon, 
  XMarkIcon as XIcon 
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const packages = [
  { name: 'Packages', href: '/packages' },
]

const galleries = [
  { name: 'Accommodations', href: '/gallery/accommodations' },
  { name: 'Hajj Gallery', href: '/gallery/hajj' },
  { name: 'Umrah Gallery', href: '/gallery/umrah' },
  { name: 'Zyarath Gallery', href: '/gallery/zyarath' },
]

function Navbar({ darkMode, setDarkMode }) {
  return (
    
      <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-20 mt-3">

      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-between">
                <Link to="/" className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-primary-600">
                    <span className="svg">
<svg version="1.1" viewBox="0 0 1600 585" width="120" height="100" xmlns="http://www.w3.org/2000/svg">
<path transform="translate(0)" d="m0 0h1600v585h-1600z" fill="#FAFCFC"/>
<path transform="translate(285,473)" d="m0 0h1244v109l-105 1h-412l-726-1v-78z" fill="#91BE36"/>
<path transform="translate(1036,473)" d="m0 0h493v109l-105 1-390-1v-108z" fill="#882375"/>
<path transform="translate(1359,151)" d="m0 0h2l3 3h3l8 10v9l-7 27-3 12-3 18v32l3 12 6 9 10 5 7 2h15l15-4 12-5 3-1-1-8-5-13-1-9v-10l2-12 1-1h5l2 2 6 16 7 16 7 12 6 7 16 8 4 1h21l18-5 9-4h4v13l-4 8-5 6v2h-57l-4-4-9-6-4-4-10-1-9 6h-2v2l-4 1v2l-5 4h-42l-7-3-5-5-8-6-5-4-9-1-8 4-7 5-19 9-1 1h-61l-13-1-14-5-8-4-8-1-12 4-5 4h-2l-1 3h-46l-8-2v-2l-4-1-9-10-6-8-10-8-10-1-10 11-3 6-3 5-11 9-1 1 493 1v4l-2 1h-1496l-7-1v-4l750-1-3-2v-2l-5-2-9-9-7-9-5-5-6-4h-8l-3 1-1 3-5 4-4 7-8 13-4 5h-107l-5-6-5-3-5-5-6-5h-7l-5 2-1 2h-2l-2 4-6 8h-2l1 3h-52l-4-6-5-5-6-7-4-10-3-20-3-7-2-1-6 2-7 4-16 2-14 3-12 3-14 3-25 3-9 5-14 21-6 5h-3l-1 4-4 1h-171l-6-2v-2l-4-2-6-6v-2l-4-2-4-6v-2l-4-2-6-5-5-2h-5l-5 5h-2v3h-2l-2 5-6 9h-2l-2 5-3 3-1 3h-45l-6-1-5-5-4-6-3-7-1-7v-8l2-4h3l5 9 7 6 12 4h11l18-5 11-6 2-2v-7l-1-3v-7l2-11 5-1h32l2 2 5 16 7 11 8 7 11 5 6 1h11l18-4 14-6 1-5-2-6-4-1-7-8-5-12-2-10-1-17v-38l1-20 3-1 2 9 1 58 2 11 3 5 2 1v2h5l2-6 2 2v17l4 12 6 9 10 5 6 2h22l9-3 17 2 3 1h24l12-5 5-4 6-9 4-10v-18l-3-6v-5l3 1v2h2l7 8 10 4h8l21-4 21-6 14-3h20l5-5 5-9 4-3h7l1-1h6l1 3-4 32 1 14 4 11 7 8 12 5 13 1 13-2 16-6 6-5-1-6-4-8-2-8v-20l1-1h13l4 6 8 19 7 13 7 8 10 6 9 3 7 1h11l14-3 7-3 5 1 8 4 3 1h13l16-4 14-7 2-2-1-10v-9l2-9 4-1h32l2 1 7 19 7 11 8 6 10 4 4 1h11l12-2 13-4 5-1 8 4 8 2h7l13-3 12-7 4-3 5 1 12 5 15 5 11 2h28l13-4 9-6 5-4h4l6 10 10 4 13 1 15-3 17-7 1-1 1-27 1-3h38l6 17 6 10 7 7 10 5 10 2h9l15-3 11-4 8-5 1-3-12-11-6-10-3-12-2-15v-30l2-32h2l3 25 3 7 2 3 4 2v15l4 23 5 13 7 11 8 8 11 7 13 6 16 4h31l16-3 13-5 16-9 12-11 8-14 4-12h3l2-11 4-21h-7l-10 4-7 5-6 2h-14l-16-1-12-3-5-1-10 2-5 4-4 8-1 7-2 6-4 1-3-10v-17l4-13 6-11 8-10 5-1 7 6 11 5 13 3h13l12-3 10-6 7-8 3-8z" fill="#B2D7ED"/>
<path transform="translate(285,473)" d="m0 0h336l1 5-1 104h-335v-78z" fill="#CE2923"/>
<path transform="translate(566,130)" d="m0 0h25l3 2 6 1v2l9-1 1-1 8-1 1-1 25-1 9 2 9 4 8 6 6 7 5 10 2 6v17l-5 13-7 10-7 7-10 7 1 6 8 16 10 16 8 9 4 3-1-9 4-16 7-16 14-26 15-25 5-9-1-9-3-12v-3l15-8 18-6h25l6 3 4 1 9-3 2-1h18l8 4 4 6 2 12v82l4 18 4 9 5 8 7 6-1 2-12 5-16 3-10-1-9-4-8-6-7-11-3-8-2-9-2-3h-46l-3 10-2 10 1 7 1 4-8 5-13 4-12 2-10-3-6-5v-2l-15 7-10 2h-14l-10-2-3-2-4-2-8-7-7-11-8-19-4-11-16-1-9-2-1 11-2 7 1 10 3 12 2 5-1 5-8 4-11 3-12 1-13-4-5-3-5-9-2-6v-17l3-20 1-3 1-11 2-4 2-13 5-25 1-3-10-17-2-6 14-7 11-4z" fill="#055092"/>
<path transform="translate(179,473)" d="m0 0h106l1 5 1 26v66l-1 12h-202v-62l1-46z" fill="#0E8ED0"/>
<path transform="translate(1091,130)" d="m0 0h25l6 3 5 1 1-1 7-1 2-2h17l7 3 5 6 3 8v46l-1 12v10l2 27 5 16 6 10 7 6 2 2-8 4-16 4-11 1-13-4-9-7-6-10-4-10-3-11h-45l-3 1-3 12v16l1 3-16 7-12 3-10-1-7-3-5-5-3-9v-8l4-15 8-18 12-22 15-25 6-12-1-8-3-11-2-3 15-8 10-4z" fill="#055193"/>
<path transform="translate(155,130)" d="m0 0h27l6 4 10-2 5-2h17l6 3 4 5 2 4 2 11v17l-1 8v54l2 8 1 8 3 9 5 9 10 10h-4l-1 3-8 3-11 2h-15l-10-4-8-7-6-9-4-10-1-11h-49l-3 9-1 23-4 3-10 4-13 3-10-1-8-4-4-5-2-6v-11l2-10 7-17 12-23 10-17 14-24-1-5-3-11-1-5 4-4 19-9 8-2z" fill="#055092"/>
<path transform="translate(736,13)" d="m0 0h16l11 2 13 1 17 5 13 7 4 1v3h-20l-8-1-22-1v2h16l20 2h19l5-1 3 5-1 5-4 4h-32l-9 2-1 5v7l-5 4-7 2-42 1-21 2-11 3-8 4-7 7h-2v2l-14 6-31 9-14 5-25 10-16 5h-4v-2l-3-1-4-4-5-1-1 1h-5l5-5h2l1-3-7 2 1-3 7-3 11-7-16 8-8 5v7l-5 2v2l-9 4-13 6-4 1-5-1h-7l-11 2h-9l-3-2-1-7 1-4 13-10 14-8 5-4 10-5h-2l-24 13-13 8-5 3-5 2-4 2 6-7 11-10 9-7 14-10 15-9 16-9 28-13 23-9 38-13 17-4 14-4 32-6 13-2 23-2z" fill="#B1D6EC"/>
<path transform="translate(1405,130)" d="m0 0h21l6 3 4 5 2 7-1 10-2 12-1 2-1 9-2 6-3 15 19-14 11-9 10-12 4-9 1-7v-7l-2-1 8-5 15-5h18l8 3 5 4 3 9v7l-3 10-8 10-9 8-19 12-7 4 1 5 6 15 12 25 8 12 8 10 8 7 3 3-12 6-16 4h-13l-11-3-7-4-6-5-7-10-8-18-10-24-1-2-6 2-7 3-3 10v29l4 11-1 4-11 5-15 3-9-1-11-4-6-7-3-7-1-13 1-19 2-3 1-12 2-9 3-17 4-18 1-9-11-20v-2l16-8z" fill="#055092"/>
<path transform="translate(989,130)" d="m0 0h12l10 4 5 6 3 7v7l-5 10-9 6-8 6-19 19-9 11-16 16-9 11-4 4-1 3h18l12 2h12l25-10h3l1 7v16l-2 9-5 8-8 7-11 4-5 1h-15l-17-2-6-2-4-1-14-5-11-5-7 4-5 4-10 5-13 1-11-2-6-4-5-8-1-3v-8l4-10 5-5 5-4 3-2 7-2 4-1h5l10-9 11-14 7-7 9-11 9-10h2v-2h-20l-5-2h-6l-10-5-9-5-7-8-3-9 1-17 2-4 13 3v2l6-1 13 3 9 1 1 1 17 1 4 2h29l3-5 7-5z" fill="#055092"/>
<path transform="translate(1291,130)" d="m0 0h29l5 2 8 2 8 4 8 8 2 7-1 14-5 8-10 6-6 2h-21l-11-4-9-6-6-5-6 1-7 6-8 10-7 15-2 7v26l4 9 6 7 7 3h9l10-5 7-7 4-9 2-10 4-2 25 2 10 4 5 6v14l-5 10-12 12-15 9-18 6-15 2h-19l-17-3-12-5-12-7-8-8-6-10-5-11-2-12-1-5v-10l4-18 8-16 7-11 16-16 16-10 25-10h6l2-1z" fill="#055092"/>
<path transform="translate(308,130)" d="m0 0h20l6 3 4 4 1 3v19l-4 20-1 3-1 7-7 32-1 9-1 2-1 18h30l19-4 12-3v20l-5 10-8 7-11 4h-12l-18-2-10-2-9 3-10 2-10-1-10-4-5-4-4-8-2-10v-7l3-21 5-29 2-9 4-20 1-4-8-16-4-7 8-5 11-5 5-2 8-2z" fill="#055092"/>
<path transform="translate(504,252)" d="m0 0 5 5 3 17 2 10 5 10 6 7 5 5 1 2h51v-2h2l2-4 6-8h2l2-4 4-1h7l11 9 3 3 7 6v2l107-1 7-10 6-10 4-6 8-7h8l7 5 5 5 11 13 7 6 2 1v2l3 1 14 1v1h-686l2-1 1-4 4-5 6-8 5-8h2v-3l7-6 7 1 7 4 6 5 6 9 5 5 7 6 1 2 5 1h175l1-4 7-4 8-11 6-10 5-4 6-3 32-4 14-4 12-3 19-2 10-4 2-2z" fill="#FAFCFC"/>
<path transform="translate(817,309)" d="m0 0 741 1v4l-2 1h-1496l-7-1v-4z" fill="#D28F95"/>
<path transform="translate(736,13)" d="m0 0h16l11 2 13 1 17 5 15 8v2h-14l-9-1-25-1h-22l-41 3-25 4-25 5-36 10-37 13-25 11-38 19-27 16-11 8h-3l11-11 14-11 15-11 15-9 16-9 28-13 23-9 38-13 17-4 14-4 32-6 13-2 23-2z" fill="#0E8ED0"/>
<path transform="translate(474,191)" d="m0 0 18 1 5 6 2 4v11l-3 9-3 7h-19l-10 1-10 2-3 2-24 6-16 1-7-3-3-3-1-3v-11l3-12 4-7 6 2h12l21-5 13-4z" fill="#055193"/>
<path transform="translate(193,329)" d="m0 0 17 1v2l6 2 8 8 4 8 1 4v12l-5 12-9 8-6 3-6 1h-10l-10-2-9-7-4-5-4-10v-12l3-9 9-10 10-5z" fill="#140F19"/>
<path transform="translate(1252,329)" d="m0 0 12 1 8 4 8 7 5 10 1 4v10l-4 11-6 7-8 5-9 2h-9l-10-2-8-6-6-7-4-11v-9l5-12 9-9 8-4z" fill="#140F17"/>
<path transform="translate(53,310)" d="m0 0h575l7 1 1 2 99 1v1h-675l-7-1z" fill="#D39096"/>
<path transform="translate(84,582)" d="m0 0h928l7 2v1h-933v-2z" fill="#F9FAFB"/>
<path transform="translate(194,314)" d="m0 0h1077l282 1v1h-24v2l-16 2h-7v-1l12-2h-37l5 1-2 2-11-2-1-1-54-1-1 4h-10l2-1v-2l-10 1 2 2-4 1-13-1-2-3h-98v2h-13l-1-2h-17l4 2h-11l-10-2h-68l-3 1 13 1v1h-29l-19-3h-72l-15 3-9-1-3-1 2-1h-37l-5 3h-5l4-3h-37l4 3h-9l-8-3h-49v1l-10 1h-8l4-2h-29l-4 1-7-1-6 2-10-2h-13l-4 1-2-1h-77l-6 2-2 1h-41l2-1v-3l-22 1 6 1 8 1-1 2h-13l-14-3-1-1-59-1v2l-9 2h-8v-1l9-2h-41l6 1v2l-31-3h-160l3 3-29 1-3-2h-1-9l-5 1-6-1-2-2h-12l1 2-11-1-2-1h-39l-1 1 2 2h-6l-10-2-3-1h-9v1h-6l-2-1h-107l4 2-10-1-2-1-25-1v-1z" fill="#F7F5F9"/>
<path transform="translate(285,473)" d="m0 0h336l1 5-1 104h-335v-78zm279 2-13 1-6 2h-28l-38 1h-114l-33-1-6-1h-16l-19 3-1 1-1 22v78h327l4-2v-104z" fill="#BD3943"/>
<path transform="translate(427,32)" d="m0 0h14l10 14 7 7v2l4 2 10 7 9 5 23 8-1 3-11 8-17 12-4 3-5-2-10-9-7-7v-2h-2l-3-5v-2h-2l-8-14-4-9-3-13z" fill="#22184D"/>
<path transform="translate(485,517)" d="m0 0h9l1 1v6l7 1 4-6 4-1h17l7 4 4 8 2 18v6l-5 1-3-2-1-3-2-1-1 4-5 2h-15l-5-4v-2l-9-2-6-3-4-1-5-3-1 14h-11v-35l6 1 3 3h3l4-5z" fill="#BF363D"/>
<path transform="translate(845,329)" d="m0 0 11 1 1-1 12 1 7 2 6 3 6 7 1 3v7l-4 7-8 6h-4l7 8 10 10 1 5-2 1h-8l-19-19-8-3v19l-4 4h-5l-4-4v-53z" fill="#140D17"/>
<path transform="translate(352,329)" d="m0 0 8 1 9-1 13 3 9 7 2 4v11l-3 5-5 4-5 2 2 4 12 12 1 7-3 2-7-1-7-8-11-12-9-1v21l-5 1-6-1v-58z" fill="#140E17"/>
<path transform="translate(1093,276)" d="m0 0 10 1 11 9 9 11 6 7 3 1v2l8 1h46l4-4 6-4 12-3 8 2 16 7 4 1 13 1v1l-43 1h-362v-1l221-1 10-9h2l1-4 3-4 3-5z" fill="#FAFCFC"/>
<path transform="translate(1322,329)" d="m0 0 5 2 11 13 12 16 5 7 2 1v-29l1-8 1-1h7l3 1v57l-4 2h-5l-8-9-10-14-9-11-3-4-1 35-1 2-9 1-2-4v-54z" fill="#11121C"/>
<path transform="translate(924,329)" d="m0 0h5l7 7 24 32 1-35 5-4 6 2 1 3v53l-3 3-7-1-9-11-10-13-11-15-1 38-2 2-9-2v-57z" fill="#110B13"/>
<path transform="translate(605,329)" d="m0 0 5 1 9 10 13 18 6 8 2 2 1-36 2-2h7l3 4v53l-4 3-6-1-10-12-12-16-5-7-3-3-1 36-2 3-8-1-1-1v-56z" fill="#0E0B11"/>
<path transform="translate(1025,160)" d="m0 0 4 2 1 3v10l-4 10-4 4-7 8-6 5-19 19-11 12-6 3-14-1-6-1 2-4 11-12 9-10 15-16 15-15 11-8z" fill="#B2D7ED"/>
<path transform="translate(605,156)" d="m0 0 13 1 8 6 4 7v13l-5 8-9 8-11 4-9 1h-11l1-6 1-9 2-7 2-9 2-12 1-4z" fill="#F2F8FB"/>
<path transform="translate(1225,310)" d="m0 0h333v4l-2 1h-319l-11-1 1-2z" fill="#D39096"/>
<path transform="translate(1424,330)" d="m0 0h8l4 5 11 27 8 22-1 5-8 1-2-1-5-12-1-6-21 1-9 17h-9l-1-1 1-7 4-8-2-9 8-4 14-29z" fill="#131018"/>
<path transform="translate(1029,330)" d="m0 0h8l4 6 10 27 5 12 3 8v5l-4 2h-5l-4-6-5-12-21-1-1 5-6 11-3 3h-5l-2-2 1-9 4-9h-2v-7l7-2 7-15 7-14z" fill="#140F17"/>
<path transform="translate(445,329)" d="m0 0h8l11 3 8 7 2 3-1 5-1 2h-7l-7-7-4-2h-11l-5 5 2 5 3 3 3 1 15 2 10 4 4 4 1 3v10l-4 7-8 5-8 1h-11l-10-1-7-4-1-6 3-3h6l2 2 8 2 9 1v-2h6v-2h2v-2h2l-2-6-7-3-10-1-10-3-8-6-2-4v-10l3-5 7-6z" fill="#140F17"/>
<path transform="translate(1529,514)" d="m0 0h1v69l-1 2h-510l-2-2 8-1h504z" fill="#F4F3F8"/>
<path transform="translate(307,329)" d="m0 0 5 1 3 4v35l-4 10-8 8-9 3h-11l-9-2-8-6-4-5-1-3v-42l2-2h8l1 1 1 41 6 6 9 2 9-4 3-3 1-3 1-37z" fill="#150D18"/>
<path transform="translate(767,331)" d="m0 0h43l1 7-6 2h-29l1 15h27l3 3-1 6-1 1h-28l1 13 27 1 6 3-1 5-2 2h-33l-8-5-1-3v-17l-4-2-1-4 4-2 1-24z" fill="#0E0E15"/>
<path transform="translate(1084,505)" d="m0 0h8l6 8 19 38v4h-8l-4-5-3-6-28 1-5 10h-8l-1-3 11-24 9-19z" fill="#F9FBFC"/>
<path transform="translate(126,494)" d="m0 0 7 2v17l-1 2h31v-19l1-1h9l1 1v48l-1 1h-9l-1-1v-20h-31l1 20-1 1h-10l-1-49z" fill="#EFF6FA"/>
<path transform="translate(717,42)" d="m0 0h15l17 1 13 5 1 2h-46l-24 1-26 4-25 5-25 6-37 12-29 12-24 11-18 10-8 5-2-1 11-8 16-10 16-8 15-7 31-12 15-5 12-3 10-4 26-7 33-6 13-2z" fill="#075FA1"/>
<path transform="translate(192,339)" d="m0 0h10l9 5 4 5 2 8-1 12-5 7-10 5h-8l-6-3-5-4-3-5v-18l6-8z" fill="#F9FAFB"/>
<path transform="translate(1250,339)" d="m0 0h9l9 5 4 5 1 3v16l-4 6-4 4-8 3h-7l-9-5-5-7-1-4v-13l6-8 6-4z" fill="#F9FAFB"/>
<path transform="translate(179,165)" d="m0 0h7l1 4-2 18-1 34h-37l2-5 11-21 10-17 7-11z" fill="#F5F9FB"/>
<path transform="translate(1114,165)" d="m0 0h7v27l-2 29h-36l2-6 12-22 14-24z" fill="#F3F9FB"/>
<path transform="translate(780,165)" d="m0 0h8l1 4-1 6-1 46h-37l2-6 13-24 14-24z" fill="#F6FAFB"/>
<path transform="translate(406,517)" d="m0 0 8 1 6 7 9-6 2-1h12l7 6 1 2 1 15v13h-9l-1-6-1-19-2-3-8-1-5 3-2 3-2 23-1 1h-7l-1-1-1-25-2-3h-11l-4 5-1 5-1 18-10 1v-37l5 1 3 3v3l9-6z" fill="#FAFCFC"/>
<path transform="translate(866,154)" d="m0 0 3 1 5 12 7 7 12 6 13 4 14 2-1 4-13 13-7 8-2 1-2-5-10-5-8-5-3-4v-2h-2v-2h-2l-7-12-1-14z" fill="#B2D7ED"/>
<path transform="translate(817,309)" d="m0 0h27l48 1-1 5h-156l-100-1-1-2-6-1v-1z" fill="#D39096"/>
<path transform="translate(1533,161)" d="m0 0 5 1 2 7-2 10-4 9-8 11-5 5-6 5-5 4-5 8-1 5h-3l-12-24 2-4 15-9 14-11 7-7z" fill="#B2D7ED"/>
<path transform="translate(622,582)" d="m0 0h390l7 2v1h-386l-1-1-10-1z" fill="#B2D7ED"/>
<path transform="translate(963,491)" d="m0 0h10l1 23 8-3 11-1 5 2 4 5 1 3 1 14v14h-11l-2-29-6-1-7 3-4 4-1 23h-10l-1-1v-55z" fill="#F3FCF1"/>
<path transform="translate(692,176)" d="m0 0 1 3 2 1v2l1 8 1 5h5l-1 6-9 19-8 16-6 13-3 1-6-11-8-15 1-3 8-7 8-8 9-15 3-10z" fill="#B2D7ED"/>
<path transform="translate(976,461)" d="m0 0 11 1 21 1 7 3 3 5v2l-16 1h-145v-1h26l1-2h3l-16-4v-1l10 1 14 1h36l21-3 8-3 5 1 3 1z" fill="#F0FBF1"/>
<path transform="translate(198,507)" d="m0 0h17l6 3 5 5 1 3 1 27h-5l-6-5-1 3-7 3h-8l-9-3-4-5v-8l5-6 5-2h15l3 1-1-8h-14l-11 1 1-6z" fill="#EFF6FA"/>
<path transform="translate(882,511)" d="m0 0h19l6 4 3 6 3 22v4h-10v-3l-6 4h-17l-5-3-2-3v-10l5-5 7-2h12l5 1-2-5-3-1h-11l-10 1-1-3 3-5z" fill="#F3FCF2"/>
<path transform="translate(803,510)" d="m0 0h7l7 2 5 5 2 3 4 28h-8l-1-4-5 3-5 1h-15l-5-3-2-5v-7l4-5 5-2h20l-2-5-13-1h-11v-6l5-3z" fill="#F3FCF1"/>
<path transform="translate(534,331)" d="m0 0h35l1 6-5 3h-7l-1 41h12l1 1v5l-2 2h-35v-7l1-1h11v-42h-11z" fill="#130C14"/>
<path transform="translate(1158,331)" d="m0 0h35v8l-12 1v41h12l2 1-1 5-1 2h-35l-1-1v-6l11-3 1-40h-9l-2-1z" fill="#0E0B10"/>
<path transform="translate(1078,331)" d="m0 0h51l2 2v5l-5 2h-16v48l-4 4-5-1-3-3v-48h-18l-4-2 1-5z" fill="#0D0A10"/>
<path transform="translate(682,331)" d="m0 0h52l1 7-4 2h-18v49l-3 3-5-1-3-2-1-48-17-1-3-2z" fill="#0C0A0E"/>
<path transform="translate(317,506)" d="m0 0h10l1 35 1 4 5 2 3 1h11l6-3 2-4 2-35h9v34l-4 8-7 5-10 2h-8l-9-2-8-5-3-4-1-3z" fill="#FAFCFC"/>
<path transform="translate(1411,517)" d="m0 0 9 1 6 3 3 3 1 8-5 5-8 3h-16l2 5 4 3 10 1 8-2h5l-1 5-5 3-5 1h-11l-9-3-6-5-3-9 2-11 6-7 3-2z" fill="#F8FAFB"/>
<path transform="translate(1343,498)" d="m0 0h10l1 42 7-9 13-13 6 1 1 1v5l-11 8-2 2 1 5 5 6 3 2h6l1 4-2 3h-10l-9-8-3-4h-2l-2 4-5 7-7 1-1-1z" fill="#F4F4F8"/>
<path transform="translate(555,498)" d="m0 0h10v25l7-4 4-1h8l7 3 3 4 1 3v26h-9l-2-26-3-3-8 1-7 4-1 19-1 6h-8l-1-1z" fill="#FAFCFC"/>
<path transform="translate(676,498)" d="m0 0h21l2 1-1 7-13 16-8 10-7 8 30 2 1 1v5l-45-1 1-7 8-10 10-12 9-12-27-1v-5l1-1z" fill="#F4FCF2"/>
<path transform="translate(86,331)" d="m0 0h53v7l-3 2h-19v49l-2 2h-6l-2-1v-50h-19l-3-2z" fill="#0C0A0D"/>
<path transform="translate(1488,330)" d="m0 0 8 1 1 1v47h25l5 3-1 5-3 2h-39l-1-1v-5l2-3v-28l1-20z" fill="#0F0A10"/>
<path transform="translate(53,310)" d="m0 0h189l13 1 3 2-1 1-63 1h-134l-7-1z" fill="#D28F95"/>
<path transform="translate(1345,289)" d="m0 0 9 1 3 2v2l5 2 7 6 3 3 7 3v1l-25 1h-148v-1l104-1 17-9 9-5 6-4z" fill="#FAFCFC"/>
<path transform="translate(741,510)" d="m0 0 4 2 12 25v3h2l1-5 6-16 2-7h11l-3 10-8 18-7 11-9 11-6 5-5-1-1-5 8-8 2-3-1-7-10-22-3-6 1-4z" fill="#F3FCF1"/>
<path transform="translate(1210,505)" d="m0 0h44v7h-17v42l-1 1h-9l-1-1v-42h-16l-2-5z" fill="#F9FCFC"/>
<path transform="translate(602,162)" d="m0 0h7l10 3 4 5v13l-7 8-12 6h-9v-9l5-25z" fill="#B2D7ED"/>
<path transform="translate(1307,518)" d="m0 0h12l7 3 3 3 1 5-2 4-5-1-8-7-7 1-4 2-2 4v10l2 4 6 2h8l7-2h5l-1 6-4 3-6 1h-11l-9-3-5-5-3-5-1-7 3-9 4-5z" fill="#F9FBFC"/>
<path transform="translate(347,155)" d="m0 0 2 4 2 18-2 16-3 21-2 9-3 15-2 6-7 1-1-1 1-14 12-61z" fill="#B2D7ED"/>
<path transform="translate(1493,517)" d="m0 0 9 1 3 1 1 7h-13l-5 2v2l12 4 7 4v2h2v9l-6 5-6 2h-11l-7-2-2-3 1-5 7 2h13l1-2-2-4-11-3-8-7v-7l4-5 4-2z" fill="#F2F3F8"/>
<path transform="translate(930,502)" d="m0 0 6 1 2 8 13 1-1 7h-13v23l10-2 5 1v5l-7 2h-13l-4-4-1-5v-19l-5-1-1-5 4-3h2l2-8z" fill="#F4FDF1"/>
<path transform="translate(244,508)" d="m0 0h9l1 2v39l-2 8-4 5-3 1h-9l-4-2-1-7 12 1v-46z" fill="#F2F8FB"/>
<path transform="translate(1447,509)" d="m0 0h6l1 1 1 10 3-1h10v6l-1 1-12 1v22l9-2h5l-1 6-3 2h-15l-5-5-1-6v-15l1-2-6-1v-6l6-1 1-8z" fill="#F5F4F8"/>
<path transform="translate(126,494)" d="m0 0 7 2v48l-1 1h-10l-1-49z" fill="#F1F8FA"/>
<path transform="translate(839,511)" d="m0 0h6l3 4 8-4h9l2 2-1 6-13 2-1 1-2 25-1 1h-9l-1-3z" fill="#F3FCF1"/>
<path transform="translate(643,56)" d="m0 0 3 1-1 2-32 8-41 14-39 17-24 13-8 5-2-1 11-8 16-10 16-8 15-7 31-12 15-5 12-3 7-2h2l7-2v2z" fill="#065B9D"/>
<path transform="translate(510,518)" d="m0 0h17l7 4 4 8 2 18v6l-5 1-3-2v-4l-4-2-1-5-6-2-1-3 6-4 3 1-1-7-6-2-9 1h-10l2-6z" fill="#FAFBFC"/>
<path transform="translate(513,532)" d="m0 0 13 1-1 2-4 2v3l6 1 2 6 4 2-2 1-2-1-1 4-5 2h-15l-5-4-1-2v-10l4-5z" fill="#F9F9FB"/>
<path transform="translate(1172,518)" d="m0 0h11l1 1v7l-15 1-1 7-1 20-1 1h-8l-1-1v-35l7 1 5 2z" fill="#F9FBFC"/>
<path transform="translate(945,310)" d="m0 0h117l5 3v1h-121l1-2z" fill="#BA788C"/>
<path transform="translate(486,518)" d="m0 0h7l1 1v6l-6 2-4-1-5 3-2 25h-10v-35l6 1 3 3h3l3-4z" fill="#FAFBFC"/>
<path transform="translate(1025,582)" d="m0 0h148v1l-5 1v1h-149l-2-2z" fill="#F1F2F8"/>
<path transform="translate(628,310)" d="m0 0h105l3 3v1h-101l-1-2-6-1z" fill="#BA788C"/>
<path transform="translate(567,84)" d="m0 0h3v2l-33 15-16 8-20 11-8 4-4-3 2-4 9-7 8-5 3 1-5 5-4 3 29-16 13-6 8-2z" fill="#EAF4F9"/>
<path transform="translate(1343,498)" d="m0 0h10l-1 43-5 1-4 2z" fill="#F8FBFB"/>
<path transform="translate(653,69)" d="m0 0h7l2 2-25 6-5-1v2l-27 9-13 4-10 4-19 8h-3l4-4 28-14 20-7 10-3 9-2 15-2z" fill="#802B7B"/>
<path transform="translate(712,512)" d="m0 0h9v30l6-1 2 5-4 2h-11l-2-1-1-3v-31z" fill="#FAFCFC"/>
<path transform="translate(892,310)" d="m0 0h53l4 3 117 1v1h-175z" fill="#D39096"/>
<path transform="translate(585,310)" d="m0 0h43l7 1 1 2 99 1v1h-189v-1l34-1z" fill="#D39096"/>
<path transform="translate(1129,519)" d="m0 0h8l2 2v27h7v6l-2 1h-11l-4-4-1-31z" fill="#F9FCFC"/>
<path transform="translate(1225,310)" d="m0 0h95l5 4-88 1-11-1 1-2z" fill="#BA788C"/>
<path transform="translate(84,582)" d="m0 0h201v1h-108v2h-91v-2z" fill="#B2D7ED"/>
<path transform="translate(199,523)" d="m0 0h11l5 2v4l-11-1-4 1v7l2 3h9l6-5 2 3v3h-2l-1 3-7 3h-8l-9-3-4-5v-8l4-5z" fill="#EFF7FA"/>
<path transform="translate(358,339)" d="m0 0h15l6 3 3 4-1 7-8 5-4-1-2-2-4 1-5 1z" fill="#F8FBFB"/>
<path transform="translate(1112,182)" d="m0 0h1v33l-1 1h-18v-3l13-24z" fill="#B2D7ED"/>
<path transform="translate(1265,519)" d="m0 0h7l2 1v28l8 1-1 5-2 1h-11l-3-3z" fill="#FAFCFC"/>
<path transform="translate(778,183)" d="m0 0 2 1v31l-1 1h-17l-1-2 10-20z" fill="#B2D7ED"/>
<path transform="translate(854,339)" d="m0 0h14l8 4 1 8-4 5-9 1-1-1-9 1z" fill="#F7F8F9"/>
<path transform="translate(283,310)" d="m0 0h87l4 2v2h-89l-3-3z" fill="#BB798C"/>
<path transform="translate(620,578)" d="m0 0 1 4h-332v-1l327-1z" fill="#BE2C33"/>
<path transform="translate(817,309)" d="m0 0h27l48 1v4h-84v-1l7-1-2-2z" fill="#BB798C"/>
<path transform="translate(1421,521)" d="m0 0 3 1 1 9-2 7-6 2h-13l-3-2 1-3h2v-2l-3-1 1-5 5-3h10l3 3 2-2-3-3z" fill="#F6F5F9"/>
<path transform="translate(1529,514)" d="m0 0h1v69l-1 2h-89l1-2 10-1h78z" fill="#EFF1F7"/>
<path transform="translate(177,181)" d="m0 0h2l-1 5-1 3v26h-19l2-5 10-18z" fill="#B2D7ED"/>
<path transform="translate(845,152)" d="m0 0 2 3 1 79 1 17h-2l-2-6-2-21v-29z" fill="#B2D7ED"/>
<path transform="translate(163,496)" d="m0 0h1v20l-1 2v6h-31v-9h31z" fill="#B2D7ED"/>
<path transform="translate(1210,505)" d="m0 0h44v7h-17v38h-1l-1-39h2v-3l2-1h-13l8 4v1h-24l-2-5z" fill="#F4F4F8"/>
<path transform="translate(1395,538)" d="m0 0 6 2 2 5 4 3 10 1 8-2h5l-1 5-5 3-5 1h-11l-9-3-6-5-1-4z" fill="#F3F4F8"/>
<path transform="translate(750,299)" d="m0 0 8 1 2 6 4 1h11l4-4 6 1v-2l4 2 2 4h12l14 1v1h-69l-2-2v-3h2z" fill="#F8F7FA"/>
<path transform="translate(399,525)" d="m0 0h11l3 4v25h-1l-1-14-6 2-4-2v-2h-2v-2h-3l-2 18h-1v-18l2-7z" fill="#BF363E"/>
<path transform="translate(554,499)" d="m0 0h1v53h-6l-5-4-1-7v-7l2-6h5v2h3z" fill="#BD2C33"/>
<path transform="translate(431,524)" d="m0 0 8 1 3 4v12h-3l-1 2-6-1-7-2v-2h-2v-7l5-5z" fill="#BE3037"/>
<path transform="translate(1352,299)" d="m0 0 6 1 8 6v1l13 1v1l-25 1h-18l-9-1 2-4 6-4h3l2 2 3 1 7-1z" fill="#F7F5F9"/>
<path transform="translate(466,519)" d="m0 0h1v26h-2l-1 2-4 1-4-2-1-12-1-1-1 15h-1l-1-7v-13l14-2z" fill="#BE3037"/>
<path transform="translate(242,310)" d="m0 0h41l2 3 88 1v1h-140v-1l24-1-2-1-13-1z" fill="#D39096"/>
<path transform="translate(176,294)" d="m0 0 5 5 7 6v3h14v1l-35 1h-21v-2l-3-1 3-7 2-2h3v2l3 1 2 6-5-1-1 1h30v-2l-1-2-3 1v2h-5l1-3-1-4 4-2z" fill="#F7F5F9"/>
<path transform="translate(244,508)" d="m0 0h9l1 2v39h-1l-1-19-1-3h-5l-1 1-1 27h-1v-46z" fill="#E7F6F0"/>
<path transform="translate(1373,310)" d="m0 0h60l5 3v1h-68l2-1z" fill="#BA788C"/>
<path transform="translate(1307,518)" d="m0 0h12l7 3 3 3 1 5-2 4-5-1-8-7-7 1-5 2-1-3-3 1v-2l-3 1 1-3z" fill="#F7F6F9"/>
<path transform="translate(1088,514)" d="m0 0 3 3 6 15 1 5h-17l-2-2 5-14z" fill="#913079"/>
<path transform="translate(217,519)" d="m0 0h1v14l-7 7h-9l-3-4v-7l5-2 10 1v-3l-4-1h-11l-6 1 2-2 3-1h15l3 1z" fill="#C8E4EE"/>
<path transform="translate(936,525)" d="m0 0h1v17l10-2 5 1v5l-7 2h-13l-4-4-1-11 5 1 1-3h2z" fill="#F5FAFA"/>
<path transform="translate(577,524)" d="m0 0 6 1v4l-1 4 1 5-4 2-9-1-2-4-2 18-2 2 1-25 8-5z" fill="#BE323A"/>
<path transform="translate(963,491)" d="m0 0h10v18h-1l-1-12h-8l1 37 1 5h7l1-4v13h-10l-1-1v-55z" fill="#FAFCFC"/>
<path transform="translate(1134,310)" d="m0 0h55l4 2-1 2h-58v-3z" fill="#BA788C"/>
<path transform="translate(1084,299)" d="m0 0 7 3 2 3 4 2-8-1-3-2 3 3h18l2-1 1-3 7-1 2-1 5 4-1 4-13 1h-27l-18-1v-1l14-1 3-6z" fill="#F7F5F9"/>
<path transform="translate(1458,310)" d="m0 0h61l-1 2h-3v2h-49l-8-3z" fill="#BA788C"/>
<path transform="translate(53,310)" d="m0 0h38l-1 3h39l3 2h-72l-7-1z" fill="#D39096"/>
<path transform="translate(768,512)" d="m0 0h11l-3 10-7 16h-2l-2-9-2-1 3-9z" fill="#F3FCF2"/>
<path transform="translate(392,302)" d="m0 0h2l3 3 3 2 71 1v1l-6 1h-72l-20-1v-1h14l2-4z" fill="#F7F5F9"/>
<path transform="translate(529,310)" d="m0 0h56l-5 4h-45l-5-2z" fill="#BA788C"/>
<path transform="translate(524,160)" d="m0 0 6 2 3 3v7l-2 5-2 7-3 1-3-3-1-6v-12z" fill="#B2D7ED"/>
<path transform="translate(203,310)" d="m0 0h39l13 1 3 2-1 1h-53l-2-1z" fill="#BA788C"/>
<path transform="translate(1173,582)" d="m0 0 90 1-2 2h-93l-1-2z" fill="#FAFCFC"/>
<path transform="translate(270,160)" d="m0 0 4 1 4 7-4 18-2 5h-2l-2-18-1-4z" fill="#B2D7ED"/>
<path transform="translate(510,518)" d="m0 0h17l4 4-1 7-3-3-5-1-9 1h-10l2-6z" fill="#F9F9FB"/>
<path transform="translate(1189,310)" d="m0 0h36l3 3 7 1v1h-44v-3z" fill="#D39096"/>
<path transform="translate(712,512)" d="m0 0h9v13l-6 8h-2l-2 2v-22z" fill="#F4FCF2"/>
<path transform="translate(91,310)" d="m0 0h44v3l-7 1h-46v-1h8z" fill="#BA788C"/>
<path transform="translate(1325,546)" d="m0 0h5l-1 6-4 3-6 1h-11l-7-2 4-4 17-3z" fill="#F2F1F6"/>
<path transform="translate(1445,158)" d="m0 0 3 1v2l7 2 5-2-6 8-4 4h-4l-1 5-4 4-2-1 5-22z" fill="#B2D7ED"/>
<path transform="translate(882,511)" d="m0 0h19l2 2-2 1h-6l4 4v2h-13l-10 1-1-3 3-5z" fill="#F2FBF1"/>
<path transform="translate(1478,546)" d="m0 0 7 2h13 4l-1 5 2 1-6 2h-11l-7-2-2-3z" fill="#F1F3F8"/>
<path transform="translate(1407,524)" d="m0 0h10l3 3 1 4-5 3h-12l-3-2 1-5z" fill="#913279"/>
<path transform="translate(85,474)" d="m0 0 4 1h-2v101l2 5-5 1v-62z" fill="#075EA0"/>
<path transform="translate(682,468)" d="m0 0 10 2 21 2v1l-10 1h-28l-28-1v-1l21-1 9-1z" fill="#EFFAF1"/>
<path transform="translate(514,539)" d="m0 0 11 1 3 2-1 5-3 2-10 1-4-2v-7z" fill="#BE373F"/>
<path transform="translate(885,532)" d="m0 0h11l3 3v5l-6 2-9 1-2-2 1-8z" fill="#91BE36"/>
<path transform="translate(198,507)" d="m0 0h17v1l-8 1 8 5-4 1h-10l-11 1 1-6z" fill="#B2D7ED"/>
<path transform="translate(1069,538)" d="m0 0 3 1 1 5-2 6-2 5h-8l-1-3 5-11z" fill="#F6F5F9"/>
<path transform="translate(798,533)" d="m0 0h14l2 5-3 3-13 1-1-1v-7z" fill="#91BE36"/>
<path transform="translate(1031,346)" d="m0 0h2l4 12 2 5h-15l2-6z" fill="#E8E5EB"/>
<path transform="translate(1172,518)" d="m0 0h11l1 1v7l-15 1-1 3-2-5-1-3h4z" fill="#F5F5F9"/>
<path transform="translate(1210,505)" d="m0 0h13v2l4 1 7 3v1h-24l-2-5z" fill="#F6F5F9"/>
<path transform="translate(1098,535)" d="m0 0 2 3v4l-3 1h-19l-2-2 5-4h17z" fill="#F7F5F9"/>
<path transform="translate(1427,348)" d="m0 0 3 1 4 11v3h-14l1-4z" fill="#E9E7EC"/>
<path transform="translate(1464,547)" d="m0 0h5l-1 6-3 2h-15l-2-6 2-1 6 1z" fill="#F4F4F8"/>
<path transform="translate(1446,533)" d="m0 0 2 2 2 8 2-9 2 3 2 13-7-1v5l-4-4-1-9 1-7z" fill="#FAFCFC"/>
<path transform="translate(515,301)" d="m0 0 5 4v3l-10 2h-35v-2l33-1 4-1v-2l2-1z" fill="#F7F5F9"/>
<path transform="translate(364,545)" d="m0 0 3 2-1 5h-5l-1 2-5 3-17 1-6-2-2-3 16 1 10-2 6-4z" fill="#BF3941"/>
<path transform="translate(991,467)" d="m0 0 13 1 4 1-1 4-5 1h-30v-1l17-1v-3z" fill="#FAFDFC"/>
<path transform="translate(350,534)" d="m0 0 4 4 2 5-5 5-8 1 1-8z" fill="#BE323A"/>
<path transform="translate(963,491)" d="m0 0h10v18h-1l-1-12h-8l1 36h-2v-41z" fill="#F7F5F9"/>
<path transform="translate(685,542)" d="m0 0h15l1 1v5l-24-1 1-2z" fill="#F2FBF2"/>
<path transform="translate(1238,314)" d="m0 0h33v2l-18 1 4 2h-11l-10-2v-2z" fill="#F8F7FA"/>
<path transform="translate(715,495)" d="m0 0h5l2 6-1 4h-11v-7l1-2z" fill="#F1FAF3"/>
<path transform="translate(526,533)" d="m0 0 5 2 1 7 3 4v4l-6-2-2-6-6-2-1-3z" fill="#FAFCFC"/>
<path transform="translate(1130,502)" d="m0 0 10 1v8l-8 1-4-1v-8z" fill="#F8F9FA"/>
<path transform="translate(247,491)" d="m0 0 5 1 2 3v5l-1 1h-10l-1-1v-6z" fill="#E1EFF7"/>
<path transform="translate(601,301)" d="m0 0h6v3l3 3 1-4 4 3v2h-21l1-4z" fill="#F7F5F9"/>
<path transform="translate(1267,502)" d="m0 0h6l2 1v8h-11v-7z" fill="#FAFBFC"/>
<path transform="translate(510,518)" d="m0 0h7v7l-4 1h-10l2-6z" fill="#FAFBFC"/>
<path transform="translate(653,69)" d="m0 0h7l2 2-25 6-5-1-1-3 15-2z" fill="#1B60A2"/>
<path transform="translate(201,529)" d="m0 0h11l2 1v5l-2 1-5-2-5 4-3-2v-6z" fill="#0F8FD1"/>
<path transform="translate(739,467)" d="m0 0h16l2 2h-17l-1 4h-20l1-2z" fill="#F5FEF1"/>
<path transform="translate(785,302)" d="m0 0 4 2 2 4h12v1h-29l3-5 4-1 4 1z" fill="#F7F5F9"/>
<path transform="translate(551,75)" d="m0 0h3l-2 4-16 9-5-1 1-3z" fill="#FBFDFD"/>
<path transform="translate(1025,582)" d="m0 0h12l19 1-1 2h-36l-2-2z" fill="#F7FBFA"/>
<path transform="translate(647,52)" d="m0 0 4 1-4 4h5v1h-7l-2-1-12 3v-2l-9 4-1-3z" fill="#0F8FD1"/>
<path transform="translate(1411,582)" d="m0 0h40v1l-10 1-1 1h-27z" fill="#FBFDFD"/>
<path transform="translate(1503,536)" d="m0 0 4 2v2h2v9l-4 4h-4v-6l3-3-2-5-1-2z" fill="#F6F7F9"/>
<path transform="translate(1138,547)" d="m0 0 8 1v6l-2 1h-11l-1-4 2-2h4z" fill="#F6F4F8"/>
<path transform="translate(1447,509)" d="m0 0h6l1 1 1 9-3 4-5-6-2-2z" fill="#F8FBFC"/>
<path transform="translate(724,541)" d="m0 0 4 1 1 4-4 2h-11l-2-1 2-4 9-1z" fill="#F0FAF2"/>
<path transform="translate(1251,316)" d="m0 0h20v2l6-1 6 2v1l-11 1-19-3z" fill="#FBFDFD"/>
<path transform="translate(455,40)" d="m0 0 5 2v2h2v2l3 1 3 8-5-2-7-6-2-3z" fill="#B2D7ED"/>
<path transform="translate(1206,305)" d="m0 0h8l5 2 30 1v1h-44v-3z" fill="#F7F5F9"/>
<path transform="translate(1538,300)" d="m0 0 4 2v3l4 1 6 2 5 1v1h-17l-3-1-1-4z" fill="#F7F5F9"/>
<path transform="translate(199,523)" d="m0 0h11l5 2v4l-11-1-5 1-1-3h-2v-2z" fill="#F6FDF4"/>
<path transform="translate(895,513)" d="m0 0h10l5 8 1 6-2 2-2-8-1-2h-6l-6-4z" fill="#F7FBFC"/>
<path transform="translate(670,541)" d="m0 0h13l2 2-3 2-5 1h-12l2-4z" fill="#F7FBFC"/>
<path transform="translate(764,525)" d="m0 0h9l-1 7-3 6h-2l-2-9-2-1z" fill="#F9FCFC"/>
<path transform="translate(947,540)" d="m0 0 5 1v5l-7 2h-3v-2l-3-1 2-3z" fill="#ECF7F2"/>
<path transform="translate(1424,521)" d="m0 0 4 2 2 4-1 7-4 3-3-1 2-5z" fill="#F4F9FB"/>
<path transform="translate(1130,315)" d="m0 0h21v4l3 1-11-1-13-2z" fill="#F8F7FA"/>
<path transform="translate(859,463)" d="m0 0 10 2v1h-48v-1l27-1z" fill="#F5FEF1"/>
<path transform="translate(1110,546)" d="m0 0 4 4 3 1v4h-8l-4-5v-2z" fill="#F4F3F7"/>
<path transform="translate(214,530)" d="m0 0 2 1-1 5-4 4h-9v-3h2l1-3 3-1 5 2z" fill="#B2D7ED"/>
<path transform="translate(1439,305)" d="m0 0h11l2 1v4h-13l-1-4z" fill="#F7F5F9"/>
<path transform="translate(288,557)" d="m0 0 2 3v17l-1 5h-3v-12l1-12z" fill="#BB3945"/>
<path transform="translate(244,508)" d="m0 0h9l-1 2-6 1-1 1-1 43h-1v-46z" fill="#B2D7ED"/>
<path transform="translate(242,310)" d="m0 0h21v2l3 1-2 1-9-2-13-1zm15 3m-24 1h24v1h-24z" fill="#CF8C94"/>
<path transform="translate(643,56)" d="m0 0 3 1-1 2-21 5-2-1 3-3 6-2v2z" fill="#06599B"/>
<path transform="translate(756,44)" d="m0 0 9 1 5 4-1 4h-8l-2-2 5-1-3-3-5-2z" fill="#FBFDFD"/>
<path transform="translate(149,517)" d="m0 0h10l1 4-1 2h-10l1-4z" fill="#FBFDFD"/>
<path transform="translate(1401,528)" d="m0 0 6 1 2-1v2l5 1v2l2 1h-12l-3-2z" fill="#BA778C"/>
<path transform="translate(84,582)" d="m0 0h19l1 3h-18v-2z" fill="#BCDCEF"/>
<path transform="translate(483,98)" d="m0 0h2l-2 4-12 8h-3l1-3z" fill="#B2D7ED"/>
<path transform="translate(657,67)" d="m0 0h15v4l-2 1h-7l1-3-7-1z" fill="#FBFDFD"/>
<path transform="translate(116,162)" d="m0 0 3 1-1 6-7 11-1-3 4-9z" fill="#B2D7ED"/>
<path transform="translate(520,101)" d="m0 0m-2 1 2 1v2l-19 11-2-1 11-8z" fill="#0862A4"/>
<path transform="translate(1280,549)" d="m0 0h2l-1 5-2 1h-11l3-1v-2z" fill="#F5F4F8"/>
<path transform="translate(803,510)" d="m0 0h7l5 1 1 6h-3l-4-2v-3l-6-1z" fill="#F8FCFB"/>
<path transform="translate(594,58)" d="m0 0h2l-1 3-15 5h-5l2-2z" fill="#FBFDFD"/>
<path transform="translate(524,520)" d="m0 0 6 1 1 5-2 3-2-3-4-1v-3l-2-1z" fill="#F7F5F9"/>
<path transform="translate(565,498)" d="m0 0 2 2v12l-1 8 4 1-5 2z" fill="#BE3037"/>
<path transform="translate(653,69)" d="m0 0h7l2 2-16 3-2-2z" fill="#0F8FD1"/>
<path transform="translate(201,508)" d="m0 0h17l-2 1-1 4-4-1-6-2z" fill="#F2FAF5"/>
<path transform="translate(1229,548)" d="m0 0 6 3 1 4h-9l1-5z" fill="#F7F5F9"/>
<path transform="translate(1503,519)" d="m0 0h2l1 7h-9l-2-3 7-2z" fill="#F8FBFC"/>
<path transform="translate(530,530)" d="m0 0 1 3 4 2-1 9-3-2z" fill="#F7F5F9"/>
<path transform="translate(1462,519)" d="m0 0h6v6l-1 1h-5z" fill="#E5EDF6"/>
<path transform="translate(1179,518)" d="m0 0 5 1v7l-6-1z" fill="#EDEFF5"/>
<path transform="translate(376,536)" d="m0 0 5 2v6l-4 3v-4l-2-1h2z" fill="#BE2C33"/>
<path transform="translate(1264,504)" d="m0 0 2 4 1-2h5l1 5h-9z" fill="#F7F5F9"/>
<path transform="translate(968,493)" d="m0 0h4l1 3v13h-1l-1-12h-8l1-3z" fill="#FBFDFD"/>
<path transform="translate(478,108)" d="m0 0 2 1-9 9v3l-5 1 3-5z" fill="#B2D7ED"/>
<path transform="translate(570,94)" d="m0 0 2 1-12 8-4 1 2-4z" fill="#EFF4F7"/>
<path transform="translate(216,534)" d="m0 0 3 3v3h-2l-1 3-2-1-2-4z" fill="#E6F5F0"/>
<path transform="translate(1493,525)" d="m0 0 4 1-3 1v4l-4 1-3-2 1-3z" fill="#C17F8F"/>
<path transform="translate(963,491)" d="m0 0h10v5l-4-2v1h-5z" fill="#F2FCF0"/>
<path transform="translate(749,42)" d="m0 0 7 1v2l5 1 4 4h-3l-4-3-9-3z" fill="#C6E1F1"/>
<path transform="translate(817,515)" d="m0 0h4l3 5 1 8-3-3v-6h-4z" fill="#F3F9FA"/>
<path transform="translate(720,164)" d="m0 0h2l-2 5-5 8-1-3 5-9z" fill="#B2D7ED"/>
<path transform="translate(591,57)" d="m0 0m-3 1h3v2l-11 4-3-1 5-3z" fill="#B2D7ED"/>
<path transform="translate(196,530)" d="m0 0h3l2 8-6-2v-5z" fill="#E2F3EF"/>
<path transform="translate(988,510)" d="m0 0h5l1 3h-4l-1 2h-3l-1-2h2z" fill="#FAFDFC"/>
<path transform="translate(873,532)" d="m0 0h2l1 7-2 4-1-1z" fill="#FAFCFB"/>
<path transform="translate(1130,502)" d="m0 0 4 1h-3v7l-3 1v-8z" fill="#F4F4F8"/>
<path transform="translate(643,56)" d="m0 0 3 1-1 2-11 2 5-4z" fill="#065C9E"/>
</svg>

                    </span>
                  </h1>
                </Link>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="nav-link"
                      >
                        {item.name}
                      </Link>
                    ))}
<Link
                to={packages[0].href}
                className="block nav-link"
              >
                {packages[0].name}
              </Link>
                    <Menu as="div" className="relative">
                      <Menu.Button className="nav-link">
                        Gallery
                      </Menu.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg">
                          {galleries.map((item) => (
                            <Menu.Item key={item.name}>
                              <Link
                                to={item.href}
                                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                {item.name}
                              </Link>
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                {/* <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {darkMode ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button> */}
              </div>

              <div className="flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {open ? (
                    <XIcon className="h-6 w-6" />
                  ) : (
                    <MenuIcon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block nav-link"
                >
                  {item.name}
                </Link>
              ))}
              
              <Disclosure>
                {({ open }) => (
                  <>
                    <Link
                to={packages[0].href}
                className="block nav-link"
              >
                {packages[0].name}
              </Link>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full text-left nav-link">
                      Gallery
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-2 space-y-1">
                      {galleries.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block nav-link"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar