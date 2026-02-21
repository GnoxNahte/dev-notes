// Inspired by: https://codepen.io/lvtgsfkc-the-scripter/pen/rNXaVOE

function setupHoverBoxForContainer(containerSelector: string, boxSelector = '.hover-box') {
  const container = document.querySelector(containerSelector) as HTMLElement;

  // Happens if notes don't have toc
  if (!container)
    return;

  const box = container.querySelector(boxSelector) as HTMLElement;
  const scrollContainer = box?.parentElement?.querySelector("ul") as HTMLElement;
  console.log(containerSelector, "\n", scrollContainer);

  container.addEventListener('mouseover', (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('li') as HTMLElement;
    if (!target || target.classList.contains("overflow-end")) 
        return ;

    const { offsetTop, offsetHeight } = target
    box.style.transform = `translateY(${offsetTop - scrollContainer.scrollTop}px)`
    box.style.height = offsetHeight + 'px'
    box.style.opacity = "var(--hover-box-active-opacity)";
  })

  container.addEventListener('mouseleave', () => {
    box.style.opacity = "0";
  })
}

function setupHoverBox() {
    setupHoverBoxForContainer('.explorer-content');
    // setupHoverBoxForContainer('.toc');
    setupHoverBoxForContainer('.backlinks');
}

document.addEventListener("nav", setupHoverBox);