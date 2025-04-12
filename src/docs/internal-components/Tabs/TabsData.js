const TabsData = [
  {
    id: 'tab1',
    section: 'Shift Highlight Tabs',
    label: 'Hover',
    description: 'A swing Tabs with a vibrant gradient background.',
    code: `<div 
    class="flex flex-col gap-4 md:gap-10 items-center justify-center md:flex-row bg-gray-100 max-w-6xl px-10 py-6 rounded-lg"
      id="tabContainer"
    >
      <button
        data-tab="Issues"
        class="tab-button flex-1 w-full md:w-40 text-blue-600 border-blue-600 border-b-[6px] text-sm font-semibold py-3 px-6 border-2 rounded-lg bg-white transition-all duration-300"
      >
        Issues
      </button>
      <button
        data-tab="Kandban"
        class="tab-button flex-1 w-full md:w-40 text-black border-black text-sm font-semibold py-3 px-6 border-2 rounded-lg bg-white transition-all duration-300 hover:bg-gray-100 hover:-rotate-3 hover:-translate-y-1 hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]"
      >
        Kandban
      </button>
      <button
        data-tab="Gantt"
        class="tab-button flex-1 w-full md:w-40 text-black border-black text-sm font-semibold py-3 px-6 border-2 rounded-lg bg-white transition-all duration-300 hover:bg-gray-100 hover:-rotate-3 hover:-translate-y-1 hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]"
      >
        Gantt
      </button>
      <button
        data-tab="Documentation"
        class="tab-button flex-1 w-full md:w-40 text-black border-black text-sm font-semibold py-3 px-6 border-2 rounded-lg bg-white transition-all duration-300 hover:bg-gray-100 hover:-rotate-3 hover:-translate-y-1 hover:shadow-[4px_6px_0px_rgba(0,0,0,0.7)]"
      >
        Documentation
      </button>
    </div>`,
  },
];

export default TabsData;
