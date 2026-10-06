(() => {
  const site = window.ELAN_SITE;
  const content = document.querySelector('#content');
  const nav = document.querySelector('#chapter-nav');
  const menu = document.querySelector('.mobile-menu');

  function placeholderMarkup(moment, index, accent) {
    const number = String(index + 1).padStart(2, '0');
    if (moment.kind === 'map') {
      return `<div class="journey-map" style="--accent:${accent}">
        <svg viewBox="0 0 900 420" role="img" aria-label="An unfinished journey drawn across a flat world map">
          <g class="map-land"><path d="M34 100 91 51l92-16 72 27 28 48-36 45 19 42-69 23-55-27-69 5-42-40Z"/><path d="m218 239 49 27 29 66-42 71-37-28 6-65-31-39Z"/><path d="m394 85 70-46 103 21 47 34 71-18 119 41 64 62-53 43-84-17-57 35-68-49-71 17-45-39-79 2-44-40Z"/><path d="m482 214 70 4 44 48-24 113-52 13-27-82-45-52Z"/><path d="m742 305 70-20 62 38-24 58-74 2-43-41Z"/></g>
          <path class="map-route done" d="M178 151 C275 83 361 118 432 176 S566 252 631 171"/><path class="map-route dream" d="M631 171 C699 96 778 151 798 238 S742 352 669 337"/>
          <g class="map-points"><circle cx="178" cy="151" r="7"/><circle cx="432" cy="176" r="7"/><circle cx="631" cy="171" r="7"/><circle class="future" cx="798" cy="238" r="8"/><circle class="future" cx="669" cy="337" r="8"/></g>
        </svg><span>still drawing this.</span></div>`;
    }
    if (moment.src) {
      return `<img src="${moment.src}" alt="${moment.alt || moment.caption}" loading="lazy" />`;
    }
    return `<div class="empty-media" style="--accent:${accent}"><span>${number}</span><b>＋</b><em>${moment.label}</em></div>`;
  }

  function chapterMarkup(chapter) {
    if (chapter.id === 'music') return musicChapterMarkup(chapter);
    if (chapter.id === 'rowing') return rowingChapterMarkup(chapter);
    if (chapter.id === 'travel') return travelChapterMarkup(chapter);
    if (chapter.id === 'ssbs-tv') return ssbsChapterMarkup(chapter);
    return `
      <header class="chapter-header" style="--accent:${chapter.accent}">
        <p class="kicker">chapter ${chapter.number}</p>
        <h2 id="${chapter.id}-title">${chapter.title}</h2>
        <p class="chapter-subtitle">${chapter.subtitle}</p>
        <p class="chapter-intro">${chapter.intro}</p>
      </header>
      <div class="photo-wall">
        ${chapter.moments.map((moment, index) => `
          <figure class="photo-slot ${moment.layout}">
            ${placeholderMarkup(moment, index, chapter.accent)}
            <figcaption><span>${moment.label}</span>${moment.caption}</figcaption>
          </figure>`).join('')}
      </div>
      <div class="chapter-end"><span>end of chapter ${chapter.number}</span><button type="button" data-next>next chapter →</button></div>`;
  }

  function ssbsPhotoMarkup(item) {
    return `<figure class="ssbs-photo">
      <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async">
      <figcaption>${item.label}</figcaption>
    </figure>`;
  }

  function ssbsChapterMarkup(chapter) {
    const gettingIn = chapter.stories[0];
    const writingNews = chapter.stories[1];
    const threeYears = chapter.stories[2];
    const favoriteProject = chapter.stories[3];
    return `<div class="ssbs-story" style="--ssbs-accent:${chapter.accent}">
      <header class="ssbs-opening">
        <div class="ssbs-opening-copy">
          <p class="ssbs-eyebrow">chapter ${chapter.number} / behind the broadcast</p>
          <h2 id="ssbs-tv-title">${chapter.title}</h2>
          <p class="ssbs-subtitle">${chapter.subtitle}</p>
          ${chapter.intro ? `<p class="ssbs-intro">${chapter.intro}</p>` : ''}
          <div class="ssbs-role-path" aria-label="Role progression">${chapter.rolePath.map((role, index) => `<span>${role}</span>${index < chapter.rolePath.length - 1 ? '<i aria-hidden="true">→</i>' : ''}`).join('')}</div>
        </div>
        <figure class="ssbs-hero">
          <img src="${chapter.hero.src}" alt="${chapter.hero.alt}" loading="eager" decoding="async">
          <figcaption>${chapter.hero.caption}</figcaption>
        </figure>
      </header>
      <dl class="ssbs-facts">${chapter.facts.map((fact) => `<div><dt>${fact.label}</dt><dd>${fact.value}${fact.note ? `<small>${fact.note}</small>` : ''}</dd></div>`).join('')}</dl>
      <section class="ssbs-story-section ssbs-story-getting-in" aria-labelledby="ssbs-story-${gettingIn.number}">
        <div class="ssbs-story-copy">
          <p class="ssbs-section-label">${gettingIn.number} / ${gettingIn.eyebrow}</p>
          <h3 id="ssbs-story-${gettingIn.number}">${gettingIn.title}</h3>
          <h4>${gettingIn.subheading}</h4>
          ${gettingIn.paragraphs.map((paragraph, index) => `<p${index < 2 ? ' class="ssbs-getting-in-lead"' : index === gettingIn.paragraphs.length - 1 ? ' class="ssbs-punchline"' : ''}>${paragraph}</p>`).join('')}
        </div>
        ${ssbsPhotoMarkup(gettingIn.media)}
      </section>
      <section class="ssbs-story-section ssbs-story-writing ssbs-story-text-only" aria-labelledby="ssbs-story-${writingNews.number}">
        <div class="ssbs-story-copy">
          <p class="ssbs-section-label">${writingNews.number} / ${writingNews.eyebrow}</p>
          <h3 id="ssbs-story-${writingNews.number}">${writingNews.title}</h3>
          <h4>${writingNews.subheading}</h4>
          ${writingNews.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          <a class="ssbs-guide-link" href="${writingNews.link.href}" target="_blank" rel="noreferrer">${writingNews.link.label}<span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section class="ssbs-story-section ssbs-story-three-years" aria-labelledby="ssbs-story-${threeYears.number}">
        <div class="ssbs-story-copy">
          <p class="ssbs-section-label">${threeYears.number} / ${threeYears.eyebrow}</p>
          <h3 id="ssbs-story-${threeYears.number}">${threeYears.title}</h3>
          <h4>${threeYears.subheading}</h4>
          <ul class="ssbs-activities">${threeYears.activities.map((activity) => `<li>${activity}</li>`).join('')}</ul>
        </div>
        <div class="ssbs-collage">${chapter.gallery.map(ssbsPhotoMarkup).join('')}</div>
        <article class="ssbs-mini-film">
          <div class="ssbs-mini-film-copy">
            <p class="ssbs-section-label">${threeYears.project.eyebrow}</p>
            <h4>${threeYears.project.title}</h4>
            ${threeYears.project.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            <a class="ssbs-guide-link" href="${threeYears.project.link.href}" target="_blank" rel="noreferrer">${threeYears.project.link.label}<span aria-hidden="true">↗</span></a>
          </div>
          <div class="ssbs-mini-film-gallery">${threeYears.project.media.map(ssbsPhotoMarkup).join('')}</div>
        </article>
      </section>
      <section class="ssbs-story-section ssbs-story-favorite-project" aria-labelledby="ssbs-story-${favoriteProject.number}">
        <div class="ssbs-story-copy">
          <p class="ssbs-section-label">${favoriteProject.number} / ${favoriteProject.eyebrow}</p>
          <h3 id="ssbs-story-${favoriteProject.number}">${favoriteProject.title}</h3>
          <h4>${favoriteProject.subheading}</h4>
          ${favoriteProject.paragraphs.map((paragraph) => `<p class="ssbs-project-note">${paragraph}</p>`).join('')}
        </div>
        ${ssbsPhotoMarkup(favoriteProject.media)}
      </section>
      <div class="chapter-end"><span>end of chapter ${chapter.number}</span><button type="button" data-next>next chapter →</button></div>
    </div>`;
  }

  function travelPhotoMarkup(item) {
    const media = item.kind === 'video'
      ? `<video src="${item.src}" controls playsinline preload="metadata"${item.poster ? ` poster="${item.poster}"` : ''} aria-label="${item.alt}">Your browser does not support this video.</video>`
      : `<img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async">`;
    return `<figure class="travel-photo${item.kind ? ` is-${item.kind}` : ''}">
      ${media}
      ${item.label ? `<figcaption>${item.label}</figcaption>` : ''}
    </figure>`;
  }

  function travelChapterMarkup(chapter) {
    return `<div class="travel-story" style="--travel-accent:${chapter.accent}">
      <header class="travel-opening">
        <div class="travel-opening-copy">
          <p class="travel-eyebrow">Travel / ${chapter.number}</p>
          <h2 id="travel-title">${chapter.title}</h2>
          <p class="travel-subtitle">${chapter.subtitle}</p>
          <p class="travel-opening-note">${chapter.intro}</p>
        </div>
        <figure class="travel-map">
          <img src="${chapter.map.src}" alt="${chapter.map.alt}" loading="eager" decoding="async">
        </figure>
      </header>
      <div class="travel-destinations">
        ${chapter.scenes.map((scene) => {
          const galleries = scene.id === 'italy'
            ? `<div class="travel-collage travel-collage-italy travel-collage-italy-one">${scene.media.slice(0, 6).map(travelPhotoMarkup).join('')}</div>
               <div class="travel-collage travel-collage-italy travel-collage-italy-two">${scene.media.slice(6).map(travelPhotoMarkup).join('')}</div>`
            : scene.pageSize
              ? Array.from({ length: Math.ceil(scene.media.length / scene.pageSize) }, (_, pageIndex) => {
                  const page = scene.media.slice(pageIndex * scene.pageSize, (pageIndex + 1) * scene.pageSize);
                  return `<div class="travel-collage travel-collage-${scene.id} travel-collage-page travel-collage-page-${pageIndex + 1}">${page.map(travelPhotoMarkup).join('')}</div>`;
                }).join('')
              : `<div class="travel-collage travel-collage-${scene.id}">${scene.media.map(travelPhotoMarkup).join('')}</div>`;
          return `<section class="travel-destination travel-destination-${scene.id}" aria-labelledby="travel-${scene.id}">
            <header class="travel-destination-heading">
              <p>${scene.number} / destination</p>
              <h3 id="travel-${scene.id}">${scene.title}</h3>
              ${scene.places ? `<span>${scene.places}</span>` : ''}
            </header>
            ${galleries}
            ${scene.anecdote ? `<p class="travel-anecdote"><strong>Anecdote:</strong> ${scene.anecdote}</p>` : ''}
          </section>`;
        }).join('')}
      </div>
      <div class="chapter-end"><span>end of chapter ${chapter.number}</span><button type="button" data-next>next chapter →</button></div>
    </div>`;
  }

  function musicMediaMarkup(item) {
    let media;
    if (item.kind === 'video') {
      media = `<video controls preload="metadata" playsinline src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ''} aria-label="${item.label}">Your browser does not support this video.</video>`;
    } else if (item.kind === 'youtube') {
      media = `<iframe src="https://www.youtube-nocookie.com/embed/${item.videoId}?rel=0" title="${item.label}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (item.kind === 'external') {
      media = `<a class="music-video-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="Watch ${item.label} on YouTube">
        <img src="${item.src}" alt="${item.alt || item.label}" loading="lazy" decoding="async">
        <span aria-hidden="true">▶</span>
      </a>`;
    } else {
      media = `<img src="${item.src}" alt="${item.alt || item.label}" loading="lazy" decoding="async">`;
    }
    return `<figure class="music-frame ${item.layout}${item.kind ? ` is-${item.kind}` : ''}">
      <div class="music-media">${media}</div>
      ${item.label ? `<figcaption>${item.label}</figcaption>` : ''}
    </figure>`;
  }

  function musicChapterMarkup(chapter) {
    return `<div class="music-story" style="--music-accent:${chapter.accent}">
      <header class="music-opening">
        <div class="music-opening-copy">
          <p class="music-eyebrow">chapter ${chapter.number} / in my headphones</p>
          <h2 id="music-title">${chapter.title}</h2>
          <p class="music-subtitle">${chapter.subtitle}</p>
          <p class="music-opening-note">${chapter.intro}</p>
        </div>
        <figure class="music-hero-photo">
          <img src="${chapter.hero.src}" alt="${chapter.hero.alt}" loading="eager" decoding="async">
          <figcaption>${chapter.hero.caption}</figcaption>
        </figure>
      </header>
      <div class="music-timeline">
        ${chapter.scenes.map((scene) => `<section class="music-scene music-scene-${scene.id}" aria-labelledby="music-${scene.id}">
          ${scene.title || scene.eyebrow ? `<div class="music-scene-heading"><p>${scene.eyebrow}</p><h3 id="music-${scene.id}">${scene.title}</h3></div>` : ''}
          <p class="music-scene-note">${scene.note}</p>
          ${scene.aside ? `<p class="music-scene-aside">${scene.aside}</p>` : ''}
          <div class="music-gallery">${scene.media.map(musicMediaMarkup).join('')}</div>
        </section>`).join('')}
      </div>
      <div class="chapter-end"><span>end of chapter ${chapter.number}</span><button type="button" data-next>next chapter →</button></div>
    </div>`;
  }

  function rowingMediaMarkup(item) {
    const isVideo = item.kind === 'video';
    const media = item.src
      ? isVideo
        ? `<video controls preload="none" playsinline src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ''} aria-label="${item.label}">Your browser does not support this video.</video>`
        : `<img src="${item.src}" alt="${item.alt || item.label}" loading="lazy" decoding="async">`
      : `<div class="rowing-empty" role="img" aria-label="Empty ${isVideo ? 'video' : 'photo'} space for ${item.label}"><span>${isVideo ? '▶' : '+'}</span><small>${isVideo ? 'VIDEO' : 'PHOTO'} / ${item.key}</small></div>`;
    return `<figure class="rowing-frame ${item.layout}${item.display ? ` ${item.display}` : ''}${isVideo ? ' is-video' : ''}">
      <div class="rowing-media">${media}</div>
      ${item.label ? `<figcaption>${item.label}</figcaption>` : ''}
    </figure>`;
  }

  function rowingBoatStickerMarkup() {
    return `<figure class="rowing-photo-sticker" aria-label="Rowing crew on the water">
      <img src="assets/photos/rowing/crew-hero-2025.jpg" alt="Four rowers moving across dark blue water" loading="eager" decoding="async">
    </figure>`;
  }

  function rowingOarsStickerMarkup() {
    return `<svg class="rowing-sticker rowing-oars-sticker" viewBox="0 0 90 90" aria-hidden="true" focusable="false">
      <circle cx="45" cy="45" r="42" fill="#f6eee1" stroke="#345b83" stroke-width="1.5" stroke-dasharray="3 5"/>
      <path d="M24 65 64 25M24 25l40 40" stroke="#345b83" stroke-width="3" stroke-linecap="round"/>
      <path d="m18 67 10-12 7 7-12 10Zm49 0L55 57l7-7 10 12ZM18 23l10 12 7-7L23 18Zm49 0L55 33l7 7 10-12Z" fill="#d48658" stroke="#345b83" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`;
  }

  function rowingChapterMarkup(chapter) {
    return `<div class="rowing-story" style="--rowing-ink:${chapter.accent}">
      <header class="rowing-opening">
        <p class="rowing-eyebrow">chapter ${chapter.number} / on the water</p>
        <div class="rowing-title-row"><h2 id="rowing-title">${chapter.title}</h2><span class="rowing-spark" aria-hidden="true">✳</span></div>
        ${rowingBoatStickerMarkup()}
        <p class="rowing-subtitle">${chapter.subtitle}</p>
        <p class="rowing-opening-note">${chapter.intro}</p>
        <div class="rowing-ripple" aria-hidden="true">≈ &nbsp; ≈ &nbsp; ≈</div>
      </header>
      <div class="rowing-timeline">
        ${chapter.scenes.map((scene) => `<section class="rowing-scene rowing-scene-${scene.id}" aria-labelledby="rowing-${scene.id}">
          <div class="rowing-scene-heading"><p>${scene.eyebrow}</p><h3 id="rowing-${scene.id}">${scene.title}</h3></div>
          ${['winter', 'autumn'].includes(scene.id) ? rowingOarsStickerMarkup() : ''}
          ${scene.note ? `<p class="rowing-scene-note">${scene.note}</p>` : ''}
          ${scene.aside ? `<p class="rowing-scene-aside">${scene.aside}</p>` : ''}
          <div class="rowing-gallery">${scene.media.map(rowingMediaMarkup).join('')}</div>
        </section>`).join('')}
      </div>
      <div class="chapter-end"><span>end of chapter ${chapter.number}</span><button type="button" data-next>next chapter →</button></div>
    </div>`;
  }

  site.chapters.forEach((chapter) => {
    document.querySelector(`#page-${chapter.id}`).innerHTML = chapterMarkup(chapter);
  });

  document.querySelector('#chapter-covers').innerHTML = site.chapters.map((chapter, index) => `
    <button class="cover cover-${index + 1}" type="button" data-page-link="${chapter.id}" style="--accent:${chapter.accent}">
      <span>${chapter.number}</span><strong>${chapter.title}</strong><small>${chapter.subtitle}</small>
      <i aria-hidden="true">open chapter ↗</i>
    </button>`).join('');

  function layoutTravelMasonry() {
    const galleries = document.querySelectorAll(
      '#page-travel .travel-collage-denmark, #page-travel .travel-collage-finland, #page-travel .travel-collage-ireland'
    );

    galleries.forEach((gallery) => {
      const styles = getComputedStyle(gallery);
      const rowHeight = Number.parseFloat(styles.gridAutoRows);
      const rowGap = Number.parseFloat(styles.rowGap);
      if (!rowHeight) return;

      gallery.querySelectorAll('.travel-photo').forEach((figure) => {
        const media = figure.querySelector('img, video');
        const mediaWidth = media?.naturalWidth || media?.videoWidth;
        const mediaHeight = media?.naturalHeight || media?.videoHeight;
        if (!mediaWidth || !mediaHeight || !figure.clientWidth) return;
        const renderedHeight = figure.clientWidth * mediaHeight / mediaWidth;
        const rowSpan = Math.max(1, Math.ceil((renderedHeight + rowGap) / (rowHeight + rowGap)));
        figure.style.setProperty('--travel-row-span', rowSpan);
      });
    });
  }

  function initTravelMasonry() {
    const mediaItems = document.querySelectorAll(
      '#page-travel .travel-collage-denmark img, #page-travel .travel-collage-finland img, #page-travel .travel-collage-ireland img, #page-travel .travel-collage-ireland video'
    );

    mediaItems.forEach((media) => {
      if (media.tagName === 'VIDEO') {
        if (media.readyState < 1) media.addEventListener('loadedmetadata', layoutTravelMasonry, { once: true });
      } else if (!media.complete) {
        media.addEventListener('load', layoutTravelMasonry, { once: true });
      }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(layoutTravelMasonry, 120);
    });

    requestAnimationFrame(layoutTravelMasonry);
  }

  const validPages = ['home', ...site.chapters.map((chapter) => chapter.id)];

  function showPage(id, updateHash = true) {
    const requestedId = id === 'shooting' ? 'ssbs-tv' : id;
    const pageId = validPages.includes(requestedId) ? requestedId : 'home';
    document.querySelectorAll('.page').forEach((page) => page.classList.toggle('active', page.dataset.page === pageId));
    document.querySelectorAll('[data-page-link]').forEach((button) => {
      const active = button.dataset.pageLink === pageId;
      button.classList.toggle('active', active);
      if (button.closest('nav')) button.setAttribute('aria-current', active ? 'page' : 'false');
    });
    content.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    if (updateHash) history.replaceState(null, '', `#${pageId}`);
    const chapter = site.chapters.find((item) => item.id === pageId);
    document.title = pageId === 'home' ? "Elan's little world" : `${chapter?.title || pageId} — Elan`;
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }

  document.addEventListener('click', (event) => {
    const pageLink = event.target.closest('[data-page-link]');
    if (pageLink) showPage(pageLink.dataset.pageLink);
    const next = event.target.closest('[data-next]');
    if (next) {
      const current = document.querySelector('.page.active').dataset.page;
      const index = site.chapters.findIndex((chapter) => chapter.id === current);
      showPage(site.chapters[(index + 1) % site.chapters.length].id);
    }
  });

  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.focus();
    }
  });

  function initMediaReveal() {
    const frames = [...document.querySelectorAll('#page-rowing .rowing-frame, #page-music .music-frame, #page-travel .travel-photo, #page-ssbs-tv .ssbs-photo')];
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    frames.forEach((frame, index) => {
      frame.classList.add('reveal-on-scroll');
      frame.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      frames.forEach((frame) => frame.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    frames.forEach((frame) => observer.observe(frame));
  }

  window.addEventListener('hashchange', () => showPage(location.hash.slice(1), false));
  initTravelMasonry();
  initMediaReveal();
  showPage(location.hash.slice(1) || 'home', false);
})();
