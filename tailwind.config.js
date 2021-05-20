module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
        
        "lightred": 'hsl(356, 100%, 66%)',
        "verylightred": 'hsl(355, 100%, 74%)',
        "verydarkblue": 'hsl(208, 49%, 24%)',
  
        "grayishblue": 'hsl(240, 2%, 79%)', // footer text
        "verydarkgrayishblue": 'hsl(207, 13%, 34%)', // body
        "verydarkblackblue": 'hsl(240, 10%, 16%)',  // footer background
  
        "glightred1": 'hsl(13, 100%, 72%)',
        "glightred2": 'hsl(353, 100%, 62%)',
        "ggrayblue": 'hsl(237, 17%, 21%)',
        "gdesaturatedblue": 'hsl(237, 23%, 32%)'
        },
  
        fontFamily: {
          overpass: ['Overpass'],
          ubuntu: ['Ubuntu']
        },

        spacing: {
          '31.4': '31.4rem',
          '54': '54rem',
          '34': '34rem'

        },

        height: {
          500: '500px',
          600: '600px'
        },

        backgroundImage: {
          'pattern': 'url(/public/images/bg-pattern-intro.svg)',
          'circle': 'url(/public/images/bg-pattern-circles.svg)',
          'pc-desktop': 'url(/public/images/illustration-editor-desktop.svg)',
          'pc-mobile' : 'url(/public/images/illustration-editor-mobile.svg)',
          'laptop': 'url(/public/images/illustration-laptop-desktop.svg)',
          'laptop-mobile': 'url(/public/images/illustration-laptop-mobile.svg)',
          'phones': 'url(/public/images/illustration-phones.svg)'
        },

        backgroundPosition: {
          '-position': '-721px -1400px;'
        },

        borderRadius: {
          '5rem': '4.5rem'
        },

        screens: {
          mobile: {'max':'375px'},
          mdmax: {'max': '768px'},
          lgmax: {'max': '1024px'}
        }
    },

  },
  variants: {
    extend: {},
  },

  
  plugins: [],
}
