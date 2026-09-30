import { useEffect, useRef, useState } from 'react';

const screenshots = [
  { src: '/images/locally/main_page.png', title: 'The local marketplace', description: 'Browse fresh products, compare prices, and discover local sellers.', width: 1902, height: 912 },
  { src: '/images/locally/community.png', title: 'A connected community', description: 'Share updates, follow creators, and connect around local food.', width: 1904, height: 912 },
  { src: '/images/locally/profile.png', title: 'Business profiles', description: 'Explore a business, its products, reviews, and verification status.', width: 1903, height: 913 },
];

export default function ProjectGallery() {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    if (selected === null) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [selected]);

  return (
    <div className="mt-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div><p className="eyebrow">Inside Locally</p><h3 className="text-2xl font-bold">From discovery to community.</h3></div>
        <p className="text-sm text-slate-400">Select a screenshot to explore</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {screenshots.map((shot) => (
          <figure key={shot.src} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
            <button type="button" className="group block w-full cursor-zoom-in overflow-hidden" aria-label={`Enlarge ${shot.title}`} onClick={(event) => { trigger.current = event.currentTarget; setSelected(shot); }}>
              <img src={shot.src} alt={shot.description} width={shot.width} height={shot.height} loading="lazy" decoding="async" className="aspect-[2.08/1] w-full object-contain transition-transform group-hover:scale-[1.02]" />
            </button>
            <figcaption className="p-5"><h4 className="font-semibold text-white">{shot.title}</h4><p className="mt-2 text-sm leading-6 text-slate-300">{shot.description}</p></figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} className="project-dialog" aria-labelledby="screenshot-title" onCancel={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        {selected && <div className="rounded-2xl border border-white/15 bg-slate-950 p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-4"><h3 id="screenshot-title" className="text-lg font-semibold">{selected.title}</h3><button type="button" autoFocus onClick={() => setSelected(null)} className="rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10">Close <span aria-hidden="true">×</span></button></div>
          <img src={selected.src} alt={selected.description} className="max-h-[75vh] w-full rounded-lg object-contain" />
          <p className="mt-3 text-sm text-slate-300">{selected.description}</p>
        </div>}
      </dialog>
    </div>
  );
}
