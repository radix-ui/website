export function scrollToUrlHash(path) {
  const [_, hashLocation] = path.split('#');
  if (hashLocation) {
    const anchor = document.querySelector(`[data-id="${hashLocation}]"`);
    if (!anchor) {
      return;
    }
    const scrollMargin = 20;
    const distanceToScroll = window.pageYOffset + anchor.getBoundingClientRect().top - scrollMargin;

    window.scrollTo(0, distanceToScroll);
  }
}
