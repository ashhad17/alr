export const packageTypes = {
  hajj: {
    title: 'Hajj Packages',
    description: 'Experience a spiritually enriching Hajj journey with our comprehensive packages designed for your comfort and peace of mind.',
  },
  umrah: {
    title: 'Umrah Packages',
    description: 'Choose from our selection of Umrah packages available throughout the year, tailored to meet your spiritual needs.',
  },
  zyarath: {
    title: 'Zyarath Tours',
    description: 'Explore sacred Islamic sites and historical landmarks with our guided Zyarath tours.',
  }
}

export const packages = {
  hajj: [
    {
      id: 1,
      title: 'Premium Hajj Package',
      duration: '30 Days',
      startDate: 'June 2024',
      price: '$6,999',
      image: '/images/hajj-1.jpg',
      highlights: [
        '5-star hotel accommodation',
        'VIP transportation',
        'Experienced guides',
        'All meals included'
      ]
    },
    // Add more hajj packages...
  ],
  umrah: [
    {
      id: 1,
      title: 'Ramadan Umrah Special',
      duration: '15 Days',
      startDate: 'March 2024',
      price: '$3,999',
      image: '/images/umrah-1.jpg',
      highlights: [
        '4-star hotel accommodation',
        'Airport transfers',
        'Guided tours',
        'Daily breakfast'
      ]
    },
    // Add more umrah packages...
  ],
  zyarath: [
    {
      id: 1,
      title: 'Complete Zyarath Tour',
      duration: '12 Days',
      startDate: 'May 2024',
      price: '$2,999',
      image: '/images/zyarath-1.jpg',
      highlights: [
        'Visit historical sites',
        'Comfortable accommodation',
        'Expert tour guides',
        'Transportation included'
      ]
    },
    // Add more zyarath packages...
  ]
}