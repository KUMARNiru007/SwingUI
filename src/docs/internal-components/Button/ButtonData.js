const buttonData = [
  {
    id: 'swing_normal',
    section: '',
    label: 'Normal Button',
    description: 'A gradient button with smooth hover transitions, changing to a different gradient on hover for an elegant effect.',
    code: `<button>
  <a href="#" class="group swing-ocean-gradient hover:swing-ocean-gradient px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">Hover Me</a>
</button>`,
  },
//   {
//     id: 'swing_hover',
//     section: 'Swing Button',
//     label: 'Hover Me',
//     description: 'A swing button that shows an alternate gradient on hover.',
//     code: `<button>
//   <a href="#" class="group swing-ocean-gradient hover:swing-ocean-gradient px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">Hover Me</a>
// </button>`,
//   },
  {
    id: 'swing_call',
    section: '',
    label: 'Button with Icon',
    description: 'A swing button that combines a gradient effect and a phone icon, adding a sleek and functional design.',
    code: `<button>
  <a href="#" class="group swing-ocean-gradient hover:swing-ocean-gradient px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">
    <span>
      <i class="ri-phone-fill"></i> Call Now
    </span>
  </a>
</button>`,
  },
  {
    id: 'swing_getStarted',
    section: '',
    label: 'Icon On Hover ',
    description: 'An engaging button that slides text and reveals an arrow icon upon hover, providing clear direction and smooth transitions.',
    code: `<button>
  <a href="#" class="group swing-ocean-gradient hover:swing-ocean-gradient px-10 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden transition-all duration-200">
    <div class="relative flex items-center">
      <span class="transition-transform duration-200 group-hover:translate-x-[-10px]">
        Get Started
      </span>
      <i class="ri-arrow-right-s-line transition-all duration-200 absolute left-full opacity-0 group-hover:opacity-100"></i>
    </div>
  </a>
</button>`,
  },
//   {
//     id: 'animated_normal',
//     section: 'Animated Swing Button',
//     label: 'Normal',
//     description: 'An animated swing button with continuous gradient motion.',
//     code: `<button>
//   <a href="#" class="swing-ocean-gradient-animate px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">Normal</a>
// </button>`,
//   },
  {
    id: 'animated_hover',
    section: '',
    label: 'Animated Swing Button ',
    description: "A dynamic button with a continuously moving gradient effect, enhancing the visual appeal and drawing users' attention.",
    code: `<button>
  <a href="#" class="swing-ocean-gradient-animate hover:swing-ocean-gradient px-8 py-2 rounded-md text-white inline-flex items-center justify-center overflow-hidden">Hover Me</a>
</button>`,
  },
];

export default buttonData;
